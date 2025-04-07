
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const CalendarSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 font-display">
            {t("calendar.title")}
          </h2>
          <p className="text-slate-600">
            {t("calendar.description")}
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
