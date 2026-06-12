import { Instagram, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { company, email, socialLinks, whatsappDisplay, whatsappUrl } from "../content";

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950/50 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg mb-4 text-white">
              AERA<span className="text-emerald-400">CLOUD</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Infraestrutura confiável, monitoramento 24/7 e migração gradual para cloud — clínicas, escritórios e PMEs.
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
              <li>
                <a href="#home" className="hover:text-emerald-400 transition">
                  Início
                </a>
              </li>
              <li>
                <a href="#problem" className="hover:text-emerald-400 transition">
                  O problema
                </a>
              </li>
              <li>
                <a href="#solution" className="hover:text-emerald-400 transition">
                  Solução
                </a>
              </li>
              <li>
                <a href="#cases" className="hover:text-emerald-400 transition">
                  Casos de uso
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-emerald-400 transition">
                  Planos
                </a>
              </li>
              <li>
                <a href="/politica-de-privacidade" className="hover:text-emerald-400 transition">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm mb-4 text-white">REDES SOCIAIS</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-emerald-400 transition"
                >
                  <Instagram className="h-4 w-4" />
                  @aeracloud
                </a>
              </li>
              <li>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-emerald-400 transition"
                >
                  <Linkedin className="h-4 w-4" />
                  AeraCloud
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm mb-4 text-white">CONTATO</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2 text-gray-400">
                <MessageCircle className="h-4 w-4 shrink-0" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition"
                >
                  {whatsappDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <Mail className="h-4 w-4 shrink-0" />
                <a href={`mailto:${email}`} className="break-all hover:text-emerald-400 transition">
                  {email}
                </a>
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
