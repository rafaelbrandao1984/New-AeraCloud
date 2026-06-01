import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../content";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-[110] rounded-full bg-[#25D366] p-4 text-white shadow-2xl transition hover:scale-105 active:scale-95"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
      <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-white px-3 py-1 text-xs font-bold text-slate-900 opacity-0 shadow-lg transition-opacity group-hover:opacity-100 md:block">
        Fale conosco
      </span>
    </a>
  );
}
