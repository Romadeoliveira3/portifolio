import React, { useState, useRef, useCallback, useEffect } from 'react';

interface WindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
  initialPosition: { x: number; y: number };
  initialSize: { width: number; height: number };
  zIndex: number;
  onClose: () => void;
  onFocus: () => void;
  onMinimize: () => void;
  isMobile: boolean;
}

export const Window: React.FC<WindowProps> = ({
  title,
  children,
  initialPosition,
  initialSize,
  zIndex,
  onClose,
  onFocus,
  onMinimize,
  isMobile,
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(initialSize);
  const [isMaximized, setIsMaximized] = useState(false);
  const [preMaximizeState, setPreMaximizeState] = useState({ position, size });

  const dragRef = useRef({ isDragging: false, offset: { x: 0, y: 0 } });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    onFocus();
    if ((e.target as HTMLElement).closest('.window-control')) return;
    
    dragRef.current = {
      isDragging: true,
      offset: {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      },
    };
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isMobile) return;
    if (dragRef.current.isDragging && !isMaximized) {
      setPosition({
        x: e.clientX - dragRef.current.offset.x,
        y: e.clientY - dragRef.current.offset.y,
      });
    }
  }, [isMaximized, isMobile]);

  const handleMouseUp = useCallback(() => {
    dragRef.current.isDragging = false;
  }, []);
  
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);
  
  const toggleMaximize = () => {
      if (isMobile) return;
      if (isMaximized) {
          setPosition(preMaximizeState.position);
          setSize(preMaximizeState.size);
          setIsMaximized(false);
      } else {
          setPreMaximizeState({ position, size });
          setPosition({ x: 0, y: 0 });
          const taskbarHeight = 48;
          setSize({ width: window.innerWidth, height: window.innerHeight - taskbarHeight });
          setIsMaximized(true);
      }
  };

  if (isMobile) {
    return (
      <div
        className="fixed inset-0 flex flex-col bg-gray-200 dark:bg-gray-900"
        style={{ zIndex: 100 }}
      >
        <header
          className="flex items-center justify-between h-12 bg-gray-300 dark:bg-black/80 text-black dark:text-white px-2 select-none flex-shrink-0"
        >
          <span className="text-base font-bold truncate text-amber-400">{title}</span>
          <div className="flex items-center space-x-2">
            <button 
              onClick={onClose} 
              className="window-control w-8 h-8 rounded-full bg-purple-700 hover:bg-purple-600 transition-colors flex items-center justify-center text-white font-bold" 
              title="Close"
              aria-label="Close window"
            >
              &times;
            </button>
          </div>
        </header>
        <div className="flex-grow p-4 overflow-auto bg-white dark:bg-gray-800 text-black dark:text-gray-200">
          {children}
        </div>
      </div>
    );
  }

  const windowStyle: React.CSSProperties = isMaximized ? 
    { top: 0, left: 0, width: '100vw', height: `calc(100vh - 48px)`, zIndex, transform: 'none' } :
    { top: position.y, left: position.x, width: size.width, height: size.height, zIndex, transform: 'none' };

  return (
    <div
      ref={windowRef}
      className={`absolute flex flex-col bg-gray-200 dark:bg-gray-900 rounded-lg shadow-2xl border border-amber-600/40 resize overflow-hidden ${isMaximized ? 'rounded-none' : ''}`}
      style={windowStyle}
      onMouseDown={onFocus}
    >
      <header
        className="flex items-center justify-between h-10 bg-gray-300 dark:bg-black/70 text-black dark:text-white px-2 cursor-move select-none"
        onMouseDown={handleMouseDown}
        onDoubleClick={toggleMaximize}
      >
        <span className="text-base font-bold truncate text-amber-400">{title}</span>
        <div className="flex items-center space-x-2">
          <button onClick={onMinimize} className="window-control w-5 h-5 rounded-full bg-green-600 hover:bg-green-500 transition-colors" title="Minimize" aria-label="Minimize window"></button>
          <button onClick={toggleMaximize} className="window-control w-5 h-5 rounded-full bg-amber-500 hover:bg-amber-400 transition-colors" title="Maximize" aria-label="Maximize window"></button>
          <button onClick={onClose} className="window-control w-5 h-5 rounded-full bg-purple-700 hover:bg-purple-600 transition-colors" title="Close" aria-label="Close window"></button>
        </div>
      </header>
      <div className="flex-grow p-4 overflow-auto bg-white dark:bg-gray-800 text-black dark:text-gray-200">
        {children}
      </div>
    </div>
  );
};