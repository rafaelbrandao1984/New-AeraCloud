import { leadApiUrl, whatsappUrl } from "./content";

export type LeadPayload = {
  nome: string;
  telefone: string;
  servico: string;
  mensagem?: string;
  origem?: string;
  pagina?: string;
};

export function buildWhatsAppLeadMessage(data: LeadPayload): string {
  return [
    "Olá! Gostaria de agendar meu diagnóstico gratuito de infraestrutura (30 min).",
    "",
    `Nome: ${data.nome}`,
    `Telefone: ${data.telefone}`,
    `Serviço: ${data.servico || "Não informado"}`,
    data.mensagem ? `Mensagem: ${data.mensagem}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

export function openWhatsAppWithLead(data: LeadPayload): void {
  const url = `${whatsappUrl}?text=${encodeURIComponent(buildWhatsAppLeadMessage(data))}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export async function submitLeadToApi(payload: LeadPayload): Promise<void> {
  const response = await fetch(leadApiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...payload,
      origem: payload.origem ?? "aeracloud-site",
      pagina: payload.pagina ?? "homepage",
    }),
  });

  if (!response.ok) {
    throw new Error(`Lead API error: ${response.status}`);
  }
}

export function trackLeadSubmission(formId: string): void {
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") {
    gtag("event", "generate_lead", { form_id: formId });
  }

  const dataLayer = (window as Window & { dataLayer?: Record<string, unknown>[] }).dataLayer;
  dataLayer?.push({
    event: "submit_lead_form",
    form_id: formId,
  });
}
