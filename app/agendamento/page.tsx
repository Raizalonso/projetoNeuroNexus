"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, User, Mail, Phone, MessageCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

export default function AgendamentoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  })

  const services = [
    "Psicoterapia",
    "Avaliação Neuropsicológica",
    "Sessões de Orientação Individual",
    "Primeira Consulta",
  ]

  const timeSlots = ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Agendamento solicitado:", formData)
    alert("Solicitação de agendamento enviada! Entraremos em contato para confirmar.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen relative">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/fundo-atendimento.png" alt="Fundo laranja atendimento" fill className="object-cover" />
        <div className="absolute inset-0 bg-white/20"></div>
      </div>

      <div className="relative z-10">
        <Header />

        <main className="section-spacing pt-24">
          <div className="container mx-auto">
            <div className="content-container">
              {/* Header */}
              <div className="text-center mb-16 fade-in">
                <div className="mx-auto mb-6">
                  <div className="logo-darkened inline-block">
                    <Image src="/images/logo.png" alt="Logo Sumaia Costa" width={80} height={80} />
                  </div>
                </div>
                <h1 className="text-4xl lg:text-5xl font-serif font-bold title-shadow-right mb-6">
                  Agende sua Consulta
                </h1>
                <p className="text-xl text-gray-700 content-container readable-line-height font-sans">
                  Dê o primeiro passo para seu bem-estar. Preencha o formulário abaixo e entraremos em contato para
                  confirmar seu agendamento.
                </p>
              </div>

              {/* Formulário */}
              <div className="bg-[#365649] backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 border-2 border-[#ffcb7e] slide-up">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Informações Pessoais */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="flex items-center text-white font-medium mb-3 font-sans">
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
                      <label htmlFor="email" className="flex items-center text-white font-medium mb-3 font-sans">
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
                    <label htmlFor="phone" className="flex items-center text-white font-medium mb-3 font-sans">
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
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  {/* Serviço */}
                  <div>
                    <label htmlFor="service" className="flex items-center text-white font-medium mb-3 font-sans">
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
                        <option key={service} value={service} className="text-gray-800">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Data e Horário */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="flex items-center text-white font-medium mb-3 font-sans">
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
                      <label htmlFor="time" className="flex items-center text-white font-medium mb-3 font-sans">
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
                          <option key={time} value={time} className="text-gray-800">
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label htmlFor="message" className="flex items-center text-white font-medium mb-3 font-sans">
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

                  {/* Botão de Envio */}
                  <div className="text-center">
                    <Button
                      type="submit"
                      size="lg"
                      className="button-saiba-mais text-white px-12 py-4 text-lg font-medium rounded-xl font-sans"
                    >
                      Solicitar Agendamento
                    </Button>

                    <p className="text-sm text-white mt-4 font-sans">
                      * Campos obrigatórios. Entraremos em contato em até 24 horas para confirmar seu agendamento.
                    </p>
                  </div>
                </form>
              </div>

              {/* Informações Adicionais */}
              <div className="mt-12 grid md:grid-cols-3 gap-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg text-center slide-up">
                  <Calendar className="w-8 h-8 text-verde-salvia mx-auto mb-4" />
                  <h3 className="font-serif font-bold text-gray-800 mb-2">Atendimento Online</h3>
                  <p className="text-gray-600 text-sm font-sans">Consultas 100% online via videochamada</p>
                </div>

                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg text-center slide-up">
                  <Clock className="w-8 h-8 text-verde-salvia mx-auto mb-4" />
                  <h3 className="font-serif font-bold text-gray-800 mb-2">Horários Flexíveis</h3>
                  <p className="text-gray-600 text-sm font-sans">Segunda a sexta, das 8h às 18h</p>
                </div>

                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg text-center slide-up">
                  <MessageCircle className="w-8 h-8 text-verde-salvia mx-auto mb-4" />
                  <h3 className="font-serif font-bold text-gray-800 mb-2">Resposta Rápida</h3>
                  <p className="text-gray-600 text-sm font-sans">Confirmação em até 24 horas</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
