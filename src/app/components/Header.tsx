import { Send } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import logoAera from "../../assets/logo.png"; 

export function Header() {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-gray-950/80 border-b border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-3 cursor-pointer"
          whileHover={{ scale: 1.02 }}
        >
          {/* Logo vinda do Canva no lugar do circulo antigo */}
          <div className="w-12 h-12 flex items-center justify-center">
            <img 
              src={logoAera} 
              alt="Aera Cloud Logo" 
              className="w-full h-full object-contain scale-170 origin-center drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]"
            />
          </div>

          <div>
            <h1 className="text-xl font-bold text-white leading-none tracking-tight">
              Aera<span className="text-emerald-400">Cloud</span>
            </h1>
            <p className="text-[10px] text-gray-400 uppercase tracking-[0.15em] mt-1.5 font-medium text-slate-400">
              Infraestrutura & Cloud
            </p>
          </div>
        </motion.div>
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
            <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
            <a href="#services" className="hover:text-emerald-400 transition-colors">Serviços</a>
            <a href="#about" className="hover:text-emerald-400 transition-colors">Sobre</a>
          </nav>

          <Button 
            className="bg-emerald-500 hover:bg-emerald-600 text-gray-950 gap-2 shadow-lg shadow-emerald-500/20 font-semibold px-5"
          >
            <Send className="w-4 h-4" />
            Falar com Especialista
          </Button>
        </div>
      </div>
    </motion.header>
  );
}