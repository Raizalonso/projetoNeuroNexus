"use client";

import { MessageCircle, Brain, Users } from "lucide-react";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      icon: MessageCircle,
      title: "PSICOTERAPIA",
      subtitle: "Foco em TDAH, TEA, Superdotação e Ansiedade",
      description:
        "Atendimento especializado para adultos com neurodivergências, planejado de acordo com o perfil neurológico e as necessidades individuais.",
      color: "bg-psicoterapia",
    },
    {
      icon: Brain,
      title: "AVALIAÇÃO NEUROPSICOLÓGICA",
      description:
        "Avaliação abrangente das funções cognitivas, com o objetivo de identificar padrões de funcionamento cerebral e contribuir para o diagnóstico e o planejamento terapêutico. Realizada em 5 a 8 sessões, conforme o objetivo da avaliação.",
      color: "bg-avaliacao",
    },
    {
      icon: Users,
      title: "SESSÕES DE ORIENTAÇÃO INDIVIDUAL",
      description:
        "Acolhimento e orientação específica para desenvolver estratégias de enfrentamento dos desafios cotidianos.",
      color: "bg-orientacao",
    },
  ];

  return (
    <section
      id="servicos"
      className="py-12 sm:py-16 lg:py-20 relative overflow-hidden"
    >
      {/* Imagem de fundo clara com efeito visual consistente */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fundo4.png" // ajuste aqui com sua versão clara
          alt="Fundo serviços"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 lg:mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold title-shadow-right mb-4 text-[#3e5c4e]">
            SERVIÇOS
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`${service.color} rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-[#ffcb71] transition-transform transform hover:scale-105 hover:shadow-2xl`}
                style={{ animationDelay: `${index * 0.2}s` }}
                tabIndex={0}
                aria-labelledby={`service-title-${index}`}
                aria-describedby={`service-desc-${index}`}
              >
                <div className="flex items-center mb-4">
                  <Icon
                    className="w-7 h-7 sm:w-8 sm:h-8 mr-3 text-white"
                    aria-hidden="true"
                  />
                  <h3
                    id={`service-title-${index}`}
                    className="text-lg sm:text-xl font-serif font-bold text-white"
                  >
                    {service.title}
                  </h3>
                </div>

                {service.subtitle && (
                  <p className="text-white font-medium mb-2 sm:mb-3 font-sans text-sm sm:text-base">
                    {service.subtitle}
                  </p>
                )}

                <p
                  id={`service-desc-${index}`}
                  className="text-white leading-relaxed font-sans text-sm sm:text-base"
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
