import React, { useState, useEffect } from 'react';
import { Language, WindowInstance } from '../types';
import { useTranslations } from '../context/LanguageContext';

interface TaskbarProps {
  onStartClick: () => void;
  isMobile: boolean;
  windows: WindowInstance[];
  onWindowTabClick: (id: string) => void;
  activeWindowId: string | null;
}

export const Taskbar: React.FC<TaskbarProps> = ({ onStartClick, isMobile, windows, onWindowTabClick, activeWindowId }) => {
  const { language, translations, toggleLanguage } = useTranslations();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);
  
  const formattedTime = time.toLocaleTimeString(language === Language.EN ? 'en-US' : 'pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <footer className="absolute bottom-0 left-0 right-0 h-12 bg-gray-900/90 backdrop-blur-sm text-white flex items-center justify-between px-2 z-50 shadow-2xl border-t border-amber-600/50">
      {!isMobile && (
        <button 
          onClick={onStartClick}
          className="px-4 py-2 h-full font-bold text-base bg-gray-900 hover:bg-amber-800/60 rounded-sm transition-colors flex items-center gap-2 flex-shrink-0"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
          {translations.ui.start}
        </button>
      )}
      
      {!isMobile && (
          <div className="flex-grow flex items-center h-full gap-1 px-2 overflow-x-auto">
              {windows.map(win => (
                  <button
                      key={win.id}
                      onClick={() => onWindowTabClick(win.id)}
                      className={`px-4 py-1 h-5/6 max-w-40 text-sm text-left truncate rounded-t-md transition-colors flex items-center
                        ${win.id === activeWindowId ? 'bg-amber-700/80' : 'bg-gray-800/60 hover:bg-gray-700/80'}
                        ${win.isMinimized ? 'border-b-2 border-amber-400' : ''}
                      `}
                      title={win.title}
                  >
                      {win.title}
                  </button>
              ))}
          </div>
      )}

      {isMobile && <div className="flex-grow"></div>}
      
      <div className="flex items-center h-full flex-shrink-0">
        <button onClick={toggleLanguage} className="h-full px-3 text-sm font-semibold bg-gray-900 hover:bg-amber-800/60 transition-colors">
          {language.toUpperCase()}
        </button>
        <div className="h-full px-3 bg-black/50 flex items-center text-sm">
          <span>{formattedTime}</span>
        </div>
      </div>
    </footer>
  );
};