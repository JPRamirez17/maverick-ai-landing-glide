
import React from "react";
import { Brain, LineChart, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Brain className="h-10 w-10 text-blue-600" />,
    title: "Advanced AI Models",
    description:
      "Our proprietary deep learning algorithms deliver unparalleled accuracy and performance across diverse business applications."
  },
  {
    icon: <LineChart className="h-10 w-10 text-blue-600" />,
    title: "Actionable Insights",
    description:
      "Transform raw data into strategic business intelligence with our analytics platform that identifies patterns humans might miss."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
    title: "Enterprise Security",
    description:
      "Bank-level encryption and comprehensive security protocols ensure your data and AI implementations remain protected."
  }
];

const KeyPoints = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose Maverick AI</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our solutions combine cutting-edge technology with practical business applications 
            to deliver measurable results for organizations of all sizes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyPoints;
