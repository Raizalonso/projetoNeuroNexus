"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
          {/* Coluna esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-left"
          >
            <div className="flex items-center space-x-4">
              <h1
                className="text-6xl md:text-7xl lg:text-8xl font-Playfair Display font-bold text-[#3e5c4e] leading-none tracking-tight"
                style={{
                  textShadow: "2px 2px 4px rgba(177, 82, 64, 0.3)", // sombra elegante
                }}
              >
                <span className="block">Neuro</span>
                <span className="block pl-3">Nexus</span>
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl lg:text-2xl max-w-lg font-semibold font-sans text-[#4c6b5a]"
              style={{
                textShadow: "1px 1px 3px rgba(60, 80, 70, 0.2)", // sombra leve no texto
              }}
            >
              Acolhimento psicológico para TDAH, TEA e Superdotação começa aqui.
            </motion.p>
          </motion.div>

          {/* Coluna direita: vídeo + botão agendar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative flex flex-col items-center space-y-4"
          >
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
                  <div className="button-3d-elegant group cursor-pointer transition-transform transform hover:scale-105">
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
          </motion.div>
        </div>
      </div>

      {/* Botão Saiba Mais */}
      <div className="container mx-auto px-4 pb-8 relative z-10 flex justify-start">
        <Link href="/#servicos" passHref>
          <Button
            size="sm"
            className="text-white px-6 py-3 text-sm rounded-lg hover:scale-105 transition-transform font-medium font-sans shadow-lg"
            style={{ backgroundColor: "#d4af37" }}
          >
            SAIBA MAIS
          </Button>
        </Link>
      </div>
    </section>
  );
}
