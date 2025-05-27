
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone, Mail, MapPin, Clock, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/utils";
import AppointmentForm from "./AppointmentForm";
import { InstagramIcon, FacebookIcon, TikTokIcon, YouTubeIcon, WhatsAppIcon } from "@/components/ui/social-icons";

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
      icon: InstagramIcon, 
      url: "#", 
      bg: "bg-gradient-to-br from-pink-500 to-purple-600" 
    },
    { 
      name: "Facebook", 
      icon: FacebookIcon, 
      url: "#", 
      bg: "bg-blue-600" 
    },
    { 
      name: "TikTok", 
      icon: TikTokIcon, 
      url: "#", 
      bg: "bg-black" 
    },
    { 
      name: "YouTube", 
      icon: YouTubeIcon, 
      url: "#", 
      bg: "bg-red-600" 
    }
  ];

  return (
    <section id="contato" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 xl:px-12">
        {/* Título da seção */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 px-2">
            Vamos conversar sobre seu <span className="text-primary">cuidado</span>?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Agende sua consulta personalizada e descubra o melhor tratamento para você
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 max-w-7xl mx-auto">
          {/* Formulário de agendamento */}
          <div className="order-2 lg:order-1 w-full">
            <AppointmentForm />
          </div>

          {/* Informações de contato */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 order-1 lg:order-2 w-full">
            {/* Contato direto */}
            <Card className="bg-white shadow-lg border border-gray-100 rounded-2xl w-full overflow-hidden">
              <CardHeader className="pb-2 sm:pb-3 px-3 sm:px-4 lg:px-6">
                <CardTitle className="text-sm sm:text-base lg:text-lg xl:text-xl text-foreground">Contato Direto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3 lg:space-y-4 px-3 sm:px-4 lg:px-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                    <div className={`${contact.bgColor} p-1.5 sm:p-2 rounded-lg sm:rounded-xl flex-shrink-0`}>
                      <contact.icon className={`${contact.iconColor} h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground text-xs sm:text-sm lg:text-base mb-1">{contact.title}</p>
                      <Button
                        variant="link"
                        className="text-primary hover:text-primary/80 transition-colors p-0 h-auto font-normal text-xs sm:text-sm text-left w-full justify-start"
                        onClick={contact.action}
                      >
                        <div className="w-full overflow-hidden">
                          {contact.content.split('\n').map((line, i) => (
                            <div key={i} className="block break-words text-left w-full">
                              {line}
                            </div>
                          ))}
                        </div>
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Horário de funcionamento */}
            <Card className="bg-gradient-to-br from-accent/5 to-warm-beige shadow-lg border-0 rounded-2xl w-full overflow-hidden">
              <CardHeader className="pb-2 sm:pb-3 px-3 sm:px-4 lg:px-6">
                <CardTitle className="text-sm sm:text-base lg:text-lg xl:text-xl text-foreground flex items-center">
                  <Clock className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-primary flex-shrink-0" />
                  <span className="truncate">Horário de Funcionamento</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-3 sm:px-4 lg:px-6">
                <div className="space-y-1.5 sm:space-y-2">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center gap-2">
                      <span className="text-muted-foreground text-xs sm:text-sm lg:text-base flex-shrink-0">{schedule.day}</span>
                      <span className="font-semibold text-foreground text-xs sm:text-sm lg:text-base text-right">{schedule.hours}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-2 sm:mt-3 lg:mt-4 p-2 sm:p-3 bg-white rounded-lg sm:rounded-xl">
                  <p className="text-xs sm:text-sm text-muted-foreground text-center flex items-center justify-center">
                    <Info className="text-primary mr-1 sm:mr-1.5 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span className="break-words">Atendimento apenas com agendamento prévio</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Redes sociais */}
            <Card className="bg-white shadow-lg border border-gray-100 rounded-2xl w-full overflow-hidden">
              <CardHeader className="pb-2 sm:pb-3 px-3 sm:px-4 lg:px-6">
                <CardTitle className="text-sm sm:text-base lg:text-lg xl:text-xl text-foreground">Siga-nos</CardTitle>
              </CardHeader>
              <CardContent className="px-3 sm:px-4 lg:px-6">
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {socialMedia.map((social, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className={`${social.bg} text-white p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl lg:rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full aspect-square flex items-center justify-center min-h-[40px] sm:min-h-[48px]`}
                      onClick={() => window.open(social.url, '_blank')}
                      aria-label={`Seguir no ${social.name}`}
                    >
                      <social.icon size={12} className="sm:w-4 sm:h-4 lg:w-[18px] lg:h-[18px]" />
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
