import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';
import { Language } from '../types';
// FIX: Corrected import paths for translation modules to avoid resolving to empty files.
import { en } from '../locales/en/index';
import { pt } from '../locales/pt/index';
import type { Translations } from '../locales/pt/index';

interface LanguageContextType {
    language: Language;
    translations: Translations;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [language, setLanguage] = useState<Language>(Language.PT);

    const toggleLanguage = useCallback(() => {
        setLanguage(prev => (prev === Language.EN ? Language.PT : Language.EN));
    }, []);

    const translations = useMemo(() => (language === Language.EN ? en : pt), [language]);

    const value = { language, translations, toggleLanguage };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useTranslations = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useTranslations must be used within a LanguageProvider');
    }
    return context;
};
