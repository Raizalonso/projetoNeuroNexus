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
  ];

  return (
    <section id="formacao" className="py-20 relative">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fundo-servicos.png"
          alt="Fundo laranja formação"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/5"></div>
      </div>

      <div className="max-w-3xl mx-auto bg-[#365649] backdrop-blur-sm rounded-3xl p-8 shadow-xl slide-up border-2 border-[#ffcb71]">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold title-shadow-right mb-4">
            FORMAÇÃO E CURSOS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {credentials.map((credential, index) => {
            const IconComponent = credential.icon;
            return (
              <div
                key={index}
                className="flex items-start slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-[#3e5c4e] rounded-lg p-4 mr-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-serif font-bold text-lg mb-1">
                    {credential.title}
                  </h3>
                  <p className="text-white/80 text-sm">{credential.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
