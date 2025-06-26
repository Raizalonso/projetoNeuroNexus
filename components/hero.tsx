"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen relative flex flex-col">
      {/* Fundo com imagem */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fundo5.png"
          alt="Imagem inicial"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/5" />
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 pt-32 pb-12 relative z-10 flex-grow">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Coluna esquerda: logo, título, texto */}
          <div className="space-y-6 fade-in text-left">
            <div className="flex items-center space-x-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-Playfair Display font-bold text-[#3e5c4e] leading-none tracking-tight neuro-nexus-shadow-right">
                Neuro
                <br />
                Nexus
              </h1>
            </div>

            <p className="text-xl lg:text-2xl text-white leading-relaxed max-w-lg font-light font-sans">
              Acolhimento psicológico para TDAH, TEA e Superdotação começa aqui.
            </p>
          </div>

          {/* Coluna direita: vídeo + botão agendar */}
          <div className="relative slide-up flex flex-col items-center space-y-4">
            <div className="w-full max-w-[320px] bg-[#365649] p-4 rounded-3xl shadow-2xl border-2 border-[#ffcb71]">
              <div className="relative rounded-2xl overflow-hidden">
                <video
                  className="w-full h-auto rounded-2xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                >
                  <source src="/video/Apresentacao.mp4" type="video/mp4" />
                  Video de apresentação do NeuroNexus.
                </video>
              </div>

              <div className="mt-4">
                <Link
                  href="/agendamento"
                  className="block"
                  aria-label="Agendar sessão"
                >
                  <div className="button-3d-elegant group cursor-pointer">
                    <p className="text-white font-bold font-serif whitespace-nowrap text-center leading-none">
                      SIM, QUERO AGENDAR MINHA SESSÃO.
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            <p
              className="text-sm uppercase tracking-wider font-medium font-sans text-center"
              style={{ color: "#f9e0a1", marginTop: "0.5rem" }}
            >
              AGENDE SEU ATENDIMENTO 100% ONLINE
            </p>
          </div>
        </div>
      </div>

      {/* Botão Saiba Mais alinhado na parte inferior esquerda da seção */}
      <div className="container mx-auto px-4 pb-8 relative z-10 flex justify-start">
        <Link href="/#servicos" passHref>
          <Button
            size="sm"
            className="text-white px-6 py-3 text-sm rounded-lg hover-lift font-medium font-sans shadow-lg"
            style={{ backgroundColor: "#d4af37" }}
          >
            SAIBA MAIS
          </Button>
        </Link>
      </div>
    </section>
  );
}
