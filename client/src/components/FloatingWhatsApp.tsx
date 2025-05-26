
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

/**
 * Componente FloatingWhatsApp - Botão flutuante de WhatsApp
 * Fica fixo no canto inferior direito da tela
 */
export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar o botão após um pequeno delay para uma entrada suave
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = "Olá, gostaria de conhecer melhor os procedimentos estéticos da Dra. Hadassa Matos";
    const whatsappUrl = `https://wa.me/5599984311884?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      <Button
        onClick={handleWhatsAppClick}
        className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 group relative overflow-hidden"
        aria-label="Contato via WhatsApp"
      >
        {/* Efeito de brilho */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        
        {/* Ícone do WhatsApp */}
        <MessageCircle className="h-8 w-8 relative z-10" />
        
        {/* Animação de pulso */}
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
      </Button>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
          Fale conosco no WhatsApp
          <div className="absolute top-full right-4 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      </div>
    </div>
  );
}
