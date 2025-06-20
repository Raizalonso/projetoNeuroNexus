"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen relative pt-0 md:pt-0 lg:pt-0">
      {" "}
      {/* Padding top mínimo para a seção */}
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
      <div className="container mx-auto px-4 py-2 md:py-4 lg:py-6 relative z-10">
        {" "}
        {/* Padding top mínimo para o container */}
        {/* Logo no topo da página (centralizado) */}
        <div className="flex justify-center mb-2 md:mb-4 lg:mb-6 fade-in">
          {" "}
          {/* Margem inferior do logo reduzida */}
          <div className="logo-darkened">
            <Image
              src="/images/logo.png"
              alt="Logo Sumaia Costa"
              width={120}
              height={120}
              className="filter brightness-75"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna da esquerda - Título, Texto e Botão */}
          <div className="space-y-3 md:space-y-4 fade-in">
            {/* Título Neuro-Nexus alinhado à esquerda e com mais destaque */}
            <h1 className="text-7xl lg:text-9xl font-Playfair Display font-bold text-[#3e5c4e] mb-1 md:mb-2 tracking-tight leading-none neuro-nexus-shadow-right text-left">
              Neuro-
              <br />
              &nbsp;Nexus {/* Espaço antes de Nexus */}
            </h1>

            {/* Parágrafo "Acolhimento psicológico..." logo abaixo do título */}
            <p className="text-xl lg:text-2xl text-white mb-16 md:mb-20 leading-relaxed max-w-lg font-light font-sans text-left">
              {" "}
              {/* Aumentada a margem inferior aqui */}
              Acolhimento psicológico para TDAH, TEA e Superdotação começa aqui.
            </p>

            {/* Botão "Saiba Mais" alinhado à esquerda */}
            <div className="text-left">
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
                <video
                  className="w-full h-80 lg:h-96 object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Botão elegante 3D mais próximo do vídeo */}
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

            {/* Texto abaixo da moldura com nova cor */}
            <div className="mt-4 text-center">
              <p
                className="text-sm uppercase tracking-wider font-medium font-sans"
                style={{ color: "#f9e0a1" }}
              >
                AGENDE SEU ATENDIMENTO 100% ONLINE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
