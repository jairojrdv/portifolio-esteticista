import { Heart, Star, Leaf } from "lucide-react";

/**
 * Componente About - Seção sobre a Hadassa
 * Apresenta biografia, missão, valores e certificações
 */
export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Cuidado humanizado",
      description: "Cada cliente recebe atenção individualizada e carinhosa"
    },
    {
      icon: Star,
      title: "Excelência técnica",
      description: "Uso apenas equipamentos de última geração e produtos certificados"
    },
    {
      icon: Leaf,
      title: "Bem-estar integral",
      description: "Foco no equilíbrio entre beleza externa e autoestima"
    }
  ];

  const certifications = [
    "Estética e Cosmética - Universidade Anhembi Morumbi",
    "Especialização em Harmonização Facial",
    "Certificação em Microagulhamento",
    "Curso Avançado de Peeling Químico"
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Título da seção */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Conheça a <span className="text-primary">Hadassa</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Uma profissional dedicada ao cuidado integral da sua beleza e bem-estar
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Foto profissional da Hadassa */}
            <div className="relative order-2 lg:order-1">
              {/* SUBSTITUIR: Foto profissional real da Hadassa */}
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=1000" 
                alt="Hadassa - Esteticista Profissional" 
                className="rounded-2xl shadow-xl w-full h-auto object-cover max-h-[500px] sm:max-h-[600px] lg:max-h-none"
                loading="lazy"
              />
            </div>
            
            {/* Biografia e informações */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground">Minha História</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Com mais de 8 anos de experiência em estética avançada, dedico-me a proporcionar 
                  tratamentos personalizados que respeitam a individualidade de cada cliente. 
                  Formada em Estética e Cosmética, estou sempre em busca das técnicas mais inovadoras.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground">Missão & Valores</h3>
                <div className="space-y-3">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <value.icon className="text-primary mt-1 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                      <div>
                        <p className="text-muted-foreground text-sm sm:text-base">
                          <strong className="text-foreground">{value.title}:</strong> {value.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certificações */}
              <div className="bg-neutral-soft p-4 sm:p-6 rounded-2xl">
                <h4 className="font-semibold text-foreground mb-3 text-sm sm:text-base">Certificações & Especializações</h4>
                <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  {certifications.map((cert, index) => (
                    <p key={index}>• {cert}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
