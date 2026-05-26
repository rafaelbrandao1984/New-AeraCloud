import { ArrowLeft, ShieldCheck } from "lucide-react";
import { company, email } from "../content";

const lastUpdated = "26 de maio de 2026";

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#020813] text-white">
      {/* ── Header mínimo ── */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-gray-950/80 border-b border-gray-800">
        <div className="container mx-auto flex items-center justify-between gap-4 px-6 py-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition hover:text-emerald-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o site
          </a>
          <p className="text-lg font-bold tracking-tight text-white">
            Aera<span className="text-emerald-400">Cloud</span>
          </p>
        </div>
      </header>

      {/* ── Conteúdo ── */}
      <main className="container mx-auto max-w-3xl px-6 pt-32 pb-24">
        {/* Título */}
        <div className="mb-12 flex items-start gap-4">
          <ShieldCheck className="mt-1 h-9 w-9 shrink-0 text-emerald-400" aria-hidden="true" />
          <div>
            <span className="text-xs uppercase tracking-[0.35em] text-emerald-400">
              Conformidade &amp; Transparência
            </span>
            <h1 className="mt-2 text-4xl font-bold tracking-tight">
              Política de Privacidade
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Última atualização: {lastUpdated}
            </p>
          </div>
        </div>

        {/* Corpo */}
        <div className="space-y-10 text-gray-300 leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              1. Quem somos
            </h2>
            <p>
              Esta política se aplica ao site <strong className="text-white">www.aeracloud.com.br</strong>,
              operado por <strong className="text-white">{company.legalName}</strong>,
              inscrita no CNPJ <strong className="text-white">{company.cnpj}</strong>,
              com sede em <strong className="text-white">{company.city}</strong>,
              representada por <strong className="text-white">{company.representative}</strong>.
            </p>
            <p className="mt-3">
              Nosso compromisso é garantir a privacidade e a segurança dos dados de todos os
              visitantes, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD)
              e as boas práticas internacionais de segurança da informação.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              2. Quais dados coletamos
            </h2>
            <p>
              Não coletamos dados pessoais de forma ativa (como nome, CPF ou e-mail) por meio de
              formulários neste site. As informações coletadas são de natureza <strong className="text-white">analítica e de comportamento de navegação</strong>,
              obtidas de forma automática pelas ferramentas listadas abaixo:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Páginas visitadas e tempo de permanência</li>
              <li>Origem do tráfego (busca orgânica, anúncios, redes sociais, acesso direto)</li>
              <li>Tipo de dispositivo, sistema operacional e navegador</li>
              <li>Localização geográfica aproximada (cidade/região, sem geolocalização precisa)</li>
              <li>Eventos de interação: cliques em botões de contato, scroll e navegação entre seções</li>
            </ul>
            <p className="mt-4">
              Caso você nos envie uma mensagem via WhatsApp ou e-mail, os dados fornecidos por você
              (nome e informações de contato) serão utilizados exclusivamente para responder à sua
              solicitação e não serão compartilhados com terceiros sem o seu consentimento.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              3. Ferramentas e cookies utilizados
            </h2>
            <p>
              Este site utiliza as seguintes ferramentas do Google, que podem instalar cookies no
              seu navegador para identificar sessões e mensurar o uso do site:
            </p>

            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5">
                <h3 className="font-semibold text-white mb-1">
                  Google Analytics 4 (GA4)
                </h3>
                <p className="text-sm text-gray-400">
                  Utilizado para coletar métricas de audiência e comportamento de navegação de forma
                  agregada e anônima. Os dados são processados pelo Google LLC conforme a
                  {" "}<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline hover:text-emerald-300">Política de Privacidade do Google</a>.
                  Você pode optar por não participar instalando o{" "}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline hover:text-emerald-300">
                    complemento de desativação do GA
                  </a>.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5">
                <h3 className="font-semibold text-white mb-1">
                  Google Tag Manager (GTM)
                </h3>
                <p className="text-sm text-gray-400">
                  Gerencia as tags e scripts de rastreamento do site sem alterar o código-fonte.
                  O GTM em si não coleta dados pessoais, mas pode carregar ferramentas que o fazem
                  (como o GA4 descrito acima).
                </p>
              </div>

              <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-5">
                <h3 className="font-semibold text-white mb-1">
                  Google Ads
                </h3>
                <p className="text-sm text-gray-400">
                  Utilizamos o Google Ads para veicular anúncios em resultados de busca. Esta ferramenta
                  pode usar cookies para medir a eficácia dos anúncios e exibir publicidade relevante
                  com base em visitas anteriores ao site. Você pode gerenciar suas preferências de
                  anúncios em{" "}
                  <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline hover:text-emerald-300">
                    adssettings.google.com
                  </a>.
                </p>
              </div>
            </div>
          </section>

          {/* 4 */}
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              4. Como usamos os dados
            </h2>
            <p>Os dados coletados são utilizados exclusivamente para:</p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Mensurar o desempenho do site e das campanhas de marketing</li>
              <li>Entender o comportamento dos visitantes para melhorar a experiência de uso</li>
              <li>Identificar as páginas e seções de maior interesse</li>
              <li>Otimizar os investimentos em publicidade digital</li>
            </ul>
            <p className="mt-4 font-medium text-white">
              ✦ Os seus dados <em>nunca</em> são vendidos, alugados ou compartilhados com
              terceiros para fins comerciais.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              5. Base legal (LGPD)
            </h2>
            <p>
              O tratamento dos dados analíticos ocorre com base no{" "}
              <strong className="text-white">legítimo interesse</strong> (Art. 7º, IX, LGPD) da empresa
              em compreender o uso do site e aprimorar os serviços oferecidos, de forma que não
              prejudique os direitos e liberdades fundamentais dos titulares.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              6. Seus direitos como titular de dados
            </h2>
            <p>
              Nos termos da LGPD, você tem direito a:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Confirmar a existência de tratamento dos seus dados</li>
              <li>Acessar os dados que possuímos sobre você</li>
              <li>Solicitar a correção de dados incompletos ou desatualizados</li>
              <li>
                Solicitar a <strong className="text-white">exclusão dos seus dados</strong> do nosso
                sistema a qualquer momento
              </li>
              <li>Revogar o consentimento, quando aplicável</li>
              <li>Solicitar informações sobre com quem compartilhamos seus dados</li>
            </ul>
            <p className="mt-4">
              Para exercer qualquer um desses direitos, entre em contato pelo e-mail abaixo.
              Respondemos em até <strong className="text-white">5 dias úteis</strong>.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              7. Retenção dos dados
            </h2>
            <p>
              Os dados analíticos são retidos pelo Google Analytics pelo período de{" "}
              <strong className="text-white">14 meses</strong> por padrão, conforme as configurações da
              propriedade GA4. Dados de contato fornecidos diretamente por você (via WhatsApp ou
              e-mail) são mantidos enquanto houver relacionamento comercial ativo e eliminados
              mediante solicitação.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              8. Segurança
            </h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger os dados contra
              acesso não autorizado, perda ou alteração, incluindo transmissão via HTTPS/TLS e
              proteção por Cloudflare CDN.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              9. Alterações nesta política
            </h2>
            <p>
              Esta Política de Privacidade pode ser atualizada periodicamente. A data da última
              revisão estará sempre indicada no topo deste documento. Recomendamos que você a
              consulte periodicamente.
            </p>
          </section>

          {/* 10 — Contato */}
          <section className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
            <h2 className="mb-3 text-xl font-semibold text-white">
              10. Contato e solicitações de dados
            </h2>
            <p>
              Para exercer seus direitos, solicitar a exclusão dos seus dados ou tirar qualquer
              dúvida sobre esta política, entre em contato com nosso responsável pelo tratamento
              de dados:
            </p>
            <div className="mt-4 space-y-1 text-sm">
              <p>
                <span className="text-gray-500">Responsável:</span>{" "}
                <strong className="text-white">{company.representative}</strong>
              </p>
              <p>
                <span className="text-gray-500">Empresa:</span>{" "}
                <strong className="text-white">{company.legalName}</strong>
              </p>
              <p>
                <span className="text-gray-500">CNPJ:</span>{" "}
                <strong className="text-white">{company.cnpj}</strong>
              </p>
              <p>
                <span className="text-gray-500">E-mail:</span>{" "}
                <a
                  href={`mailto:${email}`}
                  className="text-emerald-400 underline hover:text-emerald-300 transition"
                >
                  {email}
                </a>
              </p>
              <p>
                <span className="text-gray-500">Localização:</span>{" "}
                <strong className="text-white">{company.city}</strong>
              </p>
            </div>
          </section>
        </div>

        {/* Botão de retorno */}
        <div className="mt-14 flex justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o site
          </a>
        </div>
      </main>

      {/* ── Footer mínimo ── */}
      <footer className="border-t border-gray-800 bg-gray-950/50 py-6 text-center text-sm text-gray-500">
        <p>
          © 2026 {company.legalName} · CNPJ {company.cnpj} · Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
