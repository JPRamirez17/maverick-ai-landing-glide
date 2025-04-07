
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import KeyPoints from "@/components/KeyPoints";
import CalendarSection from "@/components/CalendarSection";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProductSection />
        <KeyPoints />
        <CalendarSection />
      </main>
      <footer id="contacts" className="py-12 bg-slate-50 text-center">
        <div className="container mx-auto px-4">
          <p className="text-slate-600 text-sm">
            {t("footer.copyright")}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
