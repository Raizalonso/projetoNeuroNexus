import Header from "@/components/header"
import Footer from "@/components/footer"
import Testimonials from "@/components/testimonials"

export const metadata = {
  title: "Depoimentos | Sumaia Costa - Psicóloga",
  description: "Veja o que os clientes estão falando sobre o trabalho da psicóloga Sumaia Costa.",
}

export default function DepoimentosPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
