
import React from "react";
import { CircleX } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const problemPoints = [
    "Legacy systems drain resources and slow innovation",
    "Data silos prevent holistic business insights",
    "Manual processes create costly inefficiencies"
  ];

  return (
    <section id="about" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left column with headline */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-slate-900 font-display">
              Redefining Intelligence For The Modern Enterprise
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Maverick AI delivers cutting-edge artificial intelligence solutions.
            </p>
          </div>

          {/* Right column with problem bullet points */}
          <div className="space-y-6">
            {problemPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <CircleX className="h-6 w-6 text-purple-500 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row justify-start items-center gap-4 mt-10">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white transition-colors"
            asChild
          >
            <a href="#contact">Get Started</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-slate-300 text-slate-700 hover:bg-slate-50"
            asChild
          >
            <a href="#product">Learn More</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
