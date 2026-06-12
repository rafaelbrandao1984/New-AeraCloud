import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { GlowCard } from "./components/GlowCard";
import { ContactForm } from "./components/ContactForm";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { motion } from "motion/react";
import heroCloud from "../assets/hero-cloud.png";
import {
  caseStudies,
  company,
  contactBenefits,
  differentiators,
  email,
  painPoints,
  plans,
  solutionPhases,
  whatsappDisplay,
  whatsappUrl,
} from "./content";

const diagnosticUrl = `${whatsappUrl}?text=${encodeURIComponent(
  "Olá! Quero agendar meu diagnóstico gratuito de infraestrutura (30 min).",
)}`;

export default function App() {
  return (
    <div className="min-h-screen bg-[#020813] text-white">
      <Header />

      {/* SEÇÃO 1: HERO */}
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
              Infraestrutura que não cai. Negócio que cresce.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
              Transformamos servidores instáveis em operação confiável. Prepare sua clínica ou escritório para crescer na nuvem.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={diagnosticUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                Diagnóstico Grátis (30 min)
              </a>
              <a
                href="#solution"
                className="inline-flex items-center justify-center rounded-full border border-gray-700 bg-slate-950/10 px-8 py-4 text-sm font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-300"
              >
                Como funciona
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-emerald-500/10 via-cyan-500/5 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-gray-800 bg-gray-950/40 p-4 backdrop-blur-sm shadow-2xl transition-all duration-300 hover:border-emerald-500/30">
              <img
                src={heroCloud}
                alt="Visualização de Infraestrutura em Nuvem da Aera Cloud"
                className="w-full h-auto max-w-[480px] rounded-2xl object-cover shadow-[0_0_50px_rgba(16,185,129,0.1)]"
              />
              <p className="mt-4 text-center text-sm text-gray-400 px-4">
                Servidores monitorados, backups automáticos e segurança proativa em GCP e Azure.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO 2: O PROBLEMA */}
      <section className="py-20 px-6 bg-gray-950/40 border-t border-gray-800" id="problem">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">O problema</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight">Você reconhece alguma dessas situações?</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {painPoints.map((item) => (
              <GlowCard key={item.quote} className="p-8 bg-gray-900/60 border-gray-800">
                <p className="text-lg font-semibold text-white leading-snug">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-4 text-gray-400 leading-relaxed">→ {item.consequence}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: A SOLUÇÃO */}
      <section className="py-20 px-6 border-t border-gray-800" id="solution">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">A solução</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight">Transformamos infraestrutura em 3 fases</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {solutionPhases.map((phase, index) => (
              <motion.div
                key={phase.title}
                className="relative rounded-3xl border border-gray-800 bg-gray-900/50 p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">{phase.phase}</span>
                <h3 className="mt-4 text-2xl font-bold text-white">{phase.title}</h3>
                <p className="mt-4 text-gray-400 leading-relaxed">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: DIFERENCIAIS */}
      <section className="py-20 px-6 bg-gray-950/40 border-t border-gray-800" id="differentiators">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">Por que AeraCloud</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight">Diferenciais que protegem seu negócio</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => (
              <GlowCard key={item.title} className="p-8 bg-gray-900/60 border-gray-800">
                <item.icon className="mb-4 h-10 w-10 text-emerald-400" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </GlowCard>
            ))}
          </div>

          {company.cnpj && (
            <p className="mt-10 text-center text-sm text-gray-500">
              {company.legalName} · CNPJ {company.cnpj} · {company.city}
            </p>
          )}
        </div>
      </section>

      {/* SEÇÃO 5: CASOS DE USO */}
      <section className="py-20 px-6 border-t border-gray-800" id="cases">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">Casos reais</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight">Resultados que falam por si</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((study) => (
              <GlowCard key={study.title} className="p-8 bg-gray-900/60 border-gray-800">
                <h3 className="text-xl font-bold text-white mb-6">{study.title}</h3>
                <div className="space-y-4 text-sm leading-relaxed">
                  <div>
                    <span className="font-semibold uppercase tracking-wider text-red-400/90">Antes</span>
                    <p className="mt-1 text-gray-400">{study.before}</p>
                  </div>
                  <div>
                    <span className="font-semibold uppercase tracking-wider text-emerald-400">Depois</span>
                    <p className="mt-1 text-gray-300">{study.after}</p>
                  </div>
                  <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3">
                    <span className="font-semibold uppercase tracking-wider text-emerald-300 text-xs">Resultado</span>
                    <p className="mt-1 text-white font-medium">{study.result}</p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 6: PLANOS */}
      <section className="py-20 px-6 bg-gray-950/40 border-t border-gray-800" id="pricing">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">Planos</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight">Suporte gerenciado com preço justo</h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Do monitoramento essencial à proteção completa — e migração para cloud quando você estiver pronto.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <GlowCard
                key={plan.name}
                className={`p-8 border-gray-800 flex flex-col ${plan.badge === "Mais escolhido" ? "border-2 border-emerald-500/50" : ""}`}
              >
                {plan.badge && (
                  <div className="mb-4 inline-flex w-fit rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                    {plan.badge}
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                {plan.price !== "custom" ? (
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-emerald-400">R$ {plan.price}</span>
                    <span className="text-gray-400">/mês</span>
                  </div>
                ) : (
                  <div className="mb-6">
                    <p className="text-lg font-medium text-gray-300">Diagnóstico + Migração para Cloud</p>
                  </div>
                )}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-gray-300 text-sm">
                      <span className="text-emerald-400 shrink-0" aria-hidden="true">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={diagnosticUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold py-3 text-center text-sm transition"
                >
                  {plan.price === "custom" ? "Solicitar proposta" : "Começar agora"}
                </a>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 7: CTA FINAL */}
      <section className="py-24 px-6 border-t border-gray-800" id="contact">
        <div className="container mx-auto max-w-6xl">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="text-center lg:text-left">
              <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">Próximo passo</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Sua infraestrutura está em risco? Vamos ver.
              </h2>
              <p className="mt-6 text-lg text-gray-400 leading-relaxed">
                Diagnóstico Grátis (30 min) — sem compromisso.
              </p>

              <ul className="mt-8 space-y-3 text-left text-sm text-gray-300">
                {contactBenefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3">
                    <span className="text-emerald-400 shrink-0" aria-hidden="true">
                      ✓
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 space-y-4 text-sm text-gray-400">
                <p>
                  <span className="text-gray-500">Prefere falar direto?</span>
                  <br />
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block font-semibold text-emerald-400 transition hover:text-emerald-300"
                  >
                    {whatsappDisplay} · WhatsApp
                  </a>
                </p>
                <p>
                  <span className="text-gray-500">E-mail:</span>{" "}
                  <a href={`mailto:${email}`} className="break-all text-emerald-400 transition hover:text-emerald-300">
                    {email}
                  </a>
                </p>
              </div>

              <a
                href={diagnosticUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                Agendar Diagnóstico
              </a>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-gray-900/80 p-8 shadow-xl">
              <h3 className="mb-6 text-lg font-bold text-white">Agende seu diagnóstico gratuito</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
      <Footer />
    </div>
  );
}
