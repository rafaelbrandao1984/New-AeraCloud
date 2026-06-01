import { onRequest } from "firebase-functions/v2/https";
import { setGlobalOptions } from "firebase-functions/v2";
import * as admin from "firebase-admin";
import * as logger from "firebase-functions/logger";

admin.initializeApp();

setGlobalOptions({
  region: "southamerica-east1",
  maxInstances: 10,
});

const ALLOWED_ORIGINS = new Set([
  "https://www.aeracloud.com.br",
  "https://aeracloud.com.br",
  "http://localhost:5173",
  "http://127.0.0.1:5173",
]);

type LeadBody = {
  nome?: string;
  telefone?: string;
  servico?: string;
  mensagem?: string;
  origem?: string;
  pagina?: string;
  website?: string;
};

function applyCors(req: { get(name: string): string | undefined }, res: { set(name: string, value: string): void }) {
  const origin = req.get("Origin") ?? "";
  if (ALLOWED_ORIGINS.has(origin)) {
    res.set("Access-Control-Allow-Origin", origin);
    res.set("Vary", "Origin");
  }
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");
}

function sanitize(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

export const submitLead = onRequest(async (req, res) => {
  applyCors(req, res);

  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const body = (req.body ?? {}) as LeadBody;

  if (sanitize(body.website, 200)) {
    res.status(200).json({ ok: true });
    return;
  }

  const nome = sanitize(body.nome, 120);
  const telefone = sanitize(body.telefone, 40);
  const servico = sanitize(body.servico, 120) || "Não informado";
  const mensagem = sanitize(body.mensagem, 2000);
  const origem = sanitize(body.origem, 80) || "site";
  const pagina = sanitize(body.pagina, 120) || "homepage";

  if (!nome || nome.length < 2) {
    res.status(400).json({ error: "Nome inválido" });
    return;
  }

  const phoneDigits = telefone.replace(/\D/g, "");
  if (phoneDigits.length < 10 || phoneDigits.length > 13) {
    res.status(400).json({ error: "Telefone inválido" });
    return;
  }

  try {
    const doc = await admin.firestore().collection("leads").add({
      nome,
      telefone,
      servico,
      mensagem: mensagem || null,
      origem,
      pagina,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      userAgent: sanitize(req.get("User-Agent"), 300) || null,
      referer: sanitize(req.get("Referer"), 500) || null,
    });

    logger.info("Lead salvo", { leadId: doc.id, origem, pagina });

    res.status(200).json({ ok: true, id: doc.id });
  } catch (error) {
    logger.error("Erro ao salvar lead", error);
    res.status(500).json({ error: "Não foi possível registrar o contato" });
  }
});
