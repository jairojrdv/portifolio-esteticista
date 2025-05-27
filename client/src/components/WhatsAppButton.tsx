import { WhatsAppIcon } from "@/components/ui/social-icons";
import { getWhatsAppUrl } from "@/lib/utils";

/**
 * Componente WhatsAppButton - Botão flutuante fixo do WhatsApp
 * Permite contato direto via WhatsApp
 */
export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de agendar uma consulta de estética.";
    const whatsappUrl = getWhatsAppUrl("11999999999", message);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-pulse"
      aria-label="Falar no WhatsApp"
    >
      <WhatsAppIcon size={24} />
    </button>
  );
}