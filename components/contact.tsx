"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  Clock,
  Instagram,
  MessageCircle,
  Send,
  Linkedin,
} from "lucide-react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Erro ao enviar mensagem. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao enviar mensagem. Tente novamente.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Funções para redirecionar para os contatos
  const openInstagram = () => {
    window.open(
      "https://www.instagram.com/_neuro_nexus?igsh=MTF3dTF4dmJkenQzcA==&utm_source=ig_contact_invite"
    );
  };

  const openLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/sumaia-costa-773057237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      "_blank"
    );
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/5571914275620", "_blank");
  };

  const openTelegram = () => {
    window.open("https://t.me/Sumaiacosta", "_blank");
  };

  const callPhone = () => {
    window.open("tel:+5571914275620", "_self");
  };

  return (
    <section id="contato" className="py-12 sm:py-16 lg:py-20 relative">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fundo2.png"
          alt="Fundo verde oliva contato"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 lg:mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold title-shadow-right mb-4 text-[#3e5c4e]">
            CONTATO
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Informações de Contato */}
          <div className="bg-[#365649] rounded-3xl p-6 sm:p-8 text-white shadow-xl slide-up">
            <div className="flex items-center mb-6 lg:mb-8">
              <Image
                src="/images/logo.png"
                alt="Logo Sumaia Costa"
                width={60}
                height={80}
                className="mr-4 w-12 h-12 sm:w-15 sm:h-15"
              />
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                SUMAIA COSTA
              </h3>
            </div>

            <div className="space-y-6 lg:space-y-8">
              <div>
                <h4 className="text-lg sm:text-xl font-serif font-bold mb-3 lg:mb-4 text-white">
                  Entre em contato
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-white flex-shrink-0" />
                    <span className="text-white text-sm sm:text-base">
                      psisumaia.costa@gmail.com
                    </span>
                  </div>
                  <div
                    className="flex items-center cursor-pointer hover:text-yellow-300 transition-colors"
                    onClick={callPhone}
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-white flex-shrink-0" />
                    <span className="text-white text-sm sm:text-base">
                      +55 71 9142-7562
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-serif font-bold mb-3 lg:mb-4 text-white">
                  Horários de atendimento
                </h4>
                <div className="flex items-center mb-2">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-white flex-shrink-0" />
                  <span className="text-white text-sm sm:text-base">
                    Segunda a Sexta: 13h - 22h , Sábado: 13 - 18h.
                  </span>
                </div>
                <p className="text-white text-sm sm:text-base">
                  Atendimento presencial e online.
                </p>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-serif font-bold mb-3 lg:mb-4 text-white">
                  Acompanhe meu conteúdo nas redes sociais
                </h4>
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4">
                  <button
                    onClick={openInstagram}
                    className="w-12 h-12 bg-cor-terrosa rounded-full flex items-center justify-center hover:bg-terracota transition-colors cursor-pointer hover-lift"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </button>
                  <button
                    onClick={openLinkedIn}
                    className="w-12 h-12 bg-cor-terrosa rounded-full flex items-center justify-center hover:bg-terracota transition-colors cursor-pointer hover-lift"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </button>
                  <button
                    onClick={openWhatsApp}
                    className="w-12 h-12 bg-cor-terrosa rounded-full flex items-center justify-center hover:bg-terracota transition-colors cursor-pointer hover-lift"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </button>
                  <button
                    onClick={openTelegram}
                    className="w-12 h-12 bg-cor-terrosa rounded-full flex items-center justify-center hover:bg-terracota transition-colors cursor-pointer hover-lift"
                    aria-label="Telegram"
                  >
                    <Send className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="bg-[#365649] backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl slide-up">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-4 lg:mb-6">
              Envie sua mensagem
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
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
                  className="w-full p-3 sm:p-4 border-2 border-white/20 bg-white/10 text-white placeholder:text-white/60 rounded-xl focus:ring-2 focus:ring-white focus:border-white text-sm sm:text-base"
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
                  className="w-full p-3 sm:p-4 border-2 border-white/20 bg-white/10 text-white placeholder:text-white/60 rounded-xl focus:ring-2 focus:ring-white focus:border-white text-sm sm:text-base"
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
                  className="w-full p-3 sm:p-4 border-2 border-white/20 bg-white/10 text-white placeholder:text-white/60 rounded-xl focus:ring-2 focus:ring-white focus:border-white text-sm sm:text-base"
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
                  rows={4}
                  className="w-full p-3 sm:p-4 border-2 border-white/20 bg-white/10 text-white placeholder:text-white/60 rounded-xl focus:ring-2 focus:ring-white focus:border-white resize-none text-sm sm:text-base"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-terracota hover:bg-terracota/90 text-white py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium hover-lift"
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
