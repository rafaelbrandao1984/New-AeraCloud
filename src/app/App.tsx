import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { GlowCard } from "./components/GlowCard";
import { motion } from "motion/react";
import pilaresImage from "../assets/pilares.png"; // Certifique-se de que o nome e extensão estão corretos

export default function App() {
  return (
    <div className="min-h-screen bg-[#020813] text-white"> {/* Fundo mais escuro para combinar com a imagem */}
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-10 px-6" id="home">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
              AERA<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">CLOUD</span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-400 mb-6 font-medium">
              Infraestrutura moderna, automação inteligente e cloud escalável.
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Muito além do básico. A Aera Cloud aplica engenharia de confiabilidade (SRE) e automação de processos para garantir que sua operação seja resiliente, segura e pronta para crescer. 
            </p>
          </motion.div>
        </div>
      </section>

      {/* Serviços (Imagem Completa do Canva) */}
      <section className="py-12 px-6" id="services">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlowCard className="p-2 md:p-4 bg-gray-900/40 border-gray-800">
              <img 
                src={pilaresImage} 
                alt="Serviços Aera Cloud: Observabilidade, Cloud e Automação" 
                className="w-full h-auto rounded-xl object-cover shadow-2xl shadow-emerald-900/20"
              />
            </GlowCard>
          </motion.div>
        </div>
      </section>

      {/* Stats Section (Atualizado para SRE/Cloud) */}
      <section className="py-20 px-6 border-y border-gray-800/50 bg-gray-950/50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Anos de Experiência", value: "20+" },
              { label: "Disponibilidade", value: "99.9%" },
              { label: "Foco Principal", value: "Azure" },
              { label: "Automação", value: "Python" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2 drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]">{stat.value}</div>
                <div className="text-gray-400 uppercase tracking-wider text-xs font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (Atualizado para Consultoria) */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Efeito de brilho de fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px] -z-10"></div>
        
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Sua infraestrutura precisa de <span className="text-emerald-400">estabilidade?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Vamos conversar sobre como a Aera Cloud pode otimizar seus custos e garantir que sua operação nunca pare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-gray-950 font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]">
                Agendar Diagnóstico Gratuito
              </button>
              <button className="px-8 py-4 bg-transparent hover:bg-gray-800 text-white rounded-lg border border-gray-600 hover:border-emerald-400 transition-all">
                Conhecer Projetos
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}