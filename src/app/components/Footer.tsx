import { Mail, MapPin, MessageCircle } from "lucide-react";
import { company, email, services, whatsappUrl } from "../content";

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950/50 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg mb-4 text-white">AERA<span className="text-emerald-400">CLOUD</span></h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Suporte técnico para advocacia, contabilidade, clínicas e pequenas empresas em Brasília e todo o Brasil.
            </p>
            {company.cnpj && (
              <p className="mt-3 text-xs text-gray-500">
                {company.legalName}
                <br />
                CNPJ {company.cnpj}
              </p>
            )}
          </div>

          <div>
            <h4 className="text-sm mb-4 text-white">NAVEGAÇÃO RÁPIDA</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-emerald-400 transition">Início</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition">O que fazemos</a></li>
              <li><a href="#industries" className="hover:text-emerald-400 transition">Áreas de Atuação</a></li>
              <li><a href="#process" className="hover:text-emerald-400 transition">Como funciona</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition">Planos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm mb-4 text-white">SERVIÇOS</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {services.map((service) => (
                <li key={service.title}>{service.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm mb-4 text-white">FALE COM UM ESPECIALISTA</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2 text-gray-400">
                <MessageCircle className="h-4 w-4" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">(61) 99251-3658</a>
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${email}`} className="break-all hover:text-emerald-400 transition">{email}</a>
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>{company.city}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© 2026 AeraCloud - Soluções em Tecnologia. Todos os direitos reservados. | Protegido por SSL e Cloudflare</p>
        </div>
      </div>
    </footer>
  );
}
