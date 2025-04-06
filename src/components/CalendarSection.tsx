
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
            Schedule a Consultation
          </h2>
          <p className="text-slate-600">
            Connect with our AI specialists to discuss how Maverick AI can transform your business operations. 
            Book a personalized demo and consultation session.
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
