import Header from "@/components/header"
import Footer from "@/components/footer"
import Credentials from "@/components/credentials"

export const metadata = {
  title: "Formação e Cursos | Sumaia Costa - Psicóloga",
  description: "Conheça a formação acadêmica e cursos de especialização da psicóloga Sumaia Costa.",
}

export default function FormacaoPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Credentials />
      </main>
      <Footer />
    </div>
  )
}
