"use client";

import { Award, Trophy, Medal, Star } from "lucide-react";
import Image from "next/image";

export default function Credentials() {
  const credentials = [
    {
      icon: Medal,
      title: "Prêmio Inspiração Médica",
      subtitle: "Centro Médico de SP, 2024",
    },
    {
      icon: Trophy,
      title: "Condecorado como melhor médico do ano",
      subtitle: "Hospital da Cidade, 2020",
    },
    {
      icon: Award,
      title: "Destaque em tratamento de alergias",
      subtitle: "MedicinaMundoBR - 2015",
    },
    {
      icon: Star,
      title: "Prêmio de Pediatra do Ano",
      subtitle: "Medicina Paulista - 2023",
    },
    {
      icon: Medal,
      title: "Prêmio Inspiração Médica",
      subtitle: "Centro Médico de SP, 2024",
    },
    {
      icon: Trophy,
      title: "Condecorado como melhor médico do ano",
      subtitle: "Hospital da Cidade, 2020",
    },
    {
      icon: Award,
      title: "Destaque em tratamento de alergias",
      subtitle: "MedicinaMundoBR - 2015",
    },
    {
      icon: Star,
      title: "Prêmio de Pediatra do Ano",
      subtitle: "Medicina Paulista - 2023",
    },
  ];

  return (
    <section id="formacao" className="py-20 relative">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fundo-servicos.png"
          alt="Fundo formação"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
      </div>

      {/* Título */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#3e5c4e]">
          FORMAÇÃO E CURSOS
        </h2>
      </div>

      {/* Cards individuais */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {credentials.map((credential, index) => {
          const IconComponent = credential.icon;
          return (
            <div
              key={index}
              className="bg-[#365649]/80 border border-[#ffcb71] rounded-2xl p-6 backdrop-blur-md shadow-xl transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-[#3e5c4e] p-3 rounded-full shadow-inner">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-serif font-bold text-lg">
                  {credential.title}
                </h3>
              </div>
              <p className="text-white/80 text-sm">{credential.subtitle}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
