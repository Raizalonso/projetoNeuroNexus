import Image from "next/image"

export default function FinalPage() {
  return (
    <section className="py-20 relative min-h-screen flex items-center">
      {/* Imagem de fundo da página 8 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/pagina-final.jpg"
          alt="Fundo final com linhas onduladas em tons quentes"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo circular */}
          <div className="mb-12 fade-in">
            <div className="w-32 h-32 bg-gradient-to-br from-cor-terrosa to-terracota rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <Image src="/images/logo.png" alt="Logo Sumaia Costa" width={80} height={80} />
            </div>
          </div>

          {/* Conteúdo principal */}
          <div className="space-y-8 text-white slide-up">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-8">
              O trabalho de Sumaia Costa é voltado para adultos que convivem com neurodivergências
            </h2>

            <div className="space-y-6 text-lg leading-relaxed max-w-3xl mx-auto">
              <p>
                O trabalho de Sumaia Costa é voltado para adultos que convivem com neurodivergências. Os depoimentos
                apresentados refletem experiências reais de clientes que participaram das sessões. Resultados variam de
                pessoa para pessoa e estão sujeitos a aspectos individuais, como esforço, dedicação e aderência às
                estratégias propostas.
              </p>

              <p>
                Os depoimentos apresentados refletem experiências reais de clientes que participaram das sessões.
                Resultados variam de pessoa para pessoa e estão sujeitos a aspectos individuais, como esforço, dedicação
                e aderência às estratégias propostas. A sessão inicial é um ponto de partida para sua transformação, mas
                o sucesso dependerá da sua continuidade no processo.
              </p>
            </div>

            {/* Call to action final */}
            <div className="mt-12">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto">
                <h3 className="text-2xl font-serif font-bold text-verde-titulo mb-4">
                  Pronto para começar sua jornada?
                </h3>
                <p className="text-gray-700 mb-6">
                  Agende sua primeira sessão e dê o primeiro passo em direção ao seu bem-estar e autoconhecimento.
                </p>
                <a
                  href="/agendamento"
                  className="inline-block bg-terracota hover:bg-terracota/90 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg"
                >
                  Agendar Primeira Sessão
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
