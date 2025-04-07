
import React from "react";
import { Sparkles } from "lucide-react";

const ProductSection = () => {
  return (
    <section id="product" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Sparkles className="h-10 w-10 text-purple-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 font-display">
            AI-Powered Solutions for Every Business Challenge
          </h2>
          <p className="text-lg text-slate-600">
            Our platform combines advanced machine learning, natural language processing, 
            and computer vision technologies to create tailored solutions for your specific 
            business needs. From automated data analysis to predictive forecasting and intelligent 
            process automation, Maverick AI transforms how you operate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="bg-slate-50 rounded-2xl h-80 flex items-center justify-center overflow-hidden">
            <img
              src="https://www.shutterstock.com/image-photo/3d-model-robotic-hand-digital-260nw-2420591499.jpg"
              alt="Robotic Hand AI Visualization"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-slate-900">Enterprise-Grade Platform</h3>
              <p className="text-slate-600">
                Built for scale, security, and reliability, our platform powers
                AI applications across the largest enterprises with uncompromising performance.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-slate-900">Customizable Solutions</h3>
              <p className="text-slate-600">
                Every business is unique. Our AI models adapt to your specific industry,
                processes, and goals, delivering precision results where they matter most.
              </p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-slate-900">Future-Ready Technology</h3>
              <p className="text-slate-600">
                Stay ahead with continuously evolving AI capabilities that incorporate the
                latest breakthroughs in machine learning and artificial intelligence research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
