
import React from "react";
import { Brain, User, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const KeyPoints = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Brain className="h-10 w-10 text-purple-600" />,
      title: t("features.items.brain.title"),
      description: t("features.items.brain.description")
    },
    {
      icon: <User className="h-10 w-10 text-purple-600" />,
      title: t("features.items.twin.title"),
      description: t("features.items.twin.description")
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-purple-600" />,
      title: t("features.items.communication.title"),
      description: t("features.items.communication.description")
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 font-display">
            {t("features.title")}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t("features.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

export default KeyPoints;
