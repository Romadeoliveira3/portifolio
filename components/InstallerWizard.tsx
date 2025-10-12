import React, { useState, useMemo } from 'react';
import { DESKTOP_ICONS_CONFIG } from '../data/config';
import { Language, WindowType } from '../types';
import { AboutIcon } from './icons/Icons';
import { useTranslations } from '../context/LanguageContext';

interface InstallerWizardProps {
  onFinish: () => void;
  isMobile: boolean;
}

export const InstallerWizard: React.FC<InstallerWizardProps> = ({ onFinish, isMobile }) => {
    const { language, translations, toggleLanguage } = useTranslations();
    const [step, setStep] = useState(0);
    
    const steps = useMemo(() => {
        const findIcon = (id: WindowType | 'GITHUB' | 'LINKEDIN' | 'LATTES') => {
            return DESKTOP_ICONS_CONFIG.find(icon => icon.id === id)!.icon;
        };

        const verb = isMobile ? (language === Language.PT ? 'Toque' : 'Tap') : (language === Language.PT ? 'Clique' : 'Click');

        return [
            {
                title: translations.ui.installer.welcome_title,
                description: translations.ui.installer.welcome_description,
                Icon: AboutIcon,
            },
            {
                title: translations.desktop_icons.ABOUT,
                description: translations.ui.installer.about_description(verb),
                Icon: findIcon(WindowType.ABOUT),
            },
            {
                title: translations.desktop_icons.PROJECTS,
                description: translations.ui.installer.projects_description,
                Icon: findIcon(WindowType.PROJECTS),
            },
            {
                title: translations.ui.installer.experience_education_title(translations.desktop_icons.EXPERIENCE, translations.desktop_icons.EDUCATION),
                description: translations.ui.installer.experience_education_description,
                Icon: findIcon(WindowType.EXPERIENCE),
            },
            {
                title: translations.ui.installer.links_title,
                description: translations.ui.installer.links_description,
                Icon: findIcon('GITHUB'),
            },
            {
                title: translations.desktop_icons.CONTACT,
                description: translations.ui.installer.contact_description(verb),
                Icon: findIcon(WindowType.CONTACT),
            },
            {
                title: translations.ui.installer.all_set_title,
                description: translations.ui.installer.all_set_description(verb),
                Icon: null,
            }
        ];
    }, [language, isMobile, translations]);

    const currentStep = steps[step];
    const { Icon } = currentStep;
    
    const progress = useMemo(() => ((step + 1) / steps.length) * 100, [step, steps.length]);

    const handleNext = () => {
        if (step < steps.length - 1) {
            setStep(s => s + 1);
        } else {
            onFinish();
        }
    };

    const handleBack = () => {
        if (step > 0) {
            setStep(s => s - 1);
        }
    };

    const isLastStep = step === steps.length - 1;
    const langSwitchLabel = language === Language.PT ? 'Mudar para Inglês' : 'Switch to Portuguese';
    const langSwitchText = language === Language.PT ? 'English' : 'Português';

    const mobileLayout = (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex flex-col p-4 animate-fade-in text-white text-center">
            <header className="w-full flex justify-between items-center flex-shrink-0">
                <button
                    onClick={toggleLanguage}
                    className="px-4 py-2 text-sm font-semibold rounded-lg bg-amber-900/70 hover:bg-amber-800/70 transition-colors"
                    aria-label={langSwitchLabel}
                >
                    {langSwitchText}
                </button>
                <button onClick={onFinish} className="text-gray-400 text-3xl hover:text-white" aria-label="Close">
                    &times;
                </button>
            </header>
            <main className="flex-grow flex flex-col items-center justify-center gap-6 px-4 overflow-hidden">
                {Icon && (
                    <div className="flex-shrink-0">
                        <Icon className="w-24 h-24 text-gray-100 drop-shadow-lg" />
                    </div>
                )}
                <div>
                    <h2 className="text-2xl font-semibold mb-3">{currentStep.title}</h2>
                    <p className="text-gray-300 leading-relaxed">{currentStep.description}</p>
                </div>
            </main>
            <footer className="w-full flex flex-col items-center gap-4 pb-4 flex-shrink-0">
                <div className="w-full max-w-xs px-4">
                  <div className="bg-gray-700 rounded-full h-1.5 w-full">
                    <div 
                        className="bg-amber-500 h-1.5 rounded-full transition-all duration-500 ease-out" 
                        style={{ width: `${progress}%` }}
                        aria-valuenow={progress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        role="progressbar"
                    ></div>
                  </div>
                </div>
                <div className="flex gap-2">
                    {steps.map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                step === index ? 'bg-amber-500 scale-125' : 'bg-gray-600'
                            }`}
                        />
                    ))}
                </div>
                <button
                    onClick={handleNext}
                    className="w-full max-w-xs px-4 py-3 text-base font-semibold rounded-lg bg-amber-700 hover:bg-amber-600 transition-colors"
                >
                    {isLastStep ? translations.ui.installer.start_exploring : translations.ui.installer.next}
                </button>
            </footer>
        </div>
    );

    const desktopLayout = (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in">
            <div className="w-full max-w-lg bg-gray-900/95 text-white rounded-lg shadow-2xl border border-amber-600/50 flex flex-col overflow-hidden">
                <header className="flex items-center justify-between p-4 border-b border-amber-600/50">
                    <h1 className="text-lg font-bold text-amber-400">
                        {translations.ui.installer.setup_guide}
                    </h1>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="px-3 py-1 text-sm font-semibold rounded bg-gray-700 hover:bg-gray-600 transition-colors"
                            aria-label={langSwitchLabel}
                        >
                            {language === Language.PT ? 'EN' : 'PT'}
                        </button>
                        <button onClick={onFinish} className="text-gray-400 text-xl hover:text-white" aria-label="Close">
                            &times;
                        </button>
                    </div>
                </header>

                <main className="p-6 sm:p-8 flex-grow flex flex-col sm:flex-row items-center text-center sm:text-left gap-6">
                    {Icon && (
                        <div className="flex-shrink-0">
                            <Icon className="w-24 h-24 text-gray-100 drop-shadow-lg" />
                        </div>
                    )}
                    <div className="flex-grow">
                        <h2 className="text-xl font-semibold mb-2">{currentStep.title}</h2>
                        <p className="text-gray-300 leading-relaxed">{currentStep.description}</p>
                    </div>
                </main>

                <footer className="bg-black/50 p-4 flex justify-between items-center gap-4">
                    <div className="flex-grow">
                        <div className="bg-gray-700 rounded-full h-2 w-full" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
                            <div
                                className="bg-amber-600 h-2 rounded-full transition-all duration-500 ease-out"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                        <p className="text-xs text-gray-400 mt-1.5 text-right pr-1">
                            {translations.ui.installer.progress}: {Math.round(progress)}%
                        </p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <button 
                          onClick={handleBack}
                          disabled={step === 0}
                          className="px-4 py-2 text-sm font-semibold rounded bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                          {translations.ui.installer.back}
                      </button>
                      <button 
                          onClick={handleNext}
                          className="px-4 py-2 text-sm font-semibold rounded bg-amber-700 hover:bg-amber-600 transition-colors"
                      >
                          {isLastStep ? translations.ui.installer.finish : translations.ui.installer.next}
                      </button>
                    </div>
                </footer>
            </div>
        </div>
    );
    
    return (
      <>
        {isMobile ? mobileLayout : desktopLayout}
        <style>{`
            @keyframes fade-in {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            .animate-fade-in {
              animation: fade-in 0.3s ease-out forwards;
            }
        `}</style>
      </>
    );
};