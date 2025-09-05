import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Terapia Individual",
      description: "Atendimento personalizado para questões como ansiedade, depressão, autoestima e relacionamentos",
      benefits: [
        "Redução da ansiedade e estresse",
        "Melhora na autoestima e autoconfiança",
        "Desenvolvimento de habilidades emocionais",
        "Melhor qualidade nos relacionamentos"
      ]
    },
    {
      title: "Psicologia Perinatal",
      description: "Acompanhamento especializado durante a gestação, parto e puerpério",
      benefits: [
        "Preparação emocional para a maternidade",
        "Apoio durante mudanças hormonais",
        "Prevenção de depressão pós-parto",
        "Fortalecimento do vínculo mãe-bebê"
      ]
    },
    {
      title: "Terapia Online",
      description: "Atendimento psicológico seguro e eficaz através de plataformas digitais",
      benefits: [
        "Comodidade e praticidade",
        "Flexibilidade de horários",
        "Ambiente familiar e acolhedor",
        "Mesma eficácia da terapia presencial"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Como Posso <span className="text-primary">Ajudar Você</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos diferentes modalidades de atendimento psicológico, sempre com foco 
            no seu bem-estar e crescimento pessoal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full border-primary/20 hover:shadow-soft transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-primary text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4">
            Pronta para dar o primeiro passo?
          </h3>
          <p className="text-muted-foreground mb-6">
            Entre em contato comigo e vamos conversar sobre como posso ajudar você.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300"
          >
            <a
              href="https://wa.me/5581991024815"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar Consulta
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;