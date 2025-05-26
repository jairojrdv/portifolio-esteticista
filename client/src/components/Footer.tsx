import { scrollToSection } from "@/lib/utils";
import { MapPin, Phone, Mail } from "lucide-react";
import { InstagramIcon, FacebookIcon, WhatsAppIcon, TikTokIcon } from "@/components/ui/social-icons";

/**
 * Componente Footer - Rodapé com links e informações
 * Inclui navegação rápida, contato e redes sociais
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { label: 'Início', href: 'home' },
    { label: 'Sobre', href: 'sobre' },
    { label: 'Serviços', href: 'servicos' },
    { label: 'Depoimentos', href: 'depoimentos' },
    { label: 'Galeria', href: 'galeria' },
    { label: 'Contato', href: 'contato' }
  ];

  const socialLinks = [
    { icon: InstagramIcon, url: '#', ariaLabel: 'Instagram' },
    { icon: FacebookIcon, url: '#', ariaLabel: 'Facebook' },
    { icon: WhatsAppIcon, url: '#', ariaLabel: 'WhatsApp' },
    { icon: TikTokIcon, url: '#', ariaLabel: 'TikTok' }
  ];

  const contactData = [
    {
      icon: MapPin,
      text: "Rua das Flores, 123 - Jardins"
    },
    {
      icon: Phone,
      text: "(11) 99999-9999"
    },
    {
      icon: Mail,
      text: "contato@hadassaestetica.com.br"
    }
  ];

  const handleLinkClick = (href: string) => {
    scrollToSection(href);
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Logo e descrição */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              Hadassa <span className="text-primary">Estética</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Cuidados estéticos profissionais para realçar sua beleza natural. 
              Transforme sua autoestima com tratamentos personalizados e de qualidade.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  onClick={() => window.open(social.url, '_blank')}
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                  aria-label={social.ariaLabel}
                >
                  <social.icon size={20} />
                </button>
              ))}
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <div className="space-y-3 text-gray-300">
              {contactData.map((contact, index) => (
                <div key={index} className="flex items-start">
                  <contact.icon className="mr-2 mt-0.5 text-primary h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">{contact.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {currentYear} Hadassa Estética. Todos os direitos reservados. 
            <span className="text-primary ml-2">Desenvolvido com 💜</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
