"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-16 lg:py-24 relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fundo-sobre.png"
          alt="Fundo sobre"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16 fade-in">
            <h2
              className="text-4xl lg:text-5xl font-serif font-bold mb-4"
              style={{ color: "#3e5c4e" }}
            >
              SOBRE MIM
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Lado esquerdo - Imagem */}
            <div className="order-2 lg:order-1 fade-in">
              <div className="relative">
                <div className="bg-[#365649] rounded-3xl p-8 shadow-2xl">
                  <div className="flex justify-center mb-6">
                    <Image
                      src="/images/logo.png"
                      alt="Logo Sumaia Costa"
                      width={120}
                      height={120}
                      className="rounded-full shadow-lg"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl lg:text-3xl font-serif font-bold text-white mb-2">
                      SUMAIA COSTA
                    </h3>
                    <p className="text-lg text-white/90 font-medium">
                      Psicóloga Especialista em Neurodivergências
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lado direito - Texto */}
            <div className="order-1 lg:order-2 slide-up">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-xl">
                <div className="space-y-6 text-gray-700">
                  <div>
                    <h4
                      className="text-xl lg:text-2xl font-serif font-bold mb-4"
                      style={{ color: "#3e5c4e" }}
                    >
                      Minha Especialidade
                    </h4>
                    <p className="text-base lg:text-lg leading-relaxed font-sans">
                      Atendo adultos que convivem com neurodivergências, como{" "}
                      <strong className="text-[#3e5c4e]">
                        TDAH, TEA, superdotação e ansiedade
                      </strong>
                      . São pessoas em busca de diagnóstico, orientação ou
                      acompanhamento psicológico contínuo, que valorizam um
                      espaço de escuta empática, acolhimento e comunicação
                      clara.
                    </p>
                  </div>

                  <div>
                    <h4
                      className="text-xl lg:text-2xl font-serif font-bold mb-4"
                      style={{ color: "#3e5c4e" }}
                    >
                      Minha Abordagem
                    </h4>
                    <p className="text-base lg:text-lg leading-relaxed font-sans">
                      Com cuidado centrado na{" "}
                      <strong className="text-[#3e5c4e]">
                        singularidade de cada trajetória
                      </strong>
                      , ofereço um ambiente seguro e acolhedor onde cada pessoa
                      pode se sentir compreendida e apoiada em seu processo de
                      autoconhecimento e desenvolvimento.
                    </p>
                  </div>

                  <div>
                    <h4
                      className="text-xl lg:text-2xl font-serif font-bold mb-4"
                      style={{ color: "#3e5c4e" }}
                    >
                      Metodologia
                    </h4>
                    <p className="text-base lg:text-lg leading-relaxed font-sans">
                      Minha abordagem integra{" "}
                      <strong className="text-[#3e5c4e]">
                        conhecimento científico atualizado
                      </strong>{" "}
                      com sensibilidade clínica, sempre respeitando o ritmo e as
                      necessidades individuais de cada cliente.
                    </p>
                  </div>

                  <div className="pt-4">
                    <a
                      href="#agendamento"
                      className="inline-block bg-[#3e5c4e] hover:bg-[#2d4a3a] text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300 font-sans"
                    >
                      Agendar Consulta
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
