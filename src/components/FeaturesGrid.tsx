
import React from "react";
import { Brain, LineChart, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    icon: <Brain className="h-10 w-10 text-purple-600" />,
    title: "Advanced AI Models",
    description:
      "Our proprietary deep learning algorithms deliver unparalleled accuracy and performance across diverse business applications."
  },
  {
    icon: <LineChart className="h-10 w-10 text-purple-600" />,
    title: "Actionable Insights",
    description:
      "Transform raw data into strategic business intelligence with our analytics platform that identifies patterns humans might miss."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-purple-600" />,
    title: "Enterprise Security",
    description:
      "Bank-level encryption and comprehensive security protocols ensure your data and AI implementations remain protected."
  },
  {
    icon: <Zap className="h-10 w-10 text-purple-600" />,
    title: "Rapid Deployment",
    description:
      "Get from concept to production in weeks, not months, with our streamlined implementation methodology and integration frameworks."
  }
];

const FeaturesGrid = () => {
  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 font-display">
            Why Choose Maverick AI
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our solutions combine cutting-edge technology with practical business applications 
            to deliver measurable results for organizations of all sizes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100"
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
