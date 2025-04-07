
import React from "react";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProductSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="product" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Sparkles className="h-10 w-10 text-purple-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 font-display">
            {t("product.title")}
          </h2>
          <p className="text-lg text-slate-600">
            {t("product.subtitle")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="bg-slate-50 rounded-2xl h-80 flex items-center justify-center overflow-hidden">
            <img
              src="https://images.squarespace-cdn.com/content/v1/580fd28d20099ec7189b72cf/6f9da8e6-9fed-4203-a5cf-0d12ece9fa8b/Aritificial-Intelligence-1024x419.jpg"
              alt="Robotic Hand AI Visualization"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-slate-900">{t("product.questions.what")}</h3>
              <p className="text-slate-600">
                {t("product.questions.whatAnswer")}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
