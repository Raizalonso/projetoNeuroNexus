import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="relative py-20 min-h-screen">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/sobremim.jpg"
          alt="Psicóloga Sumaia Costa"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Conteúdo sobreposto */}
      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-between min-h-screen">
        <div className="pt-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-dourado mb-4">
            PSICÓLOGA
            <br />
            <span className="text-6xl lg:text-7xl ">Sumaia</span>
            <br />
            <span className="text-6xl lg:text-7xl ">Costa</span>
          </h2>
        </div>

        <div className="pb-4">
          <div className="relative">
            <h3
              className="text-2xl lg:text-3xl font-serif font-bold text-[#3e5c4e] mb-4 border-b border-white pb-2 inline-block text-[#3e5c4e]3333
            "
            >
              SOBRE MIM
            </h3>

            {/* Container translúcido com texto expandido */}
            <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-4 lg:p-6 max-w-4xl">
              <div className="text-white/90 leading-relaxed text-xs lg:text-sm space-y-3">
                <p>
                  Atendo adultos que convivem com neurodivergências, como TDAH,
                  TEA, superdotação e ansiedade. São pessoas em busca de
                  diagnóstico, orientação ou acompanhamento psicológico
                  contínuo, que valorizam um espaço de escuta empática,
                  acolhimento e comunicação clara.
                </p>

                <p>
                  Com cuidado centrado na singularidade de cada trajetória,
                  ofereço um ambiente seguro e acolhedor onde cada pessoa pode
                  se sentir compreendida e apoiada em seu processo de
                  autoconhecimento e desenvolvimento.
                </p>

                <p>
                  Minha abordagem integra conhecimento científico atualizado com
                  sensibilidade clínica, sempre respeitando o ritmo e as
                  necessidades individuais de cada cliente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
