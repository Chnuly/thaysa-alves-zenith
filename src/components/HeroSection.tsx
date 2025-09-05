import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            VOCÊ PODE FICAR MAIS EM PAZ{" "}
            <span className="text-primary">CONSIGO</span>, AINDA QUE EM MEIO AOS{" "}
            <span className="text-primary">PROBLEMAS DO DIA A DIA</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            Lidar melhor com a <strong className="text-primary">autocobrança, sobrecarga e excesso de autocrítica</strong> que geram ansiedade e humor rebaixado, conquistando uma vida com mais tranquilidade tanto pessoal quanto profissional.
          </p>
          
          <div className="space-y-3 mb-8">
            <p className="flex items-center text-muted-foreground">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Gerenciar suas emoções através da terapia
            </p>
            <p className="flex items-center text-muted-foreground">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              Agendar uma avaliação inicial
            </p>
          </div>
          
          <Button
            size="lg"
            asChild
            className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
          >
            <a
              href="https://wa.me/5581991024815"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              AGENDAR AVALIAÇÃO ON-LINE AGORA
            </a>
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            <strong>NÃO ACEITAMOS PLANOS DE SAÚDE</strong> | Atendimento apenas dos 18 anos
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;