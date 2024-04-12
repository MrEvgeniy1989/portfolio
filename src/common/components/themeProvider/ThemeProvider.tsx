import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

import s from './themeProvider.module.scss'

import { MoonIcon } from '../../../assets/icons/moonIcon'
import { SunIcon } from '../../../assets/icons/sunIcon'

type Props = {
  children: ReactNode
}

const ThemeContext = createContext<'dark' | 'light'>('dark')

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light'

    return savedTheme || 'dark'
  })

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'

    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={theme}>
      <div className={s.themeProvider}>
        <button
          className={s.themeButton}
          id={'themeButton'}
          onClick={toggleTheme}
          title={theme === 'dark' ? 'Switch to light theme.' : 'Switch to dark theme.'}
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeContext)
}
