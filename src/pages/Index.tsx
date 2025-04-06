
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import KeyPoints from "@/components/KeyPoints";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <KeyPoints />
      </main>
      <footer className="py-12 bg-slate-100 text-center">
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
