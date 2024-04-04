import React, { useEffect, useState } from 'react'

import s from './App.module.scss'

import { UpArrowIcon } from '../assets/icons/upArrowIcon'
import { Particle } from '../common/components/particle/Particle'
import { ThemeProvider } from '../common/components/themeProvider/ThemeProvider'
import { Footer } from '../footer/Footer'
import { Header } from '../header/Header'
import { Main } from '../main/Main'
import { Projects } from '../projects/Projects'
import { Skills } from '../skills/Skills'

export const App = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    })
  }

  return (
    <div className={s.app}>
      <ThemeProvider>
        <Particle />
        <Header />
        <Main />
        <Skills />
        <Projects />
        <Footer />
        <button
          className={s.scrollButton}
          onClick={scrollToTop}
          style={{ display: showButton ? 'block' : 'none' }}
        >
          <UpArrowIcon className={s.upArrowIcon} />
        </button>
      </ThemeProvider>
    </div>
  )
}
