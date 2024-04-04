import React from 'react'

import s from './App.module.scss'

import { Particle } from '../common/components/particle/Particle'
import { ThemeProvider } from '../common/components/themeProvider/ThemeProvider'
import { Footer } from '../footer/Footer'
import { Header } from '../header/Header'
import { Main } from '../main/Main'
import { Projects } from '../projects/Projects'
import { Skills } from '../skills/Skills'
import { UpButton } from './upButton/UpButton'

export const App = () => {
  return (
    <div className={s.app}>
      <ThemeProvider>
        <Particle />
        <Header />
        <Main />
        <Skills />
        <Projects />
        <Footer />
        <UpButton />
      </ThemeProvider>
    </div>
  )
}
