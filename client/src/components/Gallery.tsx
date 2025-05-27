import { useState } from "react";
import { X, Expand } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/ui/social-icons";

/**
 * Componente Gallery - Grid de fotos dos trabalhos
 * Inclui modal para visualização em tela cheia
 */
export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
      alt: "Tratamento de limpeza facial - antes e depois",
      aspectRatio: "aspect-[4/5]"
    },
    {
      src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=600",
      alt: "Resultado de peeling químico",
      aspectRatio: "aspect-[2/3]"
    },
    {
      src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400",
      alt: "Interior moderno da clínica de estética",
      aspectRatio: "aspect-square"
    },
    {
      src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=550",
      alt: "Sessão de microagulhamento",
      aspectRatio: "aspect-[4/5]"
    },
    {
      src: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=600",
      alt: "Produtos cosméticos profissionais",
      aspectRatio: "aspect-[2/3]"
    },
    {
      src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400",
      alt: "Sessão de drenagem linfática relaxante",
      aspectRatio: "aspect-square"
    },
    {
      src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500",
      alt: "Equipamento de radiofrequência moderno",
      aspectRatio: "aspect-[4/5]"
    },
    {
      src: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=450",
      alt: "Cliente relaxando durante hidratação facial",
      aspectRatio: "aspect-[4/5]"
    }
  ];

  const socialLinks = [
    { 
      icon: InstagramIcon, 
      url: "#", 
      bg: "bg-gradient-to-br from-pink-500 to-purple-600",
      name: "Instagram"
    },
    { 
      icon: FacebookIcon, 
      url: "#", 
      bg: "bg-blue-600",
      name: "Facebook"
    },
    { 
      icon: TikTokIcon, 
      url: "#", 
      bg: "bg-black",
      name: "TikTok"
    }
  ];

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="galeria" className="py-20 bg-gradient-to-br from-neutral-soft to-secondary-soft">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12">
        {/* Título da seção */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nossa <span className="text-primary">Galeria</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos e resultados alcançados
          </p>
        </div>

        {/* Grid responsivo de imagens */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group cursor-pointer relative overflow-hidden rounded-2xl"
              onClick={() => openModal(image.src)}
            >
              {/* SUBSTITUIR: Imagens reais dos trabalhos da Hadassa */}
              <img 
                src={image.src} 
                alt={image.alt}
                className={`w-full ${image.aspectRatio} object-cover group-hover:scale-110 transition-transform duration-300`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <Expand className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-6 w-6" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6 text-sm sm:text-base">Quer ver mais resultados? Siga nossas redes sociais!</p>
          <div className="flex justify-center space-x-3 sm:space-x-4">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="lg"
                className={`${social.bg} text-white p-3 sm:p-4 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                onClick={() => window.open(social.url, '_blank')}
                aria-label={`Seguir no ${social.name}`}
              >
                <social.icon size={18} />
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de visualização */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="max-w-4xl max-h-full relative">
            <img 
              src={selectedImage} 
              alt="Visualização ampliada"
              className="max-w-full max-h-full object-contain rounded-2xl"
            />
            <Button
              variant="ghost"
              size="lg"
              className="absolute top-4 right-4 bg-white text-gray-800 rounded-full hover:bg-gray-100 transition-colors"
              onClick={closeModal}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
