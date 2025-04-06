
import React from "react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-gray-900">
            Redefining Intelligence For The Modern Enterprise
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Maverick AI delivers cutting-edge artificial intelligence solutions that transform 
            how businesses operate, innovate, and grow in today's digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
