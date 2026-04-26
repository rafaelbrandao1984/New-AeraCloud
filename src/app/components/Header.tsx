import { Send } from "lucide-react";
import { motion } from "motion/react";
import { whatsappUrl } from "../content";
import logoAera from "../../assets/logo.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Serviços", href: "#services" },
  { label: "Sobre", href: "#about" },
  { label: "Contato", href: "#contact" },
];

export function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-gray-950/80 border-b border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
        <motion.a
          href="#home"
          aria-label="Ir para o início"
          className="flex min-w-0 items-center gap-3"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center sm:h-12 sm:w-12">
            <img
              src={logoAera}
              alt=""
              className="h-full w-full origin-center scale-150 object-contain drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]"
            />
          </div>

          <div className="min-w-0">
            <p className="text-lg font-bold leading-none tracking-tight text-white sm:text-xl">
              Aera<span className="text-emerald-400">Cloud</span>
            </p>
            <p className="mt-1.5 hidden text-[10px] font-medium uppercase tracking-[0.15em] text-slate-400 sm:block">
              Infraestrutura & Cloud
            </p>
          </div>
        </motion.a>

        <div className="flex items-center gap-3 md:gap-6">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-emerald-400">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-3 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 sm:px-5"
          >
            <Send className="h-4 w-4" />
            <span className="hidden sm:inline">Falar com especialista</span>
            <span className="sr-only sm:hidden">Falar com especialista</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
}
