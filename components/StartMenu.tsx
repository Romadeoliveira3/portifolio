import React, { useEffect, useRef } from 'react';
import { WindowType, DesktopIconType } from '../types';

interface StartMenuProps {
  icons: DesktopIconType[];
  onOpen: (type: WindowType) => void;
  onClose: () => void;
}

export const StartMenu: React.FC<StartMenuProps> = ({ icons, onOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);
  
  const handleItemClick = (item: DesktopIconType) => {
     if (item.type === 'window') {
      onOpen(item.id as WindowType);
    } else if (item.type === 'link' && item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
      onClose();
    }
  }

  return (
    <div ref={menuRef} className="absolute bottom-12 left-0 w-72 bg-gray-950/95 backdrop-blur-md text-white rounded-tr-lg rounded-br-lg shadow-2xl z-40 border border-amber-600/50 animate-slide-up">
      <div className="p-4 border-b border-amber-600/50">
        <h2 className="font-bold text-xl text-amber-400">RomaOS</h2>
        <p className="text-sm text-gray-400">Portfolio Experience</p>
      </div>
      <ul>
        {icons.map(item => (
          <li key={item.id}>
            <button
              onClick={() => handleItemClick(item)}
              className="w-full text-left flex items-center gap-3 px-4 py-3 hover:bg-amber-800/50 transition-colors"
            >
              <item.icon className="w-6 h-6" />
              <span>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
      <style>{`
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};