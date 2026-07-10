import React from "react";

export default function SectionDivider() {
    return (
        <div className="relative w-full bg-slate-950 py-0 flex items-center justify-center">
        {/* A Linha Horizontal */}
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
    )

}