import {
  BarChart3,
  Building2,
  Calculator,
  Clock,
  Cloud,
  Eye,
  FileCheck,
  Headphones,
  HeartPulse,
  Scale,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const whatsappUrl = "https://wa.me/5561992513658";
export const whatsappDisplay = "(61) 99251-3658";
export const email = "rafael.brandao@aeracloud.com.br";

/** URL da Cloud Function submitLead (região southamerica-east1) */
export const leadApiUrl =
  import.meta.env.VITE_LEAD_API_URL ??
  "https://southamerica-east1-aera-cloud.cloudfunctions.net/submitLead";

export const contactBenefits = [
  "Diagnóstico inicial gratuito de presença digital e infraestrutura",
  "Retorno em horário comercial, com prioridade no mesmo dia útil",
  "Especialistas em Brasília: site, Google Empresas, analytics e cloud",
  "Escopo e investimento transparentes antes de iniciar o projeto",
];

export const contactInterestOptions = [
  "Site institucional ou landing page",
  "Google Meu Negócio e SEO local",
  "GA4, GTM e mensuração de conversão",
  "Sustentação, suporte e cloud (GCP / Azure)",
  "Projeto corporativo sob medida",
  "Outro",
] as const;

/** Dados legais da empresa — aparecem no rodapé e na seção de confiança */
export const company = {
  legalName: "AeraCloud Soluções em Tecnologia",
  cnpj: "66.099.397/0001-29",
  representative: "Rafael Brandão",
  city: "Brasília, DF – Brasil",
};

export const services = [
  {
    title: "Sites Profissionais & Landing Pages",
    description:
      "Páginas rápidas, otimizadas para SEO e pensadas para conversão — layout moderno, mobile-first e foco em transformar visitas em leads qualificados.",
  },
  {
    title: "Google Meu Negócio & SEO Local",
    description:
      "Configuração e otimização do perfil no Google para colocar seu escritório no mapa, aparecer nas buscas locais e atrair clientes da sua região.",
  },
  {
    title: "Análise de Dados (GA4 & GTM)",
    description:
      "Integração de Google Analytics 4 e Tag Manager para mensurar leads, comportamento de usuários e o retorno real das suas ações digitais.",
  },
  {
    title: "Sustentação, Suporte & Cloud",
    description:
      "Gerenciamento e monitoramento em GCP e Azure, e-mails corporativos, backups e segurança — suporte proativo para sua operação não parar.",
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
      "Site institucional rápido, perfil no Google otimizado e analytics para captar consultas — sem perder cliente por página lenta ou invisível.",
  },
  {
    icon: Calculator,
    title: "Contabilidade",
    description:
      "Presença local forte na temporada de obrigações, landing para serviços e estrutura estável quando o volume de acessos sobe.",
  },
  {
    icon: HeartPulse,
    title: "Clínicas",
    description:
      "Agendamento online, Google Empresas e site performático para quem busca especialidade na região — antes do concorrente aparecer.",
  },
  {
    icon: Building2,
    title: "Empresas",
    description:
      "Marca encontrável, dados de campanha confiáveis e nuvem segura para quem não pode depender de site amador ou fora do ar.",
  },
];

export type TrustPillar = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const trustPillars: TrustPillar[] = [
  {
    icon: Zap,
    title: "Metodologia Ágil",
    description:
      "Entregas por etapas, feedback rápido e ajustes contínuos — do briefing ao site no ar sem meses de espera sem visibilidade.",
  },
  {
    icon: BarChart3,
    title: "Decisões Baseadas em Dados",
    description:
      "GA4 e GTM configurados desde o início para você enxergar leads, origem de tráfego e comportamento real dos visitantes.",
  },
  {
    icon: FileCheck,
    title: "Contrato Transparente",
    description:
      "Escopo, prazos, investimento e o que está incluso documentados antes de começar — sem surpresa na entrega ou na fatura.",
  },
  {
    icon: Cloud,
    title: "Infraestrutura de Elite",
    description:
      "Ambientes em Google Cloud e Azure com monitoramento, backups e boas práticas de segurança para sustentar seu crescimento digital.",
  },
];

export const supportProcess = [
  {
    step: "01",
    title: "Diagnóstico Inicial",
    description:
      "Conversa de 15 minutos para avaliar site, Google Meu Negócio, analytics e infraestrutura — com prioridades claras para o seu negócio.",
  },
  {
    step: "02",
    title: "Planejamento & Briefing",
    description:
      "Definimos escopo, cronograma, investimento e entregáveis: páginas, SEO local, tags de conversão e requisitos de nuvem.",
  },
  {
    step: "03",
    title: "Desenvolvimento & Setup",
    description:
      "Construímos o site ou landing, configuramos Google Empresas, GA4/GTM e ambiente em nuvem — com validação em cada marco.",
  },
  {
    step: "04",
    title: "Monitoramento & Suporte Contínuo",
    description:
      "Acompanhamos performance, disponibilidade e evoluções recorrentes com suporte humano via WhatsApp e e-mail.",
  },
];

/** Compromissos operacionais — ajuste os valores em content.ts conforme seu contrato real */
export const serviceCommitments = [
  { icon: ShieldCheck, label: "Uptime garantido", value: "99.9%" },
  { icon: Clock, label: "Prazo de entrega", value: "garantido" },
  { icon: Headphones, label: "Suporte humano", value: "< 30 min" },
  { icon: Eye, label: "Monitoramento", value: "24/7" },
];

export const plans = [
  {
    name: "Sustentação & Evolução",
    price: "350",
    badge: "",
    features: [
      "Monitoramento 24/7 de site, e-mail e cloud",
      "Manutenção de GA4, GTM e Google Meu Negócio",
      "Otimizações recorrentes de performance e SEO",
      "Suporte humano via WhatsApp com SLA ágil",
      "Gestão inicial em GCP e Azure",
    ],
  },
  {
    name: "Projetos Corporativos / Custom",
    price: "custom",
    badge: "Mais escolhido",
    features: [
      "Site institucional ou landing page do zero",
      "Migração e setup completo em GCP ou Azure",
      "Tracking avançado: GA4, GTM e eventos de conversão",
      "SEO local e configuração do Google Meu Negócio",
      "Cronograma e escopo sob medida para o seu negócio",
    ],
  },
];

