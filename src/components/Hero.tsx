
import React from "react";
import { CircleX } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const problemPoints = [
    "L’uso disordinato di AI personali mette a rischio sicurezza e coerenza",
    "Dati frammentati e non condivisi rallentano il lavoro",
    "Nessun standard sull’uso dell’intelligenza artificiale"
  ];

  return (
    <section id="about" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center space-y-10">
        {/* Headline Section */}
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-slate-900 font-display">
            Maverick AI 
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Reinventa la tua azienda con un gemello AI
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white transition-colors"
            asChild
          >
            <a href="#contact">Prenota una consulenza</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-slate-300 text-slate-700 hover:bg-slate-50"
            asChild
          >
            <a href="#product">Scopri di più</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

