import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Beatriz Lopes",
      image: "/placeholder.svg?height=80&width=80",
      text: "O acompanhamento com a Sumaia transformou minha relação com o TDAH. Finalmente encontrei estratégias que funcionam para mim e me sinto mais confiante no meu dia a dia.",
    },
    {
      name: "Carolina Moura",
      image: "/placeholder.svg?height=80&width=80",
      text: "A avaliação neuropsicológica foi fundamental para entender meu funcionamento. O processo foi acolhedor e os resultados me ajudaram muito no autoconhecimento.",
    },
    {
      name: "Fernanda O.",
      image: "/placeholder.svg?height=80&width=80",
      text: "As sessões de orientação me deram ferramentas práticas para lidar com a ansiedade. Sumaia tem uma abordagem muito humana e eficaz.",
    },
  ];

  return (
    <section id="depoimentos" className="py-20 relative">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fundo-contato.png"
          alt="Fundo gradiente laranja verde com espirais"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold title-shadow-right mb-4 text-[#3e5c4e]">
            O QUE ESTÃO FALANDO SOBRE O MEU TRABALHO?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-depoimento rounded-3xl p-8 text-texto-servico shadow-xl hover-lift slide-up border-2 border-[#ffcb71]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <p className="text-texto-servico leading-relaxed mb-8 text-lg">
                {testimonial.text}
              </p>

              <div className="flex items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <h4 className="font-serif font-bold text-lg text-texto-servico">
                  {testimonial.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
