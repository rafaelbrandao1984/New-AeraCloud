import {
  Activity,
  BadgeDollarSign,
  Cloud,
  Layers,
  ShieldCheck,
  UserCog,
  type LucideIcon,
} from "lucide-react";

export const whatsappUrl = "https://wa.me/5561992513658";
export const whatsappDisplay = "(61) 99251-3658";
export const email = "contato@aeracloud.com.br";

export const socialLinks = {
  instagram: "https://www.instagram.com/aera_cloud/",
  linkedin: "https://linkedin.com/company/aeracloud",
};

/** URL da Cloud Function submitLead (região southamerica-east1) */
export const leadApiUrl =
  import.meta.env.VITE_LEAD_API_URL ??
  "https://southamerica-east1-aera-cloud.cloudfunctions.net/submitLead";

export const contactBenefits = [
  "Diagnóstico gratuito de 30 minutos — sem compromisso",
  "Retorno em horário comercial, com prioridade no mesmo dia útil",
  "Engenheiro de cloud, não atendente genérico",
  "Escopo e investimento transparentes antes de iniciar",
];

export const contactInterestOptions = [
  "Suporte Gerenciado Básico",
  "Suporte Gerenciado Pro",
  "Diagnóstico + Migração para Cloud",
  "Outro",
] as const;

/** Dados legais da empresa — aparecem no rodapé */
export const company = {
  legalName: "AeraCloud Soluções em Tecnologia",
  cnpj: "66.099.397/0001-29",
  representative: "Rafael Brandão",
  city: "Brasília, DF – Brasil",
};

export const painPoints = [
  {
    quote: "Servidor caiu e ninguém sabe como arrumar",
    consequence: "Perda de receita, pacientes e clientes furiosos.",
  },
  {
    quote: "Dados sem backup automático",
    consequence: "Ransomware, perda total, negócio fechado.",
  },
  {
    quote: "Quero migrar para cloud, mas com medo",
    consequence: "Não sabe por onde começar, medo de perder dados.",
  },
  {
    quote: "TI é um custo, não uma vantagem",
    consequence: "Ninguém monitora nada, tudo é reativo.",
  },
];

export const solutionPhases = [
  {
    phase: "Fase 1",
    title: "Estabilizar",
    description:
      "Estruturamos sua infraestrutura local, backup automático e monitoramento 24/7.",
  },
  {
    phase: "Fase 2",
    title: "Proteger",
    description:
      "Segurança proativa, compliance, ransomware monitoring e acesso remoto seguro.",
  },
  {
    phase: "Fase 3",
    title: "Migrar",
    description: "Cloud gradual em GCP ou Azure, sem risco — migramos aos poucos.",
  },
];

export type Differentiator = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const differentiators: Differentiator[] = [
  {
    icon: Activity,
    title: "Monitoramento 24/7",
    description: "Problemas resolvidos antes de quebrar.",
  },
  {
    icon: Layers,
    title: "Migração Gradual",
    description: "Você não perde nada — migramos aos poucos.",
  },
  {
    icon: Cloud,
    title: "Expertise em Cloud",
    description: "GCP + Azure com engenheiro dedicado, não terceirizado.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Proativa",
    description: "Backup automático, ransomware monitoring e compliance.",
  },
  {
    icon: BadgeDollarSign,
    title: "Preço Justo",
    description: "R$ 1.000–3.000/mês — não R$ 5.000+.",
  },
  {
    icon: UserCog,
    title: "Suporte Técnico Real",
    description: "Engenheiro, não atendente.",
  },
];

export const caseStudies = [
  {
    title: "Clínica Odontológica — 15 pessoas",
    before:
      "Servidor local quebrado 2x/mês, pacientes furiosos, dados sem backup.",
    after: "Zero downtime, backup automático, monitoramento 24/7, pronta para crescer.",
    result: "+30% produtividade, -50% stress do gestor",
  },
  {
    title: "Escritório de Advocacia — 25 pessoas",
    before: "Medo de cloud, infraestrutura local instável, sem compliance.",
    after: "Migração gradual para cloud, compliance ok, backup seguro.",
    result: "Crescimento sem medo, acesso remoto seguro, dados protegidos",
  },
];

export const plans = [
  {
    name: "Suporte Gerenciado Básico",
    price: "1.000",
    badge: "",
    features: [
      "Monitoramento 24/7",
      "Backup automático",
      "Suporte técnico por e-mail e chat",
      "Até 10 horas/mês de consultoria",
    ],
  },
  {
    name: "Suporte Gerenciado Pro",
    price: "2.000",
    badge: "Mais escolhido",
    features: [
      "Tudo do plano Básico",
      "Ransomware monitoring",
      "Compliance (LGPD, etc.)",
      "Suporte telefônico para emergências",
      "Até 20 horas/mês de consultoria",
    ],
  },
  {
    name: "Transformação Digital",
    price: "custom",
    badge: "À parte",
    features: [
      "Diagnóstico completo (grátis)",
      "Planejamento de migração",
      "Migração faseada (3–6 meses)",
      "Valor a combinar (R$ 5.000–15.000 conforme complexidade)",
    ],
  },
];
