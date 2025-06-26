import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Como funciona o atendimento online?",
      answer:
        "O atendimento online é realizado por videochamada através de plataformas seguras. Você receberá um link para acessar a sala virtual no horário agendado. É necessário estar em um local tranquilo, com boa conexão de internet e privacidade.",
    },
    {
      question: "Qual a duração das sessões?",
      answer:
        "As sessões de psicoterapia têm duração de 50 minutos. Já as avaliações neuropsicológicas podem variar de 1 a 2 horas, dependendo do processo.",
    },
    {
      question: "O plano de saúde cobre as sessões?",
      answer:
        "Trabalho com reembolso de alguns planos de saúde. Após a sessão, forneço recibo para que você solicite o reembolso diretamente com seu plano, de acordo com as regras de cobertura.",
    },
    {
      question:
        "Como sei se preciso de psicoterapia ou avaliação neuropsicológica?",
      answer:
        "Na primeira sessão, fazemos uma avaliação inicial para entender suas necessidades e definir o melhor caminho. A psicoterapia é indicada para questões emocionais e comportamentais, enquanto a avaliação neuropsicológica é mais focada em diagnóstico e compreensão do funcionamento cognitivo.",
    },
    {
      question: "Quanto tempo dura o processo terapêutico?",
      answer:
        "O tempo de terapia varia de acordo com cada pessoa e seus objetivos. Alguns benefícios podem ser percebidos nas primeiras sessões, mas o processo completo pode levar meses. Avaliamos periodicamente o progresso e ajustamos o plano conforme necessário.",
    },
  ];

  return (
    <section id="faq" className="py-20 relative">
      {/* Nova imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fundo4.png"
          alt="Fundo com linhas onduladas em tons quentes"
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-white/10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold title-shadow-right mb-4 text-[#3e5c4e]">
            PERGUNTAS FREQUENTES
          </h2>
          <p className="text-lg text-verde-titulo max-w-3xl mx-auto">
            Tire suas dúvidas sobre o processo terapêutico e os serviços
            oferecidos
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-[#365649] backdrop-blur-sm rounded-3xl p-8 shadow-xl slide-up border-2 border-[#ffcb71]">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-white/20"
              >
                <AccordionTrigger className="text-white hover:text-dourado text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
