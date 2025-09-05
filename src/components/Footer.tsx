import { Heart, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Thaysa Alves</h3>
            <p className="text-primary-foreground/80">
              Psicóloga Clínica & Perinatal
            </p>
            <p className="text-sm text-primary-foreground/60 mt-2">
              CRP: [Número do registro]
            </p>
          </div>
          
          {/* Contact Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Entre em Contato</h4>
            <div className="flex justify-center gap-4">
              <a
                href="https://wa.me/5581991024815"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/psi.thaysaalves"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </div>
          </div>
          
          {/* Important Info */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-2">Informações Importantes</h4>
            <p className="text-sm text-primary-foreground/80">
              Não aceitamos planos de saúde
            </p>
            <p className="text-sm text-primary-foreground/80">
              Atendimento apenas dos 18 anos
            </p>
            <p className="text-sm text-primary-foreground/80 mt-2">
              Horários: Seg à Sex, 8h às 18h
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm flex items-center justify-center gap-2">
            © 2024 Thaysa Alves. Feito com <Heart className="w-4 h-4 text-red-400" /> para sua saúde mental.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;