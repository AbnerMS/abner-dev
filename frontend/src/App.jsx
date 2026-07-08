import React from 'react';
import minhaFoto from './assets/abner-foto.jpg'
import { useEffect } from 'react';

export default function App() {
  // Modifica o título da aba da página
  useEffect(() => {
    document.title = "Abner Miranda | Dev Full-Stack";
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 selection:bg-cyan-500/30 font-sans">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-white font-bold text-xl tracking-tighter">DEV<span className="text-cyan-500">.ABNERMIRANDA</span></span>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#sobre" className="hover:text-cyan-400 transition-colors">Sobre</a>
            <a href="#projetos" className="hover:text-cyan-400 transition-colors">Projetos</a>
            <a href="#contato" className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg transition-all">Contrate-me</a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION WITH PROFILE IMAGE --- */}
      <header id="sobre" className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          
          {/* Coluna do Texto (Esquerda no PC, Baixo no Mobile) */}
          <div className="flex-1">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Disponível para novos projetos e freelas
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Engenheiro de Software & <br />
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                Desenvolvedor Full-Stack
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-400 mb-8 leading-relaxed">
              Especializado em construir aplicações web escaláveis e performáticas. 
              Transformo problemas complexos de negócios em soluções digitais elegantes, 
              do banco de dados à interface do usuário.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projetos" className="px-6 py-3.5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-900/20 transition-all transform hover:-translate-y-1 text-center text-sm">
                Ver Meus Projetos
              </a>
              <div className="flex items-center gap-3">
                {/* GitHub */}
                <a href="https://github.com/AbnerMS" target="_blank" className="p-3 bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/abner-miranda-developer/" target="_blank" className="p-3 bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                {/* Mail */}
                <a href="mailto:abnermiranda02@gmail.com" className="p-3 bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Coluna da Foto (Direita no PC, Topo no Mobile) */}
          <div className="w-48 h-48 md:w-64 md:h-64 relative flex-shrink-0">
            {/* Efeito de brilho de fundo (Glow) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-indigo-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            
            {/* Borda decorativa interna */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-500 p-1">
              {/* Container da Imagem */}
              <div className="w-full h-full bg-slate-950 rounded-full overflow-hidden">
                <img 
                  src={minhaFoto}
                  alt="Sua Foto de Perfil" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* --- DIVISOR AJUSTADO COM TRANSICÃO DE SEÇÃO --- */}
      <div className="relative w-full bg-slate-950 py-0 flex items-center justify-center">
        {/* A Linha Horizontal - Ajustada para ter a cor exata da borda do layout */}
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-cyan-600"></div>
        </div>

        {/* O Ícone de Seta para Baixo Centralizado */}
        <div className="absolute px-4 z-10">
          <div className="flex items-center justify-center w-10 h-18 rounded-full border border-cyan-600 text-white bg-slate-950">
            <svg 
              className="w-5 h-5 animate-bounce" 
              fill="none" 
              viewBox="0 0 24 20" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

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

      {/* --- DIVISOR AJUSTADO COM TRANSICÃO DE SEÇÃO --- */}
      <div className="relative w-full bg-slate-950 py-0 flex items-center justify-center">
        {/* A Linha Horizontal - Ajustada para ter a cor exata da borda do layout */}
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-cyan-600"></div>
        </div>

        {/* O Ícone de Seta para Baixo Centralizado */}
        <div className="absolute px-4 z-10">
          <div className="flex items-center justify-center w-10 h-18 rounded-full border border-cyan-600 text-white bg-slate-950">
            <svg 
              className="w-5 h-5 animate-bounce" 
              fill="none" 
              viewBox="0 0 24 20" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

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

      {/* --- SEÇÃO DE CONTATO --- */}
      <section id="contato" className="py-20 px-6 bg-slate-900/20 border-t border-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Vamos construir algo juntos?</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Seja para uma oportunidade full-time, um projeto freelancer ou apenas para trocar uma ideia sobre código, sinta-se à vontade para mandar uma mensagem!
          </p>

          {/* Formulário */}
          <form className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-left shadow-xl max-w-xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Seu Nome</label>
                <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Ex: João Silva" />
              </div>
              
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Seu E-mail</label>
                <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Ex: joao@email.com" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Mensagem</label>
                <textarea rows="4" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none" placeholder="Escreva aqui sua proposta ou mensagem..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-900/20 transition-all text-center text-sm cursor-pointer">
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-slate-900 py-8 text-center text-sm text-slate-400">
        <p>Abner Miranda | &copy; Copyright {new Date().getFullYear()} | Todos os direitos reservados.</p>
      </footer>
      
      {/* --- BOTÃO FLUTUANTE DO WHATSAPP --- */}
      <a 
        href="https://wa.me/5581999652226" // Link para o número de WhatsApp
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-emerald-500 text-white rounded-full shadow-lg shadow-emerald-950/30 hover:bg-emerald-400 hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Falar no WhatsApp"
      >
        {/* Ícone do WhatsApp em SVG Puro */}
        <svg 
          className="w-7 h-7 fill-currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.451 5.42 1.452 5.4 0 9.794-4.402 9.797-9.817a9.77 9.77 0 0 0-2.87-6.932A9.73 9.73 0 0 0 12.008 1.91c-5.405 0-9.798 4.4-9.802 9.815a9.814 9.814 0 0 0 1.468 5.115l-.963 3.514 3.6-.944zM17.487 14.4c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        </svg>

        {/* Efeito de Tooltip quando passa o mouse */}
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg border border-slate-800 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 whitespace-nowrap shadow-xl">
          Fale comigo!
        </span>
      </a>

    </div>
  );
}