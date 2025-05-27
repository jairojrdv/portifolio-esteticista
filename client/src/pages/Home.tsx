import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

/**
 * Página principal do portfólio da Hadassa
 * Componente que agrega todas as seções do site
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Cabeçalho fixo com navegação */}
      <Header />
      
      {/* Seção principal com apresentação */}
      <Hero />
      
      {/* Sobre a profissional */}
      <About />
      
      {/* Serviços oferecidos */}
      <Services />
      
      {/* Depoimentos de clientes */}
      <Testimonials />
      
      {/* Galeria de trabalhos */}
      <Gallery />
      
      {/* Contato e agendamento */}
      <Contact />
      
      {/* Rodapé */}
      <Footer />
      
      {/* Botão WhatsApp flutuante */}
      <WhatsAppButton />
    </main>
  );
}
