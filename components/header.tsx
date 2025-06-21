"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-[#365649] backdrop-blur-sm z-50 border-b border-white/10 shadow-md">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* LOGO + TÍTULO NEURONEXUS */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/logo.png"
              alt="Logo NeuroNexus"
              width={48}
              height={48}
              className="h-12 w-auto"
            />
            <h1 className="text-white text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight transition-transform duration-300 hover:scale-105">
              <span className="bg-gradient-to-r from-white via-terracota to-white bg-clip-text text-transparent">
                NeuroNexus
              </span>
            </h1>
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center space-x-4 ml-auto">
            {[
              { href: "/", label: "Início" },
              { href: "/#servicos", label: "Serviços" },
              { href: "/#sobre", label: "Sobre" },
              { href: "/#formacao", label: "Formação" },
              { href: "/#depoimentos", label: "Depoimentos" },
              { href: "/#faq", label: "Dúvidas" },
              { href: "/#contato", label: "Contato" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-white hover:text-verde-salvia hover:bg-white/90 px-3 py-2 rounded-lg transition duration-300 font-medium text-sm"
              >
                {label}
              </Link>
            ))}
            <Link href="/agendamento">
              <Button className="bg-terracota hover:bg-terracota/90 text-white text-sm px-4 py-2 transition-transform duration-200 hover:scale-105 shadow-md">
                Agendar Consulta
              </Button>
            </Link>
          </nav>

          {/* Botão Menu Mobile */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Navegação Mobile */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col space-y-2 pt-4">
              {[
                { href: "/", label: "Início" },
                { href: "/#servicos", label: "Serviços" },
                { href: "/#sobre", label: "Sobre" },
                { href: "/#formacao", label: "Formação" },
                { href: "/#depoimentos", label: "Depoimentos" },
                { href: "/#faq", label: "Dúvidas" },
                { href: "/#contato", label: "Contato" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-verde-salvia hover:bg-white/90 px-3 py-2 rounded-lg transition duration-300 font-medium text-sm"
                >
                  {label}
                </Link>
              ))}
              <Link href="/agendamento" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-terracota hover:bg-terracota/90 text-white w-full text-sm mt-2 shadow-md transition-transform duration-200 hover:scale-105">
                  Agendar Consulta
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
