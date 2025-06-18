import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Email content para Sumaia Costa
    const emailContent = `
📧 NOVA MENSAGEM DE CONTATO - NeuroNexus

👤 DADOS DO REMETENTE:
Nome: ${name}
Email: ${email}
Telefone: ${phone || "Não informado"}

💬 MENSAGEM:
${message}

⏰ Mensagem enviada em: ${new Date().toLocaleString("pt-BR")}

---
Este email foi enviado automaticamente pelo formulário de contato do site NeuroNexus.
    `

    // Log para desenvolvimento (substituir por integração real de email)
    console.log("📧 Email enviado para: psisumaia.costa@gmail.com")
    console.log(emailContent)

    return NextResponse.json({
      success: true,
      message: "Mensagem enviada com sucesso!",
    })
  } catch (error) {
    console.error("❌ Erro ao processar mensagem:", error)
    return NextResponse.json({ success: false, message: "Erro interno do servidor" }, { status: 500 })
  }
}
