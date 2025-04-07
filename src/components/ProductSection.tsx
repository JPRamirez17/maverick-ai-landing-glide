
import React from "react";
import { Sparkles } from "lucide-react";

const ProductSection = () => {
  return (
    <section id="product" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Sparkles className="h-10 w-10 text-purple-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 font-display">
            Potenzia la Tua Azienda con il Suo Gemello AI
          </h2>
          <p className="text-lg text-slate-600">
            Maverick AI crea un’organizzazione più intelligente, dove l’AI lavora per le persone, le aiuta a collaborare meglio e può persino parlare al loro posto quando necessario.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="bg-slate-50 rounded-2xl h-80 flex items-center justify-center overflow-hidden">
            <img
              src="https://www.shutterstock.com/image-photo/3d-model-robotic-hand-digital-260nw-2420591499.jpg"
              alt="Robotic Hand AI Visualization"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-slate-900">Gemello AI aziendale?</h3>
              <p className="text-slate-600">
              Un’AI creata su misura per la tua azienda: conosce i tuoi processi, adotta il tuo stile comunicativo e si adatta al modo in cui lavori. È come avere un clone digitale del tuo team, sempre pronto ad agire.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-slate-900">Privacy?</h3>
              <p className="text-slate-600">
                I dati aziendali rimangono completamente sotto il tuo controllo, protetti da crittografia avanzata e accessi personalizzati. Solo tu decidi cosa l’AI può sapere, ricordare e condividere.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-slate-900">Compatibilità?</h3>
              <p className="text-slate-600">
              Nessuna rivoluzione, solo evoluzione. Il nostro sistema si integra perfettamente con gli strumenti che già usi — da Slack a Notion e molti altri. Continui a lavorare come sempre, ma con il potere dell’AI al tuo fianco.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
