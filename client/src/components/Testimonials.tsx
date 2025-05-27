import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

/**
 * Componente Testimonials - Depoimentos de clientes
 * Exibe avaliações e feedback de clientes satisfeitos
 */
export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Cliente há 2 anos",
      content: "Hadassa é uma profissional excepcional! Minha pele nunca esteve tão bonita e saudável. O atendimento é personalizado e ela sempre explica cada etapa do tratamento.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100",
      gradient: "from-primary/10 to-secondary/10"
    },
    {
      name: "Ana Costa",
      role: "Cliente há 1 ano",
      content: "O ambiente é acolhedor e a Hadassa tem um carinho especial com cada cliente. Os resultados dos tratamentos superaram todas as minhas expectativas!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100",
      gradient: "from-accent/10 to-baby-blue-soft"
    },
    {
      name: "Juliana Santos",
      role: "Cliente há 6 meses",
      content: "Profissionalismo e dedicação únicos! Hadassa transformou minha autoestima. Recomendo de olhos fechados para quem busca qualidade e resultados reais.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100",
      gradient: "from-secondary/10 to-neutral-soft"
    },
    {
      name: "Carmen Oliveira",
      role: "Cliente há 3 anos",
      content: "Aos 50 anos, descobri que é possível rejuvenescer de forma natural! A Hadassa é uma artista que trabalha com muito amor e conhecimento técnico.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100",
      gradient: "from-baby-blue-soft to-primary/10"
    }
  ];

  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star key={index} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12">
        {/* Título da seção */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            O que dizem nossas <span className="text-primary">clientes</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de transformação e satisfação
          </p>
        </div>

        {/* Grid de depoimentos */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`bg-gradient-to-br ${testimonial.gradient} shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-2xl`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    {/* SUBSTITUIR: Fotos reais das clientes (com permissão) */}
                    <img 
                      src={testimonial.avatar} 
                      alt={`${testimonial.name} - Cliente`}
                      className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                      loading="lazy"
                    />
                    <div className="flex-1">
                      {/* Avaliação em estrelas */}
                      <div className="flex items-center mb-3">
                        {renderStars()}
                      </div>
                      
                      {/* Depoimento */}
                      <blockquote className="text-gray-700 mb-4 italic leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>
                      
                      {/* Informações do cliente */}
                      <div>
                        <p className="font-semibold text-gray-800">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
