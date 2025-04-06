
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
      <footer className="py-8 bg-gray-100 text-center text-gray-600 text-sm">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Maverick AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
