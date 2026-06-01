import { useId, useState, type ChangeEvent, type FormEvent } from "react";
import { contactInterestOptions } from "../content";
import { openWhatsAppWithLead, submitLeadToApi, trackLeadSubmission, type LeadPayload } from "../leadApi";

const FORM_ID = "lead-form-home";

type FormState = {
  nome: string;
  telefone: string;
  servico: string;
  mensagem: string;
};

const initialState: FormState = {
  nome: "",
  telefone: "",
  servico: "",
  mensagem: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "warning">("idle");
  const [feedback, setFeedback] = useState("");
  const honeypotId = useId();

  const update = (field: keyof FormState) => (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    if (!formElement.reportValidity()) return;

    const honeypot = (formElement.elements.namedItem("website") as HTMLInputElement | null)?.value;
    if (honeypot) return;

    const payload: LeadPayload = {
      nome: form.nome.trim(),
      telefone: form.telefone.trim(),
      servico: form.servico.trim() || "Não informado",
      mensagem: form.mensagem.trim() || undefined,
      origem: "aeracloud-site",
      pagina: "homepage",
    };

    setStatus("submitting");
    setFeedback("");

    let savedRemotely = false;
    try {
      await submitLeadToApi(payload);
      savedRemotely = true;
    } catch {
      savedRemotely = false;
    }

    trackLeadSubmission(FORM_ID);
    openWhatsAppWithLead(payload);

    formElement.reset();
    setForm(initialState);

    if (savedRemotely) {
      setStatus("success");
      setFeedback("Registramos seu contato e abrimos o WhatsApp. Se a janela não abriu, use o botão verde no canto da tela.");
    } else {
      setStatus("warning");
      setFeedback(
        "Abrimos o WhatsApp com sua mensagem. Se preferir, envie pelo botão verde — não foi possível registrar o formulário no servidor neste momento.",
      );
    }
  };

  const inputClass =
    "w-full rounded-xl border border-gray-700 bg-gray-950 px-4 py-3 text-white placeholder:text-gray-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/30 transition";

  return (
    <form id={FORM_ID} className="space-y-4 text-left" onSubmit={handleSubmit} data-track-form={FORM_ID}>
      <input type="hidden" name="origem" value="aeracloud-site" />
      <input type="hidden" name="pagina" value="homepage" />

      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor={honeypotId}>Website</label>
        <input id={honeypotId} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="lead-nome" className="mb-2 block text-sm font-medium text-gray-300">
          Nome
        </label>
        <input
          id="lead-nome"
          name="nome"
          type="text"
          required
          minLength={2}
          maxLength={120}
          autoComplete="name"
          value={form.nome}
          onChange={update("nome")}
          className={inputClass}
          placeholder="Seu nome completo"
        />
      </div>

      <div>
        <label htmlFor="lead-telefone" className="mb-2 block text-sm font-medium text-gray-300">
          Telefone / WhatsApp
        </label>
        <input
          id="lead-telefone"
          name="telefone"
          type="tel"
          required
          autoComplete="tel"
          value={form.telefone}
          onChange={update("telefone")}
          className={inputClass}
          placeholder="(61) 99999-9999"
        />
      </div>

      <div>
        <label htmlFor="lead-servico" className="mb-2 block text-sm font-medium text-gray-300">
          Serviço de interesse
        </label>
        <select
          id="lead-servico"
          name="servico"
          value={form.servico}
          onChange={update("servico")}
          className={`${inputClass} text-gray-200`}
        >
          <option value="">Selecione...</option>
          {contactInterestOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="lead-mensagem" className="mb-2 block text-sm font-medium text-gray-300">
          Resumo da necessidade <span className="font-normal text-gray-500">(opcional)</span>
        </label>
        <textarea
          id="lead-mensagem"
          name="mensagem"
          rows={3}
          maxLength={2000}
          value={form.mensagem}
          onChange={update("mensagem")}
          className={`${inputClass} resize-none`}
          placeholder="Ex.: preciso de um site rápido e aparecer no Google na minha região."
        />
      </div>

      {feedback && (
        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${status === "success" ? "text-emerald-300" : status === "warning" ? "text-amber-300" : "text-gray-400"}`}
        >
          {feedback}
        </p>
      )}

      <p className="text-xs text-gray-500">
        Ao enviar, você concorda em ser contatado para proposta comercial, conforme nossa{" "}
        <a href="/politica-de-privacidade" className="text-emerald-400 underline hover:text-emerald-300">
          Política de Privacidade
        </a>
        .
      </p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-xl bg-emerald-500 py-4 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
        data-track-event="submit_lead_form_home"
      >
        {status === "submitting" ? "Enviando..." : "Enviar e abrir WhatsApp →"}
      </button>
    </form>
  );
}
