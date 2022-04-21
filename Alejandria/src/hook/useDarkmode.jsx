import {useEffect, useState} from 'react'

function useDarkmode() {
    const [theme, setTheme] = useState(localStorage.theme)
    const colorTheme = theme === 'dark' ? 'light' : 'dark';
    console.log('colorTheme:', colorTheme);
    console.log('theme:', theme);
  useEffect(() => {
      const root = window.document.documentElement;

      root.classList.remove(colorTheme);
      root.classList.add(theme);
      localStorage.setItem('theme', theme)
  },[theme, colorTheme])

  return [colorTheme, setTheme];
}

export default useDarkmode