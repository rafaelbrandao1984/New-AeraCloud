import { Building2, Calculator, HeartPulse, Scale } from "lucide-react";

export const whatsappUrl = "https://wa.me/5561992513658";
export const email = "rafael.brandao@aeracloud.com.br";

export const services = [
  {
    title: "Observabilidade & SRE",
    description:
      "Monitoramento, alertas e engenharia de confiabilidade para reduzir falhas e acelerar a recuperação.",
  },
  {
    title: "Cloud Management",
    description:
      "Arquitetura cloud escalável, otimização de custos e governança para ambientes Azure, Google Cloud e multi-cloud.",
  },
  {
    title: "Automação DevOps",
    description:
      "Pipelines, infraestrutura como código e automação de deploys com práticas de segurança e compliance integradas.",
  },
  {
    title: "Segurança & Resiliência",
    description:
      "Proteção de dados, backup automatizado e políticas de acesso que mantêm a operação segura e disponível.",
  },
];

export const values = [
  {
    title: "Estratégia alinhada ao negócio",
    description:
      "Soluções implementadas para entregar resultado real em performance, custo e continuidade.",
  },
  {
    title: "Operação transparente",
    description:
      "Relatórios operacionais claros, dashboards e indicadores que mostram o impacto real.",
  },
  {
    title: "Tecnologia confiável",
    description:
      "Infraestrutura desenhada para disponibilidade, segurança e evolução contínua.",
  },
];

export const industries = [
  {
    icon: Scale,
    title: "Advocacia",
    description:
      "Sigilo e disponibilidade para manter sistemas jurídicos acessíveis sem expor dados sensíveis.",
  },
  {
    icon: Calculator,
    title: "Contabilidade",
    description:
      "Conformidade, integridade de dados, backups automáticos e operação contínua em períodos críticos.",
  },
  {
    icon: HeartPulse,
    title: "Clínicas",
    description:
      "Sistemas sempre disponíveis e proteção de dados sensíveis de pacientes com controles de segurança robustos.",
  },
  {
    icon: Building2,
    title: "Empresas",
    description:
      "Infraestrutura escalável para crescer com estabilidade, suporte dedicado e governança desde o início.",
  },
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

export const stats = [
  { label: "Clientes ativos", value: "15+" },
  { label: "SLA alvo", value: "99,95%" },
  { label: "Ambientes gerenciados", value: "30+" },
  { label: "Redução de custos", value: "até 40%" },
];
