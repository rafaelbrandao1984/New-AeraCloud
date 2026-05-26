import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { GlowCard } from "./components/GlowCard";
import { motion } from "motion/react";
import pilaresImage from "../assets/pilares.png";
import {
  company,
  email,
  industries,
  plans,
  serviceCommitments,
  services,
  supportProcess,
  trustPillars,
  values,
  whatsappUrl,
} from "./content";

const diagnosticUrl = `${whatsappUrl}?text=${encodeURIComponent(
  "Olá! Quero agendar meu diagnóstico gratuito de Presença Digital e Infraestrutura (15 min).",
)}`;

export default function App() {
  return (
    <div className="min-h-screen bg-[#020813] text-white">
      <Header />

      <section className="pt-32 pb-14 px-6 md:pb-20" id="home">
        <div className="container mx-auto max-w-6xl grid gap-14 lg:grid-cols-[1.2fr_1fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-emerald-300 font-semibold">
              Aera Cloud
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Construímos sua presença digital. Garantimos sua estrutura.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
              Sites profissionais de alta conversão, posicionamento no Google Empresas, mensuração com Analytics e Tag Manager, e infraestrutura segura em nuvem — para advocacia, contabilidade, clínicas e empresas que precisam ser encontradas e nunca ficar offline.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                Fale com especialista
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-gray-700 bg-slate-950/10 px-8 py-4 text-sm font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-300"
              >
                Ver serviços
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GlowCard className="overflow-hidden border border-gray-800">
              <img
                src={pilaresImage}
                alt="Presença digital, performance e infraestrutura — Aera Cloud"
                width="1536"
                height="1024"
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            </GlowCard>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border-y border-emerald-500/20">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Diagnóstico de Presença Digital e Infraestrutura
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Em 15 minutos mapeamos se o seu site está lento ou invisível, se o Google Empresas está otimizado para atrair clientes locais e se sua nuvem está segura — com prioridades claras para crescer com estabilidade.
            </p>
            <a
              href={diagnosticUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Quero meu diagnóstico digital
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6" id="services">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">Serviços</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Presença digital, performance e infraestrutura — na ordem certa
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Do site que converte à nuvem que sustenta sua operação, com mensuração e visibilidade local no meio do caminho.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <GlowCard key={service.title} className="p-8 bg-gray-900/60 border-gray-800">
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-950/40 border-t border-gray-800" id="about">
        <div className="container mx-auto max-w-6xl grid gap-16 lg:grid-cols-[1fr_0.9fr] items-center">
          <div>
            <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">Quem somos</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Sua empresa na internet do jeito certo — e sempre no ar.
            </h2>
            <p className="mt-6 text-gray-400 max-w-xl leading-relaxed">
              A Aera Cloud é parceira de crescimento digital: colocamos seu escritório ou clínica no mapa online com site, Google e dados mensuráveis, e garantimos a infraestrutura para que você nunca perca um cliente por indisponibilidade.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="rounded-3xl border border-gray-800 bg-gray-900/70 p-6">
                  <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                  <p className="mt-3 text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <GlowCard className="p-8 bg-gradient-to-br from-emerald-500/10 to-cyan-500/5 border border-gray-800">
            <div className="space-y-4">
              <p className="text-emerald-300 uppercase tracking-[0.35em] text-sm font-semibold">Visão</p>
              <h3 className="text-3xl font-bold">Crescer online com base sólida.</h3>
              <p className="text-gray-400 leading-relaxed">
                Você foca em atender clientes e pacientes; nós entregam site, visibilidade local, analytics e a estrutura em nuvem que sustenta tudo isso — com processo transparente do primeiro briefing à operação contínua.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li>• Desenvolvimento moderno e otimizado para SEO</li>
                <li>• Decisões baseadas em dados com Google Analytics</li>
                <li>• Infraestrutura robusta em Azure e Google Cloud</li>
              </ul>
            </div>
          </GlowCard>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-gray-800" id="industries">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">
              Ideal para quem depende de ser encontrado
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Site lento ou invisível no Google custa clientes todos os dias
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Quem não aparece na busca local ou perde o visitante em segundos perde faturamento e reputação — adaptamos site, Google Empresas e infraestrutura ao seu segmento.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <GlowCard key={industry.title} className="p-8 bg-gray-900/60 border-gray-800 text-center">
                <industry.icon className="mx-auto mb-4 h-12 w-12 text-emerald-400" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-white mb-3">{industry.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{industry.description}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-950/40 border-t border-gray-800" id="trust">
        <motion.div
          className="container mx-auto max-w-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">Por que confiar</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Performance, visibilidade e estrutura com processo claro
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Não prometemos apenas “estar no ar” — entregamos site rápido, presença local otimizada, dados confiáveis e nuvem segura, com escopo e investimento definidos antes de começar.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {trustPillars.map((pillar) => (
              <GlowCard key={pillar.title} className="p-8 bg-gray-900/60 border-gray-800">
                <pillar.icon className="mb-4 h-10 w-10 text-emerald-400" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-white mb-3">{pillar.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{pillar.description}</p>
              </GlowCard>
            ))}
          </div>

          {company.cnpj && (
            <p className="mt-10 text-center text-sm text-gray-500">
              {company.legalName} · CNPJ {company.cnpj} · {company.city}
            </p>
          )}
        </motion.div>
      </section>

      <section className="py-20 px-6 border-t border-gray-800" id="process">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">Como funciona</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Do diagnóstico ao site no ar e à sustentação contínua
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Processo simples e transparente — você sabe o que esperar em cada etapa do projeto e da operação.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {supportProcess.map((step) => (
              <div key={step.step} className="relative rounded-3xl border border-gray-800 bg-gray-900/50 p-8">
                <span className="text-3xl font-bold text-emerald-500/30">{step.step}</span>
                <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-950/40 border-t border-gray-800" id="pricing">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">
              Investimento em crescimento digital
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Planos que unem projeto de site e sustentação da sua operação
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Implantação com escopo fechado e mensalidade para manter performance, visibilidade e infraestrutura — sem surpresas.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
            {plans.map((plan) => (
              <GlowCard key={plan.name} className={`p-8 border-gray-800 ${plan.badge ? "border-2 border-emerald-500/50" : ""}`}>
                {plan.badge && (
                  <div className="mb-4 inline-flex rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                    {plan.badge}
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                {plan.price !== "custom" && (
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-emerald-400">R$ {plan.price}</span>
                    <span className="text-gray-400">/mês</span>
                    <p className="mt-2 text-sm text-gray-500">Sustentação após implantação do site e integrações</p>
                  </div>
                )}
                {plan.price === "custom" && (
                  <div className="mb-6">
                    <p className="text-gray-300 font-medium">Projetos sob medida e migração para Nuvem</p>
                    <p className="mt-2 text-sm text-gray-500">
                      Site institucional ou landing, Google Empresas, GA4/GTM e gestão inicial em GCP ou Azure
                    </p>
                  </div>
                )}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-gray-300">
                      <span className="text-emerald-400" aria-hidden="true">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold py-3 text-center transition"
                >
                  {plan.price === "custom" ? "Solicitar proposta" : "Começar agora"}
                </a>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-gray-800" id="commitments">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">O que você pode esperar</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">Compromissos da operação digital</h2>
            <p className="mt-3 text-gray-400 text-sm max-w-xl mx-auto">
              Prazos de entrega, métricas e escopo documentados no contrato — do lançamento do site à sustentação em nuvem.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {serviceCommitments.map((item, index) => (
              <motion.div
                key={item.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <item.icon className="mx-auto mb-3 h-8 w-8 text-emerald-400" aria-hidden="true" />
                <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-1">{item.value}</div>
                <div className="text-gray-400 uppercase tracking-wider text-xs font-semibold">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-950/40" id="contact">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">Presença digital completa</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight">Você não compra apenas um site.</h2>
          <h2 className="text-4xl font-bold tracking-tight text-emerald-400">
            Compra visibilidade, dados e estrutura que não param.
          </h2>
          <p className="mt-6 text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Site rápido, Google Empresas otimizado, analytics configurado e nuvem segura — fale conosco pelo WhatsApp ou e-mail. Respondemos em horário comercial.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <GlowCard className="p-10 bg-gray-900/80 border-gray-800">
              <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">Email profissional</p>
              <a href={`mailto:${email}`} className="mt-4 block break-all text-lg font-semibold transition hover:text-emerald-400 sm:text-xl">{email}</a>
            </GlowCard>
            <GlowCard className="p-10 bg-gray-900/80 border-gray-800">
              <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">WhatsApp</p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-4 block text-xl font-semibold transition hover:text-emerald-400">(61) 99251-3658</a>
            </GlowCard>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
