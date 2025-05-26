import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone, Mail, MapPin, Clock, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/utils";
import AppointmentForm from "./AppointmentForm";

/**
 * Componente Contact - Seção de contato e agendamento
 * Inclui formulário de agendamento e informações de contato
 */
export default function Contact() {
  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "(11) 99999-9999",
      action: () => {
        const message = "Olá! Gostaria de agendar uma consulta de estética.";
        window.open(getWhatsAppUrl("11999999999", message), '_blank');
      },
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 99999-9999",
      action: () => window.open("tel:+5511999999999", '_self'),
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@hadassaestetica.com.br",
      action: () => window.open("mailto:contato@hadassaestetica.com.br", '_self'),
      bgColor: "bg-secondary/10",
      iconColor: "text-secondary"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua das Flores, 123 - Jardins\nSão Paulo - SP, 01234-567",
      action: () => window.open("https://maps.google.com/?q=Rua+das+Flores+123+Jardins+São+Paulo", '_blank'),
      bgColor: "bg-accent/10",
      iconColor: "text-accent"
    }
  ];

  const workingHours = [
    { day: "Segunda a Sexta", hours: "09:00 - 18:00" },
    { day: "Sábado", hours: "09:00 - 15:00" },
    { day: "Domingo", hours: "Fechado" }
  ];

  const socialMedia = [
    { 
      name: "Instagram", 
      icon: "instagram", 
      url: "#", 
      bg: "bg-gradient-to-br from-pink-500 to-purple-600" 
    },
    { 
      name: "Facebook", 
      icon: "facebook", 
      url: "#", 
      bg: "bg-blue-600" 
    },
    { 
      name: "TikTok", 
      icon: "tiktok", 
      url: "#", 
      bg: "bg-black" 
    },
    { 
      name: "YouTube", 
      icon: "youtube", 
      url: "#", 
      bg: "bg-red-600" 
    }
  ];

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Título da seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Vamos conversar sobre seu <span className="text-primary">cuidado</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Agende sua consulta personalizada e descubra o melhor tratamento para você
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulário de agendamento */}
          <AppointmentForm />

          {/* Informações de contato */}
          <div className="space-y-8">
            {/* Contato direto */}
            <Card className="bg-white shadow-lg border border-gray-100 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Contato Direto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`${contact.bgColor} p-3 rounded-2xl`}>
                      <contact.icon className={`${contact.iconColor} h-6 w-6`} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">{contact.title}</p>
                      <Button
                        variant="link"
                        className="text-primary hover:text-primary/80 transition-colors p-0 h-auto font-normal"
                        onClick={contact.action}
                      >
                        {contact.content.split('\n').map((line, i) => (
                          <span key={i} className="block">
                            {line}
                          </span>
                        ))}
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Horário de funcionamento */}
            <Card className="bg-gradient-to-br from-accent/5 to-baby-blue-soft shadow-lg border-0 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 flex items-center">
                  <Clock className="mr-2 h-6 w-6 text-primary" />
                  Horário de Funcionamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700">{schedule.day}</span>
                      <span className="font-semibold text-gray-800">{schedule.hours}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-white rounded-xl">
                  <p className="text-sm text-gray-600 text-center flex items-center justify-center">
                    <Info className="text-primary mr-2 h-4 w-4" />
                    Atendimento apenas com agendamento prévio
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Redes sociais */}
            <Card className="bg-white shadow-lg border border-gray-100 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Siga-nos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialMedia.map((social, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="lg"
                      className={`${social.bg} text-white p-4 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                      onClick={() => window.open(social.url, '_blank')}
                      aria-label={`Seguir no ${social.name}`}
                    >
                      <i className={`fab fa-${social.icon} text-xl`}></i>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
