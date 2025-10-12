import React, { useState, useCallback, useEffect, useMemo } from "react";
import { Desktop } from "./components/Desktop";
import { Taskbar } from "./components/Taskbar";
import { StartMenu } from "./components/StartMenu";
import { InstallerWizard } from "./components/InstallerWizard";
import { DESKTOP_ICONS_CONFIG } from "./data/config";
import { WindowType, WindowInstance } from "./types";
import { useTranslations } from "./context/LanguageContext";

const App: React.FC = () => {
  const { translations } = useTranslations();
  const [windows, setWindows] = useState<WindowInstance[]>([]);
  const [nextZIndex, setNextZIndex] = useState(10);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showInstaller, setShowInstaller] = useState(true);

  const desktopIcons = useMemo(() => {
    return DESKTOP_ICONS_CONFIG.map((iconConfig) => ({
      ...iconConfig,
      label:
        translations.desktop_icons[
          iconConfig.id as keyof typeof translations.desktop_icons
        ],
    }));
  }, [translations]);

  const activeWindowId = useMemo(() => {
    const visibleWindows = windows.filter((w) => !w.isMinimized);
    if (visibleWindows.length === 0) return null;

    let topWindow = visibleWindows[0];
    for (let i = 1; i < visibleWindows.length; i++) {
      if (visibleWindows[i].zIndex > topWindow.zIndex) {
        topWindow = visibleWindows[i];
      }
    }
    return topWindow.id;
  }, [windows]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const focusWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, zIndex: nextZIndex, isMinimized: false } : w
      )
    );
    setNextZIndex((prev) => prev + 1);
  };

  const openWindow = useCallback(
    (type: WindowType) => {
      const existingWindow = windows.find((w) => w.type === type);

      if (existingWindow) {
        focusWindow(existingWindow.id);
        return;
      }

      const newId = `${type}-${Date.now()}`;
      const newWindow: WindowInstance = {
        id: newId,
        type: type,
        title: translations.windows[type].title,
        position: {
          x: 150 + windows.length * 20,
          y: 100 + windows.length * 20,
        },
        size: { width: 600, height: 400 },
        zIndex: nextZIndex,
        isMinimized: false,
      };
      setWindows((prev) => [...prev, newWindow]);
      setNextZIndex((prev) => prev + 1);
      setIsStartMenuOpen(false);
    },
    [windows, nextZIndex, translations]
  );

  const closeWindow = (id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const minimizeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((win) => (win.id === id ? { ...win, isMinimized: true } : win))
    );
  };

  const handleTaskbarClick = (id: string) => {
    const win = windows.find((w) => w.id === id);
    if (!win) return;

    if (win.isMinimized) {
      focusWindow(id);
    } else if (win.id === activeWindowId) {
      minimizeWindow(id);
    } else {
      focusWindow(id);
    }
  };

  const updateWindowTitle = useCallback((id: string, newTitle: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, title: newTitle } : w))
    );
  }, []);

  useEffect(() => {
    windows.forEach((win) => {
      const newTitle = translations.windows[win.type].title;
      if (win.title !== newTitle) {
        updateWindowTitle(win.id, newTitle);
      }
    });
  }, [translations, windows, updateWindowTitle]);

  const handleInstallerFinish = () => {
    setShowInstaller(false);
  };

  const isTaskbarVisible = !isMobile || windows.length === 0;

  return (
    <div className="w-screen h-screen bg-black bg-no-repeat bg-center bg-cover sm:bg-right sm:bg-[length:auto_110vh] bg-[url('ME-ROBOT.png')] font-sans overflow-hidden">
      {showInstaller && (
        <InstallerWizard onFinish={handleInstallerFinish} isMobile={isMobile} />
      )}
      <Desktop
        icons={desktopIcons}
        openWindow={openWindow}
        windows={windows}
        closeWindow={closeWindow}
        focusWindow={focusWindow}
        minimizeWindow={minimizeWindow}
        isMobile={isMobile}
      />
      {!isMobile && isStartMenuOpen && (
        <StartMenu
          icons={desktopIcons}
          onOpen={openWindow}
          onClose={() => setIsStartMenuOpen(false)}
        />
      )}
      {isTaskbarVisible && (
        <Taskbar
          onStartClick={() => setIsStartMenuOpen((prev) => !prev)}
          windows={windows}
          onWindowTabClick={handleTaskbarClick}
          activeWindowId={activeWindowId}
          isMobile={isMobile}
        />
      )}
    </div>
  );
};

export default App;
