"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-[#365649] backdrop-blur-sm z-50 border-b border-white/10">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/logo.png" alt="Logo Sumaia Costa" width={50} height={50} className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            <Link
              href="/"
              className="text-white hover:text-verde-salvia hover:bg-white/90 px-3 py-2 rounded-lg transition-all duration-300 font-medium no-underline text-sm"
              aria-label="Ir para página inicial"
            >
              Início
            </Link>
            <Link
              href="/#servicos"
              className="text-white hover:text-verde-salvia hover:bg-white/90 px-3 py-2 rounded-lg transition-all duration-300 font-medium no-underline text-sm"
              aria-label="Ir para seção de serviços"
            >
              Serviços
            </Link>
            <Link
              href="/#sobre"
              className="text-white hover:text-verde-salvia hover:bg-white/90 px-3 py-2 rounded-lg transition-all duration-300 font-medium no-underline text-sm"
              aria-label="Ir para seção sobre mim"
            >
              Sobre
            </Link>
            <Link
              href="/#formacao"
              className="text-white hover:text-verde-salvia hover:bg-white/90 px-3 py-2 rounded-lg transition-all duration-300 font-medium no-underline text-sm"
              aria-label="Ir para seção de formação"
            >
              Formação
            </Link>
            <Link
              href="/#depoimentos"
              className="text-white hover:text-verde-salvia hover:bg-white/90 px-3 py-2 rounded-lg transition-all duration-300 font-medium no-underline text-sm"
              aria-label="Ir para seção de depoimentos"
            >
              Depoimentos
            </Link>
            <Link
              href="/#faq"
              className="text-white hover:text-verde-salvia hover:bg-white/90 px-3 py-2 rounded-lg transition-all duration-300 font-medium no-underline text-sm"
              aria-label="Ir para seção de dúvidas"
            >
              Dúvidas
            </Link>
            <Link
              href="/#contato"
              className="text-white hover:text-verde-salvia hover:bg-white/90 px-3 py-2 rounded-lg transition-all duration-300 font-medium no-underline text-sm"
              aria-label="Ir para seção de contato"
            >
              Contato
            </Link>
            <Link href="/agendamento" aria-label="Agendar consulta">
              <Button className="bg-terracota hover:bg-terracota/90 text-white text-sm px-4 py-2">
                Agendar Consulta
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col space-y-2 pt-4">
              <Link
                href="/"
                className="text-white hover:text-verde-salvia hover:bg-white/90 px-3 py-2 rounded-lg transition-all duration-300 font-medium no-underline text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                href="/#servicos"
                className="text-white hover:text-verde-salvia hover:bg-white/90 px-3 py-2 rounded-lg transition-all duration-300 font-medium no-underline text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link
                href="/#sobre"
                className="text-white hover:text-verde-salvia hover:bg-white/90 px-3 py-2 rounded-lg transition-all duration-300 font-medium no-underline text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="/#formacao"
                className="text-white hover:text-verde-salvia hover:bg-white/90 px-3 py-2 rounded-lg transition-all duration-300 font-medium no-underline text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Formação
              </Link>
              <Link
                href="/#depoimentos"
                className="text-white hover:text-verde-salvia hover:bg-white/90 px-3 py-2 rounded-lg transition-all duration-300 font-medium no-underline text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </Link>
              <Link
                href="/#faq"
                className="text-white hover:text-verde-salvia hover:bg-white/90 px-3 py-2 rounded-lg transition-all duration-300 font-medium no-underline text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Dúvidas
              </Link>
              <Link
                href="/#contato"
                className="text-white hover:text-verde-salvia hover:bg-white/90 px-3 py-2 rounded-lg transition-all duration-300 font-medium no-underline text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <Link href="/agendamento" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-terracota hover:bg-terracota/90 text-white w-full text-sm">
                  Agendar Consulta
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
