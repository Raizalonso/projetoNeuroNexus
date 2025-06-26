"use client";

import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "M. L.",
      text: "Dra. Sumaia mudou a minha vida! Eu fiz tratamento psiquiátrico durante 15 anos, sendo diagnosticada com depressão, bipolaridade, ansiedade, usando medicações tarja preta, sem necessidade. Tudo mudou quando passei pelo processo de diagnóstico e de reabilitação com ela, descobri que sou autista e tenho TDAH como comorbidade. Aprendi a me conhecer e a driblar as situações que geravam sobrecargas sensoriais. Atualmente eu só uso medicação para TDAH, minha vida FINALMENTE começou a fluir 🙏🏼",
    },
    {
      name: "F. T.",
      text: "Inicialmente, o diagnóstico de TDAH foi racionalmente compreendido, mas depois foi confuso de lidar. Hoje, me sinto aliviada por saber quem eu sou, digamos assim. Sou grata por todo apoio e suporte. Sumaia é uma profissional excepcional.",
    },
    {
      name: "G. C.",
      text: "Melhor psicóloga que eu já tive. Não existe abordagem melhor. Uma profissional excelente. Empática, sabia, carinhosa e nunca me deixou desamparada. Sempre era um prazer fazer terapia com ela.",
    },
    {
      name: "G. S. S.",
      text: "Através da psicologia eu resolvi muitos problemas emocionais. A psicóloga Sumaia é uma excelente profissional não somente como psicóloga, mas como ser humano. Agradeço por tudo que ela fez por mim e recomendo a todos que estiverem passando por conflitos emocionais.",
    },
  ];

  return (
    <section id="depoimentos" className="py-20 relative overflow-hidden">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fundo2.png"
          alt="Fundo formação"
          fill
          className="object-cover filter brightness-110"
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
      </div>

      {/* Conteúdo */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold title-shadow-right mb-4 text-[#3e5c4e]">
            O QUE ESTÃO FALANDO SOBRE O MEU TRABALHO?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-depoimento rounded-3xl p-6 text-white shadow-xl border-2 border-[#ffcb71] transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <p className="leading-relaxed mb-4 text-sm font-sans italic relative">
                <span className="text-2xl text-[#ffcb71] font-serif mr-1">
                  “
                </span>
                {testimonial.text}
              </p>
              <div className="mt-4 text-right font-serif font-bold text-base text-[#ffcb71]">
                — {testimonial.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .slide-up {
          opacity: 0;
          transform: translateY(20px);
          animation-fill-mode: forwards;
          animation-name: slideUpAnim;
          animation-duration: 0.6s;
          animation-timing-function: ease-out;
        }

        @keyframes slideUpAnim {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .bg-depoimento {
          background: linear-gradient(135deg, #3e5c4e 0%, #6a9073 100%);
        }
      `}</style>
    </section>
  );
}
