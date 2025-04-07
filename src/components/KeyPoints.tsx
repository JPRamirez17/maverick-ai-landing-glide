
import React from "react";
import { Brain, User, MessageCircle } from "lucide-react";

const features = [
  {
    icon: <Brain className="h-10 w-10 text-purple-600" />,
    title: "🚀 Il Cervello AI della tua Azienda",
    description:
      "Creiamo un modello AI privato, addestrato sui tuoi documenti, processi, stile comunicativo e cultura aziendale. È come avere un’Intelligenza Artificiale personalizzata per la tua impresa — sicura, precisa, e perfettamente allineata con il tuo modo di lavorare."
  },
  {
    icon: <User className="h-10 w-10 text-purple-600" />,
    title: "👤 Un Gemello AI per Ogni Dipendente",
    description:
      "Ogni collaboratore ha il proprio gemello AI: un assistente intelligente che conosce i suoi compiti, le sue abitudini e il suo modo di comunicare. Automatizza attività ripetitive, aumenta la produttività e impara nel tempo."
  },
  {
    icon: <MessageCircle className="h-10 w-10 text-purple-600" />,
    title: "💬 Comunicazione",
    description:
      "Dipendenti e manager possono interagire direttamente con i gemelli AI degli altri: chiedere aggiornamenti, coordinare attività, o sapere su cosa stanno lavorando i colleghi. Il tuo gemello può rispondere anche quando non sei disponibile."
  }
];

const KeyPoints = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 font-display">
            Perchè scegliere Maverick AI
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Crea la tua vera e propria copia artificiale dell’organico aziendale grazie ad un sistema intelligente e collaborativo che migliora l’efficienza operativa e decisionale a ogni livello.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100"
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyPoints;
