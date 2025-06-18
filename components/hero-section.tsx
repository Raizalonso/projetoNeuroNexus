"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero-background min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[85vh]">
          {/* Lado esquerdo */}
          <div className="text-center lg:text-left space-y-8">
            {/* Logo Sumaia Costa */}
            <div className="flex justify-center lg:justify-start">
              <div className="text-center">
                <div className="w-24 h-24 lg:w-28 lg:h-28 mx-auto mb-4 bg-gradient-to-br from-[#3e5c4e] to-[#2d4a3a] rounded-full flex items-center justify-center shadow-xl">
                  <div className="text-yellow-400 text-3xl">🧠</div>
                </div>
                <div className="text-[#3e5c4e] font-semibold text-base lg:text-lg">
                  <div className="font-light">Sumaia</div>
                  <div className="font-bold tracking-wider">COSTA</div>
                </div>
              </div>
            </div>

            {/* Título principal */}
            <div className="space-y-4">
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light leading-none"
                style={{
                  color: "#3e5c4e",
                  fontFamily: "Georgia, serif",
                  letterSpacing: "-0.02em",
                }}
              >
                Neuro-
                <br />
                <span className="font-normal">Nexus</span>
              </h1>
              <div className="space-y-2">
                <p className="text-xl lg:text-2xl text-[#3e5c4e] font-medium max-w-lg mx-auto lg:mx-0">
                  Acolhimento psicológico especializado
                </p>
                <p className="text-lg lg:text-xl text-[#3e5c4e]/80 max-w-lg mx-auto lg:mx-0">
                  TDAH • TEA • Superdotação • Ansiedade
                </p>
              </div>
            </div>

            {/* Botão CTA */}
            <div>
              <Button className="bg-[#3e5c4e] hover:bg-[#2d4a3a] text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                SAIBA MAIS
              </Button>
            </div>
          </div>

          {/* Lado direito - card de vídeo */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg">
              <Card className="bg-[#3e5c4e] border-0 shadow-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video bg-black flex items-center justify-center relative">
                    <Button
                      variant="ghost"
                      size="lg"
                      className="text-white hover:bg-white/20 transition-colors"
                    >
                      <Play className="w-16 h-16" />
                    </Button>
                  </div>
                  <div className="p-8 text-center">
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-[#3e5c4e] font-bold py-4 text-base rounded-xl transition-colors duration-300 mb-4">
                      SIM, QUERO AGENDAR MINHA SESSÃO
                    </Button>
                    <p className="text-white text-sm font-medium tracking-wide">
                      ATENDIMENTO 100% ONLINE
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
