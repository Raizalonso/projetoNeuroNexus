import Image from "next/image"

export default function Footer() {
  return (
    <footer className="py-3 bg-[#365649] border-t border-white/10">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex items-center justify-center space-x-4">
          <Image src="/images/logo.png" alt="Logo Sumaia Costa" width={50} height={50} />
          <div className="text-center">
            <h3 className="text-sm font-serif font-bold text-white">Sumaia Costa - Psicóloga</h3>
            <p className="text-white/80 text-xs">© {new Date().getFullYear()} Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
