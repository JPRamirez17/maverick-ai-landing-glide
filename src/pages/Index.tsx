
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import CalendarSection from "@/components/CalendarSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProductSection />
        <FeaturesGrid />
        <CalendarSection />
      </main>
      <footer className="py-12 bg-slate-50 text-center">
        <div className="container mx-auto px-4">
          <p className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} Maverick AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
