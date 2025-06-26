/* app/agendamento/page.tsx ou pages/agendamento.tsx  */
"use client";

import type React from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";

export default function AgendamentoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const services = [
    "Psicoterapia",
    "Avaliação Neuropsicológica",
    "Sessões de Orientação Individual",
    "Primeira Consulta",
  ];

  const timeSlots = [
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ];

  // Mantém o formulário controlado só para exibir valores na UI
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen relative">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fundo5.png"
          alt="Fundo laranja atendimento"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/20" />
      </div>

      <div className="relative z-10">
        <Header />

        <main className="section-spacing pt-24">
          <div className="container mx-auto">
            <div className="content-container">
              {/* Título */}
              <div className="text-center mb-16 fade-in">
                <div className="mx-auto mb-6">
                  <div className="logo-darkened inline-block">
                    <Image
                      src="/images/logo.png"
                      alt="Logo Sumaia Costa"
                      width={120}
                      height={120}
                    />
                  </div>
                </div>
                <h1 className="text-4xl lg:text-5xl font-serif font-bold title-shadow-right mb-6 text-[#3e5c4e]">
                  Agende sua Consulta
                </h1>
                <p className="text-xl text-gray-700 font-sans">
                  Dê o primeiro passo para seu bem-estar. Preencha o formulário
                  abaixo e entraremos em contato para confirmar seu agendamento.
                </p>
              </div>

              {/* Formulário */}
              <div className="bg-[#365649] backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 border-2 border-[#ffcb7e] slide-up">
                {/* 
                  • action  -> e-mail da cliente via FormSubmit
                  • method  -> POST
                */}
                <form
                  action="https://formsubmit.co/psisumaia.costa@gmail.com"
                  method="POST"
                  className="space-y-8"
                >
                  {/* Redireciona após envio */}
                  <input
                    type="hidden"
                    name="_next"
                    value="https://seudominio.com/obrigado"
                  />
                  {/* Assunto do e-mail que chega para a cliente */}
                  <input
                    type="hidden"
                    name="_subject"
                    value="Novo agendamento via site"
                  />
                  {/* Mensagem automática para quem preencheu */}
                  <input
                    type="hidden"
                    name="_autoresponse"
                    value="Olá! Recebemos sua solicitação de agendamento e entraremos em contato em breve para confirmar."
                  />
                  {/* Honeypot anti-spam */}
                  <input
                    type="text"
                    name="_honey"
                    style={{ display: "none" }}
                  />
                  {/* Desliga o captcha da FormSubmit */}
                  <input type="hidden" name="_captcha" value="false" />

                  {/* --- Dados pessoais --- */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="flex items-center text-white font-medium mb-3 font-sans"
                      >
                        <User className="w-5 h-5 mr-2 text-white" />
                        Nome Completo *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-4 border-2 border-white/20 bg-white/10 text-white placeholder:text-white/60 rounded-xl focus:ring-2 focus:ring-white focus:border-white font-sans"
                        placeholder="Digite seu nome completo"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="flex items-center text-white font-medium mb-3 font-sans"
                      >
                        <Mail className="w-5 h-5 mr-2 text-white" />
                        E-mail *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-4 border-2 border-white/20 bg-white/10 text-white placeholder:text-white/60 rounded-xl focus:ring-2 focus:ring-white focus:border-white font-sans"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="flex items-center text-white font-medium mb-3 font-sans"
                    >
                      <Phone className="w-5 h-5 mr-2 text-white" />
                      Telefone/WhatsApp *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full p-4 border-2 border-white/20 bg-white/10 text-white placeholder:text-white/60 rounded-xl focus:ring-2 focus:ring-white focus:border-white font-sans"
                      placeholder="(DDD) 99999-9999"
                    />
                  </div>

                  {/* Serviço */}
                  <div>
                    <label
                      htmlFor="service"
                      className="flex items-center text-white font-medium mb-3 font-sans"
                    >
                      <MessageCircle className="w-5 h-5 mr-2 text-white" />
                      Tipo de Atendimento *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full p-4 border-2 border-white/20 bg-white/10 text-white rounded-xl focus:ring-2 focus:ring-white focus:border-white font-sans"
                    >
                      <option value="" className="text-gray-800">
                        Selecione o tipo de atendimento
                      </option>
                      {services.map((service) => (
                        <option
                          key={service}
                          value={service}
                          className="text-gray-800"
                        >
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Data e horário */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="date"
                        className="flex items-center text-white font-medium mb-3 font-sans"
                      >
                        <Calendar className="w-5 h-5 mr-2 text-white" />
                        Data Preferida *
                      </label>
                      <Input
                        id="date"
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full p-4 border-2 border-white/20 bg-white/10 text-white rounded-xl focus:ring-2 focus:ring-white focus:border-white font-sans"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="time"
                        className="flex items-center text-white font-medium mb-3 font-sans"
                      >
                        <Clock className="w-5 h-5 mr-2 text-white" />
                        Horário Preferido *
                      </label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full p-4 border-2 border-white/20 bg-white/10 text-white rounded-xl focus:ring-2 focus:ring-white focus:border-white font-sans"
                      >
                        <option value="" className="text-gray-800">
                          Selecione um horário
                        </option>
                        {timeSlots.map((time) => (
                          <option
                            key={time}
                            value={time}
                            className="text-gray-800"
                          >
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label
                      htmlFor="message"
                      className="flex items-center text-white font-medium mb-3 font-sans"
                    >
                      <MessageCircle className="w-5 h-5 mr-2 text-white" />
                      Mensagem (Opcional)
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full p-4 border-2 border-white/20 bg-white/10 text-white placeholder:text-white/60 rounded-xl focus:ring-2 focus:ring-white focus:border-white resize-none font-sans"
                      placeholder="Conte um pouco sobre o que você gostaria de trabalhar ou qualquer informação adicional..."
                    />
                  </div>

                  {/* Botão */}
                  <div className="text-center">
                    <Button
                      type="submit"
                      size="sm"
                      className="text-white px-6 py-3 text-sm rounded-lg hover:scale-[1.03] transition shadow-lg font-medium font-sans"
                      style={{ backgroundColor: "#d4af37" }}
                    >
                      SOLICITAR AGENDAMENTO
                    </Button>

                    <p className="text-sm text-white mt-4 font-sans">
                      * Campos obrigatórios. Entraremos em contato em até 48
                      horas para confirmar seu agendamento. Se preferir, fale
                      direto pelo&nbsp;
                      <a
                        href="https://wa.me/5571914275620"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-yellow-300"
                      >
                        WhatsApp
                      </a>
                      .
                    </p>
                  </div>
                </form>
              </div>

              {/* Informações adicionais */}
              <div className="mt-12 grid md:grid-cols-3 gap-6">
                {/* ... seus cards informativos permanecem iguais ... */}
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
