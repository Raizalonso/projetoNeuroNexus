import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, date, time, message } = body;

    // Email content para Sumaia Costa
    const emailContent = `
🔔 NOVA SOLICITAÇÃO DE AGENDAMENTO - NeuroNexus

👤 DADOS DO CLIENTE:
Nome: ${name}
Email: ${email}
Telefone: ${phone}

📅 AGENDAMENTO SOLICITADO:
Serviço: ${service}
Data: ${date}
Horário: ${time}

💬 MENSAGEM:
${message || "Nenhuma mensagem adicional"}

⏰ Solicitação enviada em: ${new Date().toLocaleString("pt-BR")}

---
Este email foi enviado automaticamente pelo sistema NeuroNexus.
Para confirmar o agendamento, entre em contato com o cliente.
    `;

    // Log para desenvolvimento (substituir por integração real de email)
    console.log("📧 Email enviado para: psisumaia.costa@gmail.com");
    console.log(emailContent);

    // Aqui você integraria com um serviço real de email como:
    // - Resend: https://resend.com/
    // - SendGrid: https://sendgrid.com/
    // - Nodemailer com Gmail/Outlook

    return NextResponse.json({
      success: true,
      message: "Agendamento enviado com sucesso!",
    });
  } catch (error) {
    console.error("❌ Erro ao processar agendamento:", error);
    return NextResponse.json(
      { success: false, message: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
