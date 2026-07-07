import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 selection:bg-cyan-500/30 font-sans">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-white font-bold text-xl tracking-tighter">DEV<span className="text-cyan-500">.PORTFOLIO</span></span>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#sobre" className="hover:text-cyan-400 transition-colors">Sobre</a>
            <a href="#projetos" className="hover:text-cyan-400 transition-colors">Projetos</a>
            <a href="#contato" className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg transition-all">Contrate-me</a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header id="sobre" className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Disponível para novos projetos e freelas
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Engenheiro de Software & <br />
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              Desenvolvedor Full-Stack
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed">
            Especializado em construir aplicações web escaláveis e performáticas. 
            Transformo problemas complexos de negócios em soluções digitais elegantes, 
            do banco de dados à interface do usuário.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projetos" className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-900/20 transition-all transform hover:-translate-y-1 text-center">
              Ver Meus Projetos
            </a>
            <div className="flex items-center gap-3 px-2">
              {/* GitHub SVG */}
              <a href="#" className="p-3 bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
              {/* LinkedIn SVG */}
              <a href="#" className="p-3 bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              {/* Mail SVG */}
              <a href="#" className="p-3 bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* --- SKILLS GRID --- */}
      <section className="py-20 px-6 bg-slate-900/30 border-y border-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-500"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg> 
            Stack Tecnológico
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Front-end */}
            <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-cyan-500/30 transition-all">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 mb-4"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              <h3 className="text-xl font-bold text-white mb-4">Front-end</h3>
              <p className="text-slate-400 text-sm mb-6">Interfaces responsivas e interativas com foco na experiência do usuário.</p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Tailwind CSS', 'JavaScript'].map(s => (
                  <span key={s} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-md">{s}</span>
                ))}
              </div>
            </div>

            {/* Back-end */}
            <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-indigo-500/30 transition-all">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400 mb-4"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
              <h3 className="text-xl font-bold text-white mb-4">Back-end</h3>
              <p className="text-slate-400 text-sm mb-6">Arquitetura de APIs robustas e gerenciamento eficiente de dados.</p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Java', 'SpringBoot', 'PostgreSQL'].map(s => (
                  <span key={s} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-md">{s}</span>
                ))}
              </div>
            </div>

            {/* Ferramentas */}
            <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-emerald-500/30 transition-all">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400 mb-4"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg>
              <h3 className="text-xl font-bold text-white mb-4">Ferramentas</h3>
              <p className="text-slate-400 text-sm mb-6">Controle de versão e deploy contínuo para garantir estabilidade.</p>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'Docker', ].map(s => (
                  <span key={s} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-md">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO DE PROJETOS --- */}
      <section id="projetos" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Projetos em Destaque</h2>
            <p className="text-slate-400">Uma seleção de sistemas que desenvolvi cobrindo o ecossistema Full-Stack.</p>
          </div>

          {/* CARD DE PROJETO */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:border-cyan-500/50 hover:shadow-cyan-500/10 flex flex-col md:flex-row mb-8">
            <div className="w-full md:w-2/5 h-48 md:h-auto bg-slate-800 relative">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600" 
                alt="Preview do Projeto" 
                className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>

            <div className="p-6 md:p-8 flex flex-col justify-between w-full md:w-3/5">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">Full-Stack</span>
                  <span className="text-xs text-slate-400">Freela / Em produção</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">E-Commerce API & Dashboard</h3>
                <p className="text-slate-400 text-sm md:text-base mb-4 leading-relaxed">
                  Plataforma completa com painel administrativo para controle de estoque, integração de pagamentos com Stripe e API RESTful robusta.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React', 'Tailwind', 'Node.js', 'PostgreSQL'].map(tech => (
                    <span key={tech} className="px-2.5 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded-md">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-6 border-t border-slate-800/60 pt-4">
                <a href="#" className="text-sm font-medium text-white hover:text-cyan-400 transition-colors flex items-center gap-1">
                  Ver Deploy 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </a>
                <a href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
                  Repositório GitHub
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-600">
        <p>&copy; {new Date().getFullYear()} - Desenvolvido com Tailwind CSS v4. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}