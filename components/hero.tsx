"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen relative pt-20">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fundo-inicio.png"
          alt="Fundo gradiente amarelo verde com linhas topográficas"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/5"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Logo centralizado no topo com filtro mais escuro */}
        <div className="flex justify-center mb-12 fade-in">
          <div className="logo-darkened">
            <Image src="/images/logo.png" alt="Logo Sumaia Costa" width={120} height={120} />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Coluna da esquerda - Texto */}
          <div className="space-y-8 fade-in">
            <div>
              <h1 className="text-6xl lg:text-8xl font-serif font-bold text-[#3e5c4e] mb-8 tracking-tight leading-tight neuro-nexus-shadow-right text-right">
                Neuro-
                <br />
                Nexus
              </h1>

              <p className="text-xl lg:text-2xl text-white mb-12 leading-relaxed max-w-lg font-light font-sans">
                Acolhimento psicológico para TDAH, TEA e Superdotação começa aqui.
              </p>
            </div>

            {/* Botão "Saiba Mais" integrado ao conteúdo */}
            <div className="text-right">
              <Link href="/#servicos">
                <Button
                  size="sm"
                  className="button-saiba-mais text-white px-6 py-3 text-sm rounded-lg hover-lift font-medium font-sans shadow-lg"
                  style={{ backgroundColor: "#d4af37" }}
                >
                  SAIBA MAIS
                </Button>
              </Link>
            </div>
          </div>

          {/* Coluna da direita - Vídeo com moldura */}
          <div className="relative slide-up">
            {/* Moldura verde ao redor do vídeo com borda dourada */}
            <div className="bg-[#365649] p-6 rounded-3xl shadow-2xl border-2 border-[#ffcb71]">
              {/* Container do vídeo */}
              <div className="relative rounded-2xl overflow-hidden">
                <video className="w-full h-80 lg:h-96 object-cover" autoPlay muted loop playsInline>
                  <source
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Botão elegante 3D mais próximo do vídeo */}
              <div className="mt-4">
                <Link href="/agendamento" className="block" aria-label="Agendar sessão">
                  <div className="button-3d-elegant group cursor-pointer">
                    <p className="text-white font-bold font-serif whitespace-nowrap text-center leading-none">
                      SIM, QUERO AGENDAR MINHA SESSÃO.
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Texto abaixo da moldura com nova cor */}
            <div className="mt-4 text-center">
              <p className="text-sm uppercase tracking-wider font-medium font-sans" style={{ color: "#f9e0a1" }}>
                AGENDE SEU ATENDIMENTO 100% ONLINE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
