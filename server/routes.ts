import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Configuração do transporter de email
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "jairo.jr.dev@gmail.com",
      pass: "cotmomwchblmaala",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // Verificar conexão do email
  transporter.verify((error, success) => {
    if (error) {
      console.log("❌ Erro na configuração do email:", error);
    } else {
      console.log("✅ Servidor de email configurado corretamente");
    }
  });

  // Endpoint de teste para email
  app.post("/api/test-email", async (req, res) => {
    try {
      console.log("🧪 Testando envio de email...");

      await transporter.sendMail({
        from: "jairo.jr.dev@gmail.com",
        to: "jairo.jr.dev@gmail.com",
        subject: "🧪 Teste de Email - Dra. Hadassa",
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
            <div style="background-color: white; padding: 30px; border-radius: 10px;">
              <h2 style="color: #8B5CF6;">🧪 Email de Teste</h2>
              <p>Se você recebeu este email, a configuração está funcionando perfeitamente!</p>
              <p><strong>Data/Hora:</strong> ${new Date().toLocaleString("pt-BR")}</p>
            </div>
          </div>
        `,
      });

      console.log("✅ Email de teste enviado com sucesso!");
      res.status(200).json({ message: "Email de teste enviado com sucesso!" });
    } catch (error) {
      console.error("❌ Erro ao enviar email de teste:", error);
      res
        .status(500)
        .json({
          message: "Erro ao enviar email de teste",
          error: error.message,
        });
    }
  });

  // Endpoint para receber solicitações de agendamento
  app.post("/api/appointments", async (req, res) => {
    try {
      const { nome, telefone, email, data, servico, mensagem } = req.body;

      // Validação básica
      if (!nome || !telefone) {
        return res.status(400).json({
          message: "Nome e telefone são obrigatórios",
        });
      }

      const appointment = {
        nome,
        telefone,
        email: email || null,
        data: data || null,
        servico: servico || null,
        mensagem: mensagem || null,
        created_at: new Date().toISOString(),
      };

      // Formatar data para exibição
      const dataFormatada = data
        ? new Date(data).toLocaleDateString("pt-BR")
        : "Não informada";

      // Template do email
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #8B5CF6; text-align: center; margin-bottom: 30px;">🌸 Novo Agendamento - Dra. Hadassa Matos</h2>

            <div style="background-color: #f8f4ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #6D28D9; margin-top: 0;">📋 Dados do Cliente</h3>
              <p><strong>Nome:</strong> ${nome}</p>
              <p><strong>Telefone:</strong> ${telefone}</p>
              <p><strong>Email:</strong> ${email || "Não informado"}</p>
            </div>

            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #0369A1; margin-top: 0;">📅 Detalhes do Agendamento</h3>
              <p><strong>Data Preferida:</strong> ${dataFormatada}</p>
              <p><strong>Serviço:</strong> ${servico || "Não especificado"}</p>
            </div>

            ${
              mensagem
                ? `
            <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #16A34A; margin-top: 0;">💬 Mensagem</h3>
              <p style="font-style: italic;">"${mensagem}"</p>
            </div>
            `
                : ""
            }

            <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; text-align: center;">
              <p style="margin: 0; color: #92400E;"><strong>⏰ Recebido em:</strong> ${new Date(appointment.created_at).toLocaleString("pt-BR")}</p>
            </div>

            <div style="text-align: center; margin-top: 30px;">
              <a href="https://wa.me/5599984311884?text=Olá! Vi o agendamento de ${encodeURIComponent(nome)}. Vamos conversar sobre os procedimentos!" 
                 style="background-color: #25D366; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold;">
                📱 Responder via WhatsApp
              </a>
            </div>
          </div>
        </div>
      `;

      // Enviar email
      await transporter.sendMail({
        from: process.env.EMAIL_USER || "jairo.jr.dev@gmail.com",
        to: "jairo.jr.dev@gmail.com",
        subject: `🌸 Novo Agendamento - ${nome}`,
        html: emailHtml,
      });

      // Log da solicitação
      console.log("Nova solicitação de agendamento:", appointment);

      // Resposta de sucesso
      res.status(200).json({
        message: "Solicitação de agendamento recebida com sucesso!",
        data: appointment,
      });
    } catch (error) {
      console.error("Erro ao processar agendamento:", error);
      res.status(500).json({
        message: "Erro interno do servidor",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
