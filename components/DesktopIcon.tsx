import React from 'react';

interface DesktopIconProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  onClick: () => void;
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({ icon: Icon, label, onClick }) => {
  return (
    <div
      className="flex flex-col items-center justify-center text-center p-2 rounded hover:bg-amber-500/20 focus:bg-amber-500/30 cursor-pointer w-32 h-32 transition-colors duration-150"
      onClick={onClick}
      tabIndex={0}
    >
      <Icon className="w-16 h-16 text-gray-100 drop-shadow-lg" />
      <span className="text-gray-200 text-base mt-2 select-none drop-shadow-md">{label}</span>
    </div>
  );
};