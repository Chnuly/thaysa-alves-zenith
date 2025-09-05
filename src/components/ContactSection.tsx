import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Clock, MapPin, Phone } from "lucide-react";
import thaysaPortrait from "@/assets/thaysa-portrait2.jpg";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estou aqui para ajudar você a encontrar o equilíbrio emocional que merece. 
            Entre em contato e vamos iniciar essa jornada juntas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">WhatsApp</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  A forma mais rápida de entrar em contato comigo e agendar sua consulta.
                </p>
                <Button
                  asChild
                  className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all"
                >
                  <a
                    href="https://wa.me/5581991024815"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Conversar no WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Instagram className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Instagram</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Acompanhe dicas de saúde mental e conteúdos sobre psicologia.
                </p>
                <Button
                  variant="outline"
                  asChild
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a
                    href="https://www.instagram.com/psi.thaysaalves"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Instagram className="w-5 h-5" />
                    @psi.thaysaalves
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-primary/20">
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Horários</h3>
                  <p className="text-sm text-muted-foreground">
                    Seg à Sex<br />
                    8h às 18h
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Atendimento</h3>
                  <p className="text-sm text-muted-foreground">
                    Online<br />
                    Todo o Brasil
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={thaysaPortrait}
                alt="Thaysa Alves - Psicóloga"
                className="w-full max-w-sm rounded-2xl shadow-soft"
              />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-primary rounded-2xl opacity-80"></div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/20">
          <h3 className="text-2xl font-bold mb-4 text-primary">
            Primeira Consulta
          </h3>
          <p className="text-muted-foreground mb-4">
            Na primeira consulta, vamos nos conhecer melhor e entender como posso ajudar você. 
            É um espaço seguro e acolhedor para compartilhar suas necessidades.
          </p>
          <p className="text-sm text-muted-foreground">
            <strong>Importante:</strong> Não aceitamos planos de saúde | Atendimento apenas a partir dos 18 anos
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;