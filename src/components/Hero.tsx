import React from "react";
import {CircleX} from "lucide-react";
import {Button} from "./ui/button";

const Hero = () => {
    const problemPoints = [
        "Uso AI Non Regolamentato",
        "Integrare l’AI è cruciale",
        "Garantire la Privacy dei Dati"
    ];

    const problemDescription = [
        "I dipendenti utilizzano spesso strumenti AI personali per migliorare la produttività, utilizzando applicazioni e fornendo dati non tracciati dall’azienda.  Questo uso non regolamentato dell'AI può compromettere sia l'integrità dei dati sia i protocolli aziendali, introducendo rischi che potrebbero essere evitati con soluzioni AI standardizzate e sicure.",
        "L'AI sta ridisegnando le industrie. La mancata adozione delle tecnologie AI mette le aziende in una posizione di significativo svantaggio, causando di rimanere irrimediabilmente in svantaggio rispetto ai concorrenti in termini di innovazione ed efficienza di mercato.",
        "Mantenere una rigorosa privacy dei dati è essenziale, soprattutto quando si gestiscono informazioni sensibili come dettagli personali, dati finanziari e informazioni aziendali proprietarie. Protezioni inadeguate possono risultare in violazioni dei dati. Proteggere questi dati non è solo una questione di conformità ma di sicurezza del futuro dell'azienda."
    ]

    return (
        <section id="about" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center space-y-10">
                {/* Headline Section */}
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-slate-900 font-display">
                        Maverick AI
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                        Crea il gemello artificiale della tua azienda
                    </p>
                </div>

                {/* Problem Points Section */}
                <div className="space-y-6 max-w-2xl">
                    {problemPoints.map((point, index) => (
                        <div key={index} className="flex items-start gap-3 text-left">
                            <CircleX className="h-6 w-6 text-purple-500 flex-shrink-0 mt-0.5"/>
                            <div>
                                <p className="text-slate-700 font-semibold">{point}</p>
                                <p className="text-slate-600">{problemDescription[index]}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action Buttons */
                }
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Button
                        size="lg"
                        className="bg-purple-600 hover:bg-purple-700 text-white transition-colors"
                        asChild
                    >
                        <a href="#contact">Prenota una demo</a>
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
    )
        ;
};

export default Hero;

