import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle } from "lucide-react";
import { scrollToSection, getWhatsAppUrl } from "@/lib/utils";

/**
 * Componente Hero - Seção principal de apresentação
 * Banner com chamada principal e botões de ação
 */
export default function Hero() {
  const handleScheduleClick = () => {
    scrollToSection('contato');
  };

  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de agendar uma consulta de estética.";
    const whatsappUrl = getWhatsAppUrl("11999999999", message);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section 
      id="home" 
      className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-neutral-soft to-warm-beige"
    >
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Conteúdo textual do hero */}
          <div className="space-y-6 animate-slide-up order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
              Realce sua{" "}
              <span className="text-primary">beleza natural</span>{" "}
              com cuidados profissionais
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Descubra o poder transformador dos tratamentos estéticos personalizados. 
              Com técnicas avançadas e produtos de qualidade, proporciono uma experiência única de bem-estar e autoestima.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={handleScheduleClick}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
              >
                <Calendar className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                Agendar Avaliação
              </Button>
              <Button 
                onClick={handleWhatsAppClick}
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full sm:w-auto"
              >
                <MessageCircle className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                WhatsApp
              </Button>
            </div>
          </div>
          
          {/* Imagem principal do hero */}
          <div className="relative animate-fade-in order-1 lg:order-2">
            {/* SUBSTITUIR: Imagem da Hadassa ou tratamento em andamento */}
            <img 
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=1200" 
              alt="Tratamento estético facial profissional - Hadassa Estética" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover max-h-[500px] sm:max-h-[600px] lg:max-h-none"
              loading="eager"
            />
            {/* Elementos decorativos */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-20 sm:h-20 bg-secondary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-16 sm:h-16 bg-accent/20 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
