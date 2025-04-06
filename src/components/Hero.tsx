
import React from "react";
import { CircleX } from "lucide-react";

const Hero = () => {
  const problemPoints = [
    "Legacy systems drain resources and slow innovation",
    "Data silos prevent holistic business insights",
    "Manual processes create costly inefficiencies"
  ];

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left column with headline */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-gray-900">
              Redefining Intelligence For The Modern Enterprise
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Maverick AI delivers cutting-edge artificial intelligence solutions.
            </p>
          </div>

          {/* Right column with problem bullet points */}
          <div className="space-y-6">
            {problemPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <CircleX className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row justify-start items-center gap-4 mt-10">
          <a 
            href="#contact" 
            className="px-8 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors"
          >
            Get Started
          </a>
          <a 
            href="#about" 
            className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
          >
            Learn More
          </a>
        </div>
        
        {/* Company description section */}
        <div className="mt-24 border-t border-gray-100 pt-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Transforming Business Through AI</h2>
          <p className="text-gray-600 max-w-3xl leading-relaxed">
            Maverick AI helps enterprises harness the power of artificial intelligence to automate workflows, 
            unlock insights from data, and create intelligent applications. Our solutions seamlessly integrate 
            with existing systems, delivering immediate value while building a foundation for future innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
