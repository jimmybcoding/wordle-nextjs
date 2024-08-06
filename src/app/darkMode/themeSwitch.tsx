"use client";

import { SunIcon } from '@heroicons/react/24/outline';
import { MoonIcon } from '@heroicons/react/24/solid';
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
 
  const {systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger= () => {
 
    const currentTheme = theme === "system" ? systemTheme : theme ;

    if(currentTheme ==="dark"){
      return (
        <SunIcon className="w-10 h-10 text-yellow-500 absolute top-2 right-2" role="button" onClick={() => 
          setTheme('light')} />
      )
    }

    else {
      return (
        <MoonIcon className="w-10 h-10 text-gray-900 absolute top-2 right-2" role="button" onClick={() => 
          setTheme('dark')} />
      )
    }
 };

  return (
    <>
    {renderThemeChanger()}
    </>
  );
};

export default ThemeSwitcher
