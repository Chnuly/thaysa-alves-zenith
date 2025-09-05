import { Card, CardContent } from "@/components/ui/card";
import { Heart, Brain, Users } from "lucide-react";
import thaysaPortrait from "@/assets/thaysa-portrait1.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src={thaysaPortrait}
                alt="Thaysa Alves - Psicóloga Clínica & Perinatal"
                className="w-full max-w-md mx-auto rounded-2xl shadow-soft"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-primary rounded-2xl opacity-80"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sobre <span className="text-primary">Thaysa Alves</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Psicóloga Clínica e Perinatal, especialista em ajudar pessoas a desenvolverem 
              ferramentas emocionais para uma vida mais equilibrada e saudável. Com uma 
              abordagem humanizada e acolhedora, trabalho com foco no bem-estar mental e 
              na qualidade de vida dos meus pacientes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center border-primary/20 hover:shadow-soft transition-shadow">
                <CardContent className="pt-6">
                  <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Psicologia Clínica</h3>
                  <p className="text-sm text-muted-foreground">
                    Atendimento individual para ansiedade, depressão e questões emocionais
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-primary/20 hover:shadow-soft transition-shadow">
                <CardContent className="pt-6">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Psicologia Perinatal</h3>
                  <p className="text-sm text-muted-foreground">
                    Acompanhamento durante gravidez, parto e pós-parto
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-primary/20 hover:shadow-soft transition-shadow">
                <CardContent className="pt-6">
                  <Brain className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Terapia Online</h3>
                  <p className="text-sm text-muted-foreground">
                    Atendimento seguro e confortável no ambiente virtual
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;