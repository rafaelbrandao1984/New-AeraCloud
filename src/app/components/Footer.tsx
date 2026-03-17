import { Github, Linkedin, Cloud } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950/50 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg mb-4 text-white">AERA<span className="text-emerald-400">CLOUD</span></h3>
            <p className="text-gray-400 text-sm">
              Design profissional de identidade visual com estilo neon e temática cloud computing.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm mb-4 text-white">Variações</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Perfil Profissional</li>
              <li>• Favicon Minimalista</li>
              <li>• Logo para Redes Sociais</li>
              <li>• Wallpaper para Notebook</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm mb-4 text-white">Plataformas</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-emerald-500/20 border border-gray-700 hover:border-emerald-500 flex items-center justify-center transition-all">
                <Linkedin className="w-5 h-5 text-gray-400" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-emerald-500/20 border border-gray-700 hover:border-emerald-500 flex items-center justify-center transition-all">
                <Github className="w-5 h-5 text-gray-400" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-emerald-500/20 border border-gray-700 hover:border-emerald-500 flex items-center justify-center transition-all">
                <Cloud className="w-5 h-5 text-gray-400" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© 2026 AERACLOUD - Infrastructure & Observability</p>
        </div>
      </div>
    </footer>
  );
}
