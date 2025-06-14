import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Credentials from "@/components/credentials"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Credentials />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
