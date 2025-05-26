import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

/**
 * Componente Header - Navegação principal fixa
 * Inclui menu responsivo e botão de agendamento
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efeito para detectar scroll e alterar aparência do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lista de itens do menu
  const menuItems = [
    { label: 'Início', href: 'home' },
    { label: 'Sobre', href: 'sobre' },
    { label: 'Serviços', href: 'servicos' },
    { label: 'Depoimentos', href: 'depoimentos' },
    { label: 'Galeria', href: 'galeria' },
    { label: 'Contato', href: 'contato' }
  ];

  const handleMenuClick = (href: string) => {
    scrollToSection(href);
    setIsMenuOpen(false);
  };

  const handleScheduleClick = () => {
    scrollToSection('contato');
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div 
            className="text-2xl font-bold text-gray-800 cursor-pointer"
            onClick={() => handleMenuClick('home')}
          >
            Hadassa <span className="text-primary">Estética</span>
          </div>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleMenuClick(item.href)}
                className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Botão CTA Desktop */}
          <Button 
            onClick={handleScheduleClick}
            className="hidden md:flex bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Agendar Consulta
          </Button>
          
          {/* Botão Menu Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleMenuClick(item.href)}
                  className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium text-left"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={handleScheduleClick}
                className="bg-primary hover:bg-primary/90 text-white rounded-2xl mt-4"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Agendar Consulta
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
