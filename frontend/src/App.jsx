import React from 'react';
import minhaFoto from './assets/abner-foto.jpg'
import teiaCultural from './assets/teiaCultural.mp4'
import { useEffect } from 'react';
import SectionDivider from './components/SectionDivider';

export default function App() {
  // Modifica o título da aba da página
  useEffect(() => {
    document.title = "Abner Miranda | Desenvolvedor Web";
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 selection:bg-cyan-500/30 font-sans">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home">
            <span className="text-white font-bold text-xl tracking-tighter">DEV<span className="text-cyan-400">.ABNER</span></span>
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#sobre-mim" className="hover:text-cyan-400 transition-colors mt-2">Sobre mim</a>
            <a href="#servicos" className="hover:text-cyan-400 transition-colors mt-2">Serviços</a>
            <a href="#projetos" className="hover:text-cyan-400 transition-colors mt-2">Projetos</a>
            <a href="#contato" className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg transition-all">Contrate-me</a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION WITH PROFILE IMAGE --- */}
      <header id="home" className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          
          {/* Coluna do Texto (Esquerda no PC, Baixo no Mobile) */}
          <div className="flex-1">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Disponível para novos projetos e freelas
            </div>

            {/* Subtítulo focado em valor */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-none">
              Soluções digitais para o <br />
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                seu negócio
              </span>
            </h1>

            {/* Texto com gatilhos de resolução de problemas */}
            <p className="text-base md:text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl">
              Desenvolvo soluções digitais personalizadas que eliminam gargalos operacionais, 
              automatizam processos e melhoram a experiência do seu cliente final. Do planejamento técnico 
              à interface que vai para o ar, garanto código sólido focado no crescimento do seu negócio.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contato" className="px-6 py-3.5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-900/20 transition-all transform hover:-translate-y-1 text-center text-sm">
                Solicitar orçamento
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
          <div className="w-52 h-52 md:w-81 md:h-81 relative flex-shrink-0">
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

      {/* --- DIVISOR SEÇÃO (componente) --- */}
      <SectionDivider />

      {/* --- SEÇÃO QUEM SOU EU --- */}
      <section id="sobre-mim" className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Lado Esquerdo: Estatísticas / Caixa Visual */}
          <div className="md:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl text-center">
              <span className="block text-3xl font-extrabold text-cyan-400 mb-1">Soluções reais</span>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl text-center">
              <span className="block text-3xl font-extrabold text-indigo-400 mb-1">100%</span>
              <span className="text-xs text-slate-400 uppercase font-medium tracking-wider">Foco na Entrega</span>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl text-center col-span-2">
              <span className="block text-xl text-slate-300 font-medium mb-2">Abordagem de Trabalho</span>
              <p className="text-sm text-slate-400 leading-relaxed">
                Entender a necessidade, desenvolver a solução e focar na aplicação do seu negócio.
              </p>
            </div>
          </div>

          {/* Lado Direito: O Texto de apresentação */}
          <div className="md:col-span-7">
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-3">
              <span className="w-4 h-[2px] bg-cyan-500"></span>
              Quem sou eu
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-6">
              Combinando Desenvolvimento Web com foco em resultados reais
            </h2>

            <div className="space-y-4 text-slate-400 text-base leading-relaxed">
              <p>
                Sou <b>Abner Miranda</b>, estudante de <b>Engenharia de Software</b>, e meu objetivo é criar soluções inovadoras que agreguem valor e façam a diferença na vida de pessoas através da tecnologia.
              </p>
              <p>
                Acredito que tecnologia é um meio, não um fim. Por isso, meu diferencial é mergulhar no ecossistema do cliente para entender o que de fato trará retorno — seja construindo o design mais atrativo para seu site, ou automatizando tarefas repetitivas para você focar no seu negócio.
              </p>
              <p className="text-slate-300 font-medium">
                Estou sempre estudando novas arquiteturas para otimizar processos, e explorando tendências de design para a melhor expriência do cliente.
              </p>
            </div>
          </div>

        </div>
      </section>

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
              <p className="text-slate-400 text-sm mb-6">Arquitetura de APIs e gerenciamento eficiente de dados.</p>
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

      {/* --- DIVISOR SEÇÃO (componente) --- */}
      <SectionDivider />

      {/* --- SEÇÃO DE SERVIÇOS --- */}
      <section id="servicos" className="py-20 px-6 bg-slate-950 border-t border-slate-900/50">
        <div className="max-w-6xl mx-auto">
          
          {/* Cabeçalho da Seção */}
          <div className="text-center mb-16">
            <h2 className="text-xs uppercase font-semibold text-cyan-400 tracking-widest mb-3">O Que Eu Faço</h2>
            <p className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Soluções integradas para impulsionar seu produto
            </p>
          </div>

          {/* Grid de Serviços */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Serviço 1: Desenvolvimento Web */}
            <div className="bg-slate-900/40 border border-slate-800/60 p-8 rounded-2xl hover:border-cyan-500/30 transition-all group hover:-translate-y-1 duration-300">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/50 border border-cyan-800/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Aplicações & Web Apps</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Desenvolvimento de plataformas completas (SaaS), dashboards administrativos e sistemas internos. Interfaces intuitivas e totalmente responsivas criadas com React e Tailwind.
              </p>
            </div>

            {/* Serviço 2: API & Engenharia Back-end */}
            <div className="bg-slate-900/40 border border-slate-800/60 p-8 rounded-2xl hover:border-indigo-500/30 transition-all group hover:-translate-y-1 duration-300">
              <div className="w-12 h-12 rounded-xl bg-indigo-950/50 border border-indigo-800/30 flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-500 group-hover:text-slate-950 transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 012-2h10a2 2 0 012 2m-14 0a2 2 0 002 2h10a2 2 0 002-2M7 3h10a2 2 0 012 2v2a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">APIs & Arquitetura</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Construção de ecossistemas robustos no Back-end. Modelagem de bancos de dados, integrações com gateways de pagamento e serviços de terceiros.
              </p>
            </div>

            {/* Serviço 3: Performance & Otimização */}
            <div className="bg-slate-900/40 border border-slate-800/60 p-8 rounded-2xl hover:border-cyan-500/30 transition-all group hover:-translate-y-1 duration-300">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/50 border border-cyan-800/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Otimização & SEO</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Refatoração de códigos legados para ganho de velocidade. Ajustes de performance para atingir notas altas no Core Web Vitals, melhorando o ranqueamento orgânico no Google.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- DIVISOR SEÇÃO (componente) --- */}
      <SectionDivider />

      {/* --- SEÇÃO DE PROJETOS --- */}
      <section id="projetos" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Projeto em Destaque</h2>
            <p className="text-slate-400">Uma seleção de sistema que desenvolvi cobrindo o ecossistema Full-Stack.</p>
          </div>

          {/* CARD DE PROJETO 1 */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:border-cyan-500/50 hover:shadow-cyan-500/10 flex flex-col md:flex-row mb-8">
            <div className="w-full md:w-2/5 h-48 md:h-auto bg-slate-800 relative">
              <video
                src={teiaCultural}
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                className="w-full h-full object-cover border-b border-slate-800/50"
              />
            </div>

            <div className="p-6 md:p-8 flex flex-col justify-between w-full md:w-3/5">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">Full-Stack</span>
                  <span className="text-xs text-slate-400">Projeto Técnico / Em produção</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Teia Cultural</h3>
                <p className="text-slate-400 text-lg md:text-base mb-4 leading-relaxed">
                  Um plataforma pensada para conectar profissionais da cultura com o seus clientes. Através de publicações, esses artistas podem divulgar seus trabalhos e alcançar novos clientes, fortalecendo e valorizando a cultura local.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React', 'JavaScript', 'Java', 'SpringBoot', 'MySQL', 'Docker'].map(tech => (
                    <span key={tech} className="px-2.5 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded-md">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-6 border-t border-slate-800/60 pt-4">
                <a href="https://teiacultural.vercel.app/" target='_blank' className="text-sm font-medium text-white hover:text-cyan-400 transition-colors flex items-center gap-1">
                  Ver Deploy 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- DIVISOR SEÇÃO (componente) --- */}
      <SectionDivider />

      {/* --- SEÇÃO DE CONTATO DIRETO --- */}
      <section id="contato" className="py-24 px-6 bg-slate-900/10 border-t border-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Cabeçalho */}
          <div className="mb-12">
            <h2 className="text-xs uppercase font-semibold text-cyan-400 tracking-widest mb-3">Contato</h2>
            <p className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Vamos iniciar o seu projeto?
            </p>
            <p className="text-slate-400 max-w-md mx-auto text-sm md:text-base">
              Escolha o canal de sua preferência. Estou disponível para propostas, reuniões ou para analisar o escopo do seu sistema.
            </p>
          </div>

          {/* Grid de Canais de Atendimento */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            
            {/* Cartão do WhatsApp */}
            <a 
              href="https://wa.me/5581999652226?text=Ol%C3%A1%2C%20Abner!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento." // Substitua pelo seu número real
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-8 bg-slate-900/50 border border-slate-800 rounded-2xl transition-all duration-300 ease-out group shadow-xl hover:-translate-y-2 hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/10 active:scale-98"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-800 border border-emerald-800/30 flex items-center justify-center text-emerald-500 mb-4 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                <svg className="w-6 h-6 fill-curretColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.451 5.42 1.452 5.4 0 9.794-4.402 9.797-9.817a9.77 9.77 0 0 0-2.87-6.932A9.73 9.73 0 0 0 12.008 1.91c-5.405 0-9.798 4.4-9.802 9.815a9.814 9.814 0 0 0 1.468 5.115l-.963 3.514 3.6-.944zM17.487 14.4c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Conversar no WhatsApp</h3>
              <p className="text-xs text-slate-400 mb-4 text-center">Resposta imediata para orçamentos e escopos</p>
              <span className="text-xs font-semibold text-emerald-400 group-hover:underline flex items-center gap-1 mt-auto">
                Chamar no chat →
              </span>
            </a>

            {/* Cartão do E-mail */}
            <a 
              href="mailto:dev.abnermiranda@gmail.com"
              className="flex flex-col items-center p-8 bg-slate-900/50 border border-slate-800 rounded-2xl transition-all duration-300 ease-out group shadow-xl hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10 active:scale-98"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-950/40 border border-cyan-800/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Enviar um E-mail</h3>
              <p className="text-xs text-slate-400 mb-4 text-center">Para propostas formais e vagas de emprego</p>
              <span className="text-xs font-semibold text-cyan-400 group-hover:underline flex items-center gap-1 mt-auto">
                Enviar e-mail →
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-slate-900 py-8 text-center text-sm text-slate-400">
        <p>Abner Miranda | &copy; Copyright {new Date().getFullYear()} | Todos os direitos reservados.</p>
      </footer>
      
      {/* --- BOTÃO FLUTUANTE DO WHATSAPP --- */}
      <a 
        href="https://wa.me/5581999652226?text=Ol%C3%A1%2C%20Abner!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento." // Link para o número de WhatsApp
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