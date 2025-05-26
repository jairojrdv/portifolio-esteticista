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
      className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-neutral-soft to-baby-blue-soft"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo textual do hero */}
          <div className="space-y-6 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              Realce sua{" "}
              <span className="text-primary">beleza natural</span>{" "}
              com cuidados profissionais
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Descubra o poder transformador dos tratamentos estéticos personalizados. 
              Com técnicas avançadas e produtos de qualidade, proporciono uma experiência única de bem-estar e autoestima.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleScheduleClick}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Avaliação
              </Button>
              <Button 
                onClick={handleWhatsAppClick}
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary px-8 py-4 rounded-2xl font-semibold hover:bg-primary hover:text-white transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </div>
          </div>
          
          {/* Imagem principal do hero */}
          <div className="relative animate-fade-in">
            {/* SUBSTITUIR: Imagem da Hadassa ou tratamento em andamento */}
            <img 
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=1200" 
              alt="Tratamento estético facial profissional - Hadassa Estética" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              loading="eager"
            />
            {/* Elementos decorativos */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
