import {
  Building2,
  Calculator,
  Clock,
  Cloud,
  Eye,
  FileCheck,
  Headphones,
  HeartPulse,
  Lock,
  Scale,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export const whatsappUrl = "https://wa.me/5561992513658";
export const email = "rafael.brandao@aeracloud.com.br";

/** Preencha quando tiver CNPJ ativo — aparece no rodapé e na seção de confiança */
export const company = {
  legalName: "AeraCloud Soluções em Tecnologia",
  cnpj: "",
  city: "Brasília, DF – Brasil",
};

export const services = [
  {
    title: "Suporte técnico gerenciado",
    description:
      "Atendimento humano para resolver incidentes, dúvidas e solicitações do dia a dia — sem fila infinita nem robô genérico.",
  },
  {
    title: "Monitoramento e alertas",
    description:
      "Acompanhamento contínuo de site, e-mail e serviços críticos, com aviso antes que o cliente perceba a falha.",
  },
  {
    title: "Backup e recuperação",
    description:
      "Rotinas automáticas de backup e orientação para restauração quando algo sai do esperado.",
  },
  {
    title: "Análise e gestão de cloud",
    description:
      "Diagnóstico de ambientes Azure e GCP, revisão de custos, performance e arquitetura com recomendações práticas.",
  },
];

export const values = [
  {
    title: "Atendimento que fala a sua língua",
    description:
      "Explicamos o problema e a solução de forma clara, sem jargão desnecessário — você entende o que está acontecendo.",
  },
  {
    title: "Transparência no contrato",
    description:
      "Escopo, canais de suporte e o que está incluso definidos por escrito antes de começar.",
  },
  {
    title: "Operação preventiva",
    description:
      "Monitoramos e mantemos a infraestrutura para evitar paradas em períodos críticos do seu negócio.",
  },
];

export const industries = [
  {
    icon: Scale,
    title: "Advocacia",
    description:
      "Site, e-mail e sistemas jurídicos monitorados para manter a operação disponível quando o escritório mais precisa.",
  },
  {
    icon: Calculator,
    title: "Contabilidade",
    description:
      "Backups automáticos, monitoramento e suporte reforçado em períodos de fechamento e entrega de obrigações.",
  },
  {
    icon: HeartPulse,
    title: "Clínicas",
    description:
      "Agenda, prontuário e sistemas de atendimento com monitoramento para evitar paradas no horário de consultas.",
  },
  {
    icon: Building2,
    title: "Empresas",
    description:
      "Infraestrutura estável para quem depende de e-mail, site e sistemas internos no dia a dia.",
  },
];

export type TrustPillar = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const trustPillars: TrustPillar[] = [
  {
    icon: Cloud,
    title: "Análise de cloud",
    description:
      "Revisão de ambientes Azure e GCP: custos, performance e arquitetura, com plano de ação claro para evoluir a infraestrutura.",
  },
  {
    icon: Lock,
    title: "Acesso controlado",
    description:
      "Políticas de senha, permissões e registro de quem acessa o quê — menos risco de vazamento interno.",
  },
  {
    icon: Eye,
    title: "Monitoramento ativo",
    description:
      "Alertas quando site, e-mail ou serviços essenciais apresentam instabilidade, antes do prejuízo operacional.",
  },
  {
    icon: FileCheck,
    title: "Contrato claro",
    description:
      "Escopo, prazos de resposta e canais de atendimento documentados — sem surpresa na fatura ou no suporte.",
  },
];

export const supportProcess = [
  {
    step: "01",
    title: "Diagnóstico gratuito",
    description:
      "Conversa de 15 minutos para mapear riscos, prioridades e o que mais impacta sua operação hoje.",
  },
  {
    step: "02",
    title: "Proposta sob medida",
    description:
      "Plano com escopo, investimento mensal e o que está incluso — você decide com informação, não no escuro.",
  },
  {
    step: "03",
    title: "Implantação",
    description:
      "Configuramos monitoramento, backups e canais de suporte. Você recebe um resumo do que foi feito.",
  },
  {
    step: "04",
    title: "Suporte contínuo",
    description:
      "Atendimento pelo WhatsApp e e-mail, com registro dos chamados e acompanhamento até a resolução.",
  },
];

/** Compromissos operacionais — ajuste os valores em content.ts conforme seu contrato real */
export const serviceCommitments = [
  { icon: Clock, label: "Primeira resposta", value: "até 4h úteis" },
  { icon: Eye, label: "Monitoramento", value: "24h" },
  { icon: ShieldCheck, label: "Backups", value: "diários" },
  { icon: Headphones, label: "Canal direto", value: "WhatsApp" },
];

export const plans = [
  {
    name: "Suporte & Manutenção",
    price: "350",
    badge: "",
    features: [
      "Monitoramento 24h de site e e-mail",
      "Backups diários automáticos",
      "Suporte via WhatsApp",
      "Resolução rápida de incidentes",
    ],
  },
  {
    name: "Gestão Especializada",
    price: "custom",
    badge: "Mais escolhido",
    features: [
      "Tudo do plano anterior",
      "Consultoria mensal personalizada",
      "Otimização mensal de velocidade",
      "Blindagem de segurança em GCP e Azure",
      "Atendimento prioritário",
    ],
  },
];

