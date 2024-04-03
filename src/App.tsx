import React, { useEffect, useState } from 'react'

import './App.module.scss'

import s from '../src/App.module.scss'

import { UpArrowIcon } from './assets/Icons/upArrowIcon'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'
import { Main } from './main/Main'
import { Projects } from './projects/Projects'
import { Skills } from './skills/Skills'
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
    </div>
  )
}
