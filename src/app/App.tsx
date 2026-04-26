import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { GlowCard } from "./components/GlowCard";
import { motion } from "motion/react";
import pilaresImage from "../assets/pilares.png";
import { email, industries, plans, services, stats, values, whatsappUrl } from "./content";

const diagnosticUrl = `${whatsappUrl}?text=Ol%C3%A1!%20Quero%20agendar%20meu%20diagn%C3%B3stico%20gratuito%20de%2015%20minutos.`;

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
              Infraestrutura resiliente e automação inteligente para sua operação em nuvem.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
              A Aera Cloud entrega observabilidade, SRE e gestão de nuvem com foco em disponibilidade, governança e redução de custos.
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
                alt="Pilares da Aera Cloud"
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
              Diagnóstico inicial gratuito em 15 minutos
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Mapeamos os principais riscos da sua operação de TI e mostramos prioridades práticas para melhorar estabilidade, segurança e desempenho.
            </p>
            <a
              href={diagnosticUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Quero meu diagnóstico
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6" id="services">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">Serviços</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight">O que entregamos para operações maduras em nuvem</h2>
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
            <h2 className="mt-4 text-4xl font-bold tracking-tight">Aera Cloud integra tecnologia e negócio.</h2>
            <p className="mt-6 text-gray-400 max-w-xl leading-relaxed">
              Nós projetamos e entregamos ambientes cloud prontos para crescer, com controle de custos, segurança e governança desde o primeiro deploy.
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
              <h3 className="text-3xl font-bold">Nuvem resiliente com resultado mensurável.</h3>
              <p className="text-gray-400 leading-relaxed">
                A Aera Cloud cria jornadas de infraestrutura que equilibram performance, custo e segurança usando práticas modernas de DevOps e SRE.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li>• Observabilidade e confiabilidade como serviço</li>
                <li>• Entrega de infraestrutura como código</li>
                <li>• Operações seguras e auditáveis</li>
              </ul>
            </div>
          </GlowCard>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-gray-800" id="industries">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">Ideal para empresas que dependem de tecnologia</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight">Cada minuto offline custa atendimento, faturamento e reputação</h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">Veja como adaptamos a operação para sua realidade.</p>
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

      <section className="py-20 px-6 bg-gray-950/40 border-t border-gray-800" id="pricing">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">Investimento em tranquilidade</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight">Planos sob medida para manter seu negócio funcionando</h2>
            <p className="mt-4 text-gray-400">Sem interrupções. Sem surpresas.</p>
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
                  </div>
                )}
                {plan.price === "custom" && (
                  <div className="mb-6">
                    <p className="text-gray-400">Consultoria mensal personalizada</p>
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
                  {plan.price === "custom" ? "Solicitar Proposta" : "Começar Agora"}
                </a>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-gray-800">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                <div className="text-gray-400 uppercase tracking-wider text-xs font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-950/40" id="contact">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-sm uppercase tracking-[0.35em] text-emerald-400">Continuidade operacional</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight">Você não compra apenas suporte.</h2>
          <h2 className="text-4xl font-bold tracking-tight text-emerald-400">Compra continuidade operacional.</h2>
          <p className="mt-6 text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Sua empresa online, segura e sem dor de cabeça com TI. Aera Cloud une execução técnica e visão de negócio para entregar estabilidade, segurança e evolução em Azure e Google Cloud.
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
