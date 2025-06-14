"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário
    console.log("Formulário enviado:", formData);
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contato" className="py-20 relative">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fundo-contato.png"
          alt="Fundo verde oliva contato"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold title-shadow-right mb-4">
            CONTATO
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="bg-[#365649] rounded-3xl p-8 text-white shadow-xl slide-up">
            <div className="flex items-center mb-8">
              <Image
                src="/images/logo.png"
                alt="Logo Sumaia Costa"
                width={60}
                height={60}
                className="mr-4"
              />
              <h3 className="text-3xl font-serif font-bold text-white">
                SUMAIA COSTA
              </h3>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-serif font-bold mb-4 text-white">
                  Entre em contato
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-white" />
                    <span className="text-white">
                      Rua *****************, ******** Salvador
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-white" />
                    <span className="text-white">Tel: (71) *****-****</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-white" />
                    <span className="text-white">ola@grandesite.com.br</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-serif font-bold mb-4 text-white">
                  Horários de atendimento
                </h4>
                <div className="flex items-center mb-2">
                  <Clock className="w-5 h-5 mr-3 text-white" />
                  <span className="text-white">Segunda a Sexta: 08h - 18h</span>
                </div>
                <p className="text-white">
                  Nossa clínica é livre de barreiras.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-serif font-bold mb-4 text-white">
                  Acompanhe meu conteúdo nas redes sociais
                </h4>
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-cor-terrosa rounded-full flex items-center justify-center hover:bg-terracota transition-colors cursor-pointer hover-lift">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-cor-terrosa rounded-full flex items-center justify-center hover:bg-terracota transition-colors cursor-pointer hover-lift">
                    <Facebook className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-cor-terrosa rounded-full flex items-center justify-center hover:bg-terracota transition-colors cursor-pointer hover-lift">
                    <Youtube className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="bg-[#365649] backdrop-blur-sm rounded-3xl p-8 shadow-xl slide-up">
            <h3 className="text-2xl font-serif font-bold text-white mb-6">
              Envie sua mensagem
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Nome completo
                </label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-white/20 bg-white/10 text-white placeholder:text-white/60 rounded-xl focus:ring-2 focus:ring-white focus:border-white"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white mb-1"
                >
                  E-mail
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-white/20 bg-white/10 text-white placeholder:text-white/60 rounded-xl focus:ring-2 focus:ring-white focus:border-white"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Telefone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Seu telefone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-white/20 bg-white/10 text-white placeholder:text-white/60 rounded-xl focus:ring-2 focus:ring-white focus:border-white"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Sua mensagem"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-4 border-2 border-white/20 bg-white/10 text-white placeholder:text-white/60 rounded-xl focus:ring-2 focus:ring-white focus:border-white resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-terracota hover:bg-terracota/90 text-white py-4 rounded-xl text-lg font-medium hover-lift"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
