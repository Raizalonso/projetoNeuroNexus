"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="relative min-h-screen overflow-hidden">
      {/* Imagem de fundo com overlay suave */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fundofoto.jpeg"
          alt="Psicóloga Sumaia Costa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20 transition duration-700" />
      </div>

      {/* Cabeçalho com nome */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-10">
        <div className="mb-10 text-white animate-fade-in-down">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-dourado mb-4">
            PSICÓLOGA
            <br />
            <span className="text-5xl md:text-6xl lg:text-7xl text-white">
              Sumaia
            </span>
            <br />
            <span className="text-5xl md:text-6xl lg:text-7xl text-white">
              Costa
            </span>
          </h2>
        </div>
      </div>

      {/* Bloco de texto interativo e mais transparente */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-4 lg:px-12 pb-6">
        <div className="bg-[#3e5c4e]/30 backdrop-blur-sm text-white rounded-t-3xl p-4 lg:p-6 shadow-md transition-transform duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-2xl animate-slide-up">
          <h3 className="text-lg lg:text-xl font-serif font-bold border-b border-[#3e5c4e] mb-3 pb-1 inline-block">
            SOBRE MIM
          </h3>

          <div className="space-y-4 text-sm lg:text-base leading-relaxed font-sans cursor-default">
            <p>
              Atendo adultos que convivem com neurodivergências, como TDAH, TEA,
              superdotação e ansiedade. São pessoas em busca de diagnóstico,
              orientação ou acompanhamento psicológico contínuo, que valorizam
              um espaço de escuta empática, acolhimento e comunicação clara.
            </p>

            <p>
              Com cuidado centrado na singularidade de cada trajetória, ofereço
              um ambiente seguro e acolhedor onde cada pessoa pode se sentir
              compreendida e apoiada em seu processo de autoconhecimento e
              desenvolvimento.
            </p>

            <p>
              Minha abordagem integra conhecimento científico atualizado com
              sensibilidade clínica, sempre respeitando o ritmo e as
              necessidades individuais de cada cliente.
            </p>
          </div>
        </div>
      </div>

      {/* Animações */}
      <style jsx>{`
        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 1s ease-out forwards;
        }

        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
