import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

/**
 * Componente Services - Galeria de serviços oferecidos
 * Exibe cards com serviços, descrições e preços
 */
export default function Services() {
  const services = [
    {
      title: "Limpeza de Pele Profunda",
      description: "Procedimento completo para remoção de impurezas, cravos e células mortas, deixando a pele renovada e luminosa.",
      price: "A partir de R$ 120",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      alt: "Limpeza de pele profissional"
    },
    {
      title: "Hidratação Intensiva",
      description: "Tratamento revitalizante com ácido hialurônico e vitaminas para restaurar a elasticidade e viço natural da pele.",
      price: "A partir de R$ 150",
      image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      alt: "Hidratação facial profissional"
    },
    {
      title: "Peeling Químico",
      description: "Renovação celular profunda para redução de manchas, rugas finas e melhora da textura da pele.",
      price: "A partir de R$ 200",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      alt: "Peeling químico profissional"
    },
    {
      title: "Microagulhamento",
      description: "Estimulação de colágeno natural para redução de cicatrizes, poros dilatados e rejuvenescimento da pele.",
      price: "A partir de R$ 180",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      alt: "Microagulhamento facial"
    },
    {
      title: "Drenagem Linfática",
      description: "Massagem terapêutica para redução de inchaços, melhora da circulação e eliminação de toxinas.",
      price: "A partir de R$ 100",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      alt: "Drenagem linfática corporal"
    },
    {
      title: "Radiofrequência",
      description: "Tecnologia avançada para firmeza da pele, redução de flacidez e estímulo natural de colágeno.",
      price: "A partir de R$ 250",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      alt: "Radiofrequência facial"
    }
  ];

  const handleScheduleClick = () => {
    scrollToSection('contato');
  };

  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-warm-beige to-neutral-soft">
      <div className="container mx-auto px-4">
        {/* Título da seção */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Tratamentos personalizados para realçar sua beleza natural com técnicas avançadas
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border-0 rounded-2xl"
            >
              <div className="relative overflow-hidden">
                {/* SUBSTITUIR: Imagens reais dos tratamentos da Hadassa */}
                <img 
                  src={service.image} 
                  alt={service.alt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold text-base sm:text-lg">
                    {service.price}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary/80 transition-colors p-0"
                    onClick={handleScheduleClick}
                  >
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <Button 
            onClick={handleScheduleClick}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Agendar Consulta Personalizada
          </Button>
        </div>
      </div>
    </section>
  );
}
