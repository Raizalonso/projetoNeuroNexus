import type React from "react"
import type { Metadata } from "next"
import { Open_Sans, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Sumaia Costa | Psicóloga Especialista em TDAH, TEA e Superdotação",
  description:
    "Acolhimento psicológico especializado para adultos com neurodivergências. Psicoterapia, avaliação neuropsicológica e orientação individual.",
  keywords: "psicóloga, TDAH, TEA, autismo, superdotação, neurodivergência, psicoterapia, Salvador",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  authors: [{ name: "Sumaia Costa" }],
  creator: "Sumaia Costa",
  publisher: "Sumaia Costa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3e5c4e" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${playfair.variable} ${openSans.variable} antialiased`}>
        {/* Skip link para acessibilidade */}
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>

        <div id="main-content">{children}</div>

        <Toaster />
      </body>
    </html>
  )
}
