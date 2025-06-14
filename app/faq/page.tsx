import Header from "@/components/header"
import Footer from "@/components/footer"
import FAQ from "@/components/faq"

export const metadata = {
  title: "Perguntas Frequentes | Sumaia Costa - Psicóloga",
  description: "Tire suas dúvidas sobre psicoterapia, avaliação neuropsicológica e atendimento online.",
}

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
