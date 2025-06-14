import { MessageCircle, Brain, Users } from "lucide-react"
import Image from "next/image"

export default function Services() {
  const services = [
    {
      icon: MessageCircle,
      title: "PSICOTERAPIA",
      subtitle: "Foco em TDAH, TEA, Superdotação e Ansiedade",
      description:
        "Atendimento psicológico especializado para adultos com neurodivergências, oferecendo um espaço de escuta empática e estratégias personalizadas para cada necessidade.",
      color: "bg-psicoterapia",
    },
    {
      icon: Brain,
      title: "AVALIAÇÃO NEUROPSICOLÓGICA",
      subtitle: "Foco em TDAH, TEA, Superdotação e Ansiedade",
      description:
        "Avaliação completa das funções cognitivas para identificar padrões de funcionamento cerebral e auxiliar no diagnóstico e planejamento terapêutico.",
      color: "bg-avaliacao",
    },
    {
      icon: Users,
      title: "SESSÕES DE ORIENTAÇÃO INDIVIDUAL",
      subtitle: "Foco em TDAH, TEA, Superdotação e Ansiedade",
      description:
        "Orientações específicas para desenvolvimento de habilidades sociais, estratégias de organização e manejo de sintomas no dia a dia.",
      color: "bg-orientacao",
    },
  ]

  return (
    <section id="servicos" className="py-20 relative" aria-labelledby="servicos-title">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/fundo-servicos.png" alt="" fill className="object-cover" role="presentation" />
        <div className="absolute inset-0 bg-white/5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 id="servicos-title" className="text-4xl lg:text-5xl font-serif font-bold title-shadow-right mb-4">
            SERVIÇOS
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8" role="list">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className={`${service.color} rounded-3xl p-8 shadow-xl hover-lift slide-up border-2 border-[#ffcb71] accessible-button`}
                style={{ animationDelay: `${index * 0.2}s` }}
                role="listitem"
                tabIndex={0}
                aria-labelledby={`service-title-${index}`}
                aria-describedby={`service-desc-${index}`}
              >
                <div className="flex items-center mb-6">
                  <IconComponent className="w-8 h-8 mr-3 text-texto-servico" aria-hidden="true" />
                  <h3 id={`service-title-${index}`} className="text-xl font-serif font-bold text-texto-servico">
                    {service.title}
                  </h3>
                </div>

                <p className="text-texto-servico font-medium mb-4 font-sans">{service.subtitle}</p>

                <p
                  id={`service-desc-${index}`}
                  className="text-texto-servico leading-relaxed reading-spacing font-sans"
                >
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
