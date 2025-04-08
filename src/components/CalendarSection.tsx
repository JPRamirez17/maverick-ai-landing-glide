
import React from "react";
import { Calendar } from "./ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { CalendarIcon } from "lucide-react";

const CalendarSection = () => {
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 font-display">
            Prenota una demo
          </h2>
          <p className="text-slate-600">
            Non è solo intelligenza artificiale. È la tua AI.
          </p>
          <p className="text-slate-600">
            Costruita per la tua azienda. Addestrata sui tuoi dati. Con i tuoi dipendenti.
          </p>
          <p className="text-slate-600">
            Inizia oggi a costruire la tua AI Twin Company e porta il tuo team nel futuro del lavoro.
          </p>
        </div>

        <iframe 
          src="https://cal.com/maverickai/30min" 
            className="w-full h-[600px] border rounded-xl"
            frameBorder="0"
            />
      </div>
    </section>
  );
};

export default CalendarSection;
