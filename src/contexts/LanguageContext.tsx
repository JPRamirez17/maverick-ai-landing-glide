
import React, { createContext, useState, useContext, ReactNode } from 'react';
import itTranslations from '../translations/it.json';
import enTranslations from '../translations/en.json';
import frTranslations from '../translations/fr.json';
import esTranslations from '../translations/es.json';

type Language = 'it' | 'en' | 'fr' | 'es';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const translations = {
  it: itTranslations,
  en: enTranslations,
  fr: frTranslations,
  es: esTranslations,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('it');

  const t = (key: string): string => {
    const keys = key.split('.');
    let result: any = translations[language];
    
    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    // If result is a string with {year}, replace it with the current year
    if (typeof result === 'string' && result.includes('{year}')) {
      return result.replace('{year}', new Date().getFullYear().toString());
    }
    
    return typeof result === 'string' ? result : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
