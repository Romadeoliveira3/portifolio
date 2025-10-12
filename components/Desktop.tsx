import React from 'react';
import { DesktopIcon } from './DesktopIcon';
import { Window } from './Window';
import { AboutMeContent, ProjectsContent, ContactContent, ExperienceContent, EducationContent } from './WindowContent';
import type { DesktopIconType, WindowInstance, WindowType } from '../types';
import { useTranslations } from '../context/LanguageContext';

interface DesktopProps {
  icons: DesktopIconType[];
  openWindow: (type: WindowType) => void;
  windows: WindowInstance[];
  closeWindow: (id: string) => void;
  focusWindow: (id:string) => void;
  minimizeWindow: (id: string) => void;
  isMobile: boolean;
}

export const Desktop: React.FC<DesktopProps> = ({ icons, openWindow, windows, closeWindow, focusWindow, minimizeWindow, isMobile }) => {
  const { translations } = useTranslations();

  const handleClick = (icon: DesktopIconType) => {
    if (icon.type === 'window') {
      openWindow(icon.id as WindowType);
    } else if (icon.type === 'link' && icon.url) {
      window.open(icon.url, '_blank', 'noopener,noreferrer');
    }
  };

  const renderWindowContent = (type: WindowType) => {
    switch (type) {
      case 'ABOUT':
        return <AboutMeContent content={translations.windows.ABOUT.content} />;
      case 'PROJECTS':
        return <ProjectsContent content={translations.windows.PROJECTS} projects={translations.projects} ui={translations.ui} />;
      case 'CONTACT':
        return <ContactContent content={translations.windows.CONTACT.content} />;
      case 'EXPERIENCE':
        return <ExperienceContent content={translations.windows.EXPERIENCE} experience={translations.experience} />;
      case 'EDUCATION':
        return <EducationContent content={translations.windows.EDUCATION} education={translations.education} />;
      default:
        return null;
    }
  };

  return (
    <main className="w-full h-full p-4">
      <div className="grid grid-cols-3 gap-y-4 justify-items-center md:flex md:flex-col md:flex-wrap md:h-full md:content-start md:justify-start md:gap-0">
        {icons.map(icon => (
          <DesktopIcon
            key={icon.id}
            icon={icon.icon}
            label={icon.label}
            onClick={() => handleClick(icon)}
          />
        ))}
      </div>
      {windows.filter(w => !w.isMinimized).map(win => (
        <Window
          key={win.id}
          id={win.id}
          title={win.title}
          initialPosition={win.position}
          initialSize={win.size}
          zIndex={win.zIndex}
          onClose={() => closeWindow(win.id)}
          onFocus={() => focusWindow(win.id)}
          onMinimize={() => minimizeWindow(win.id)}
          isMobile={isMobile}
        >
          {renderWindowContent(win.type)}
        </Window>
      ))}
    </main>
  );
};