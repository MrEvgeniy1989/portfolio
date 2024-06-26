import React from 'react'

import s from './App.module.scss'

import { Particle } from '../common/components/particle/Particle'
import { ThemeProvider } from '../common/components/themeProvider/ThemeProvider'
import { Footer } from '../features/footer/Footer'
import { Header } from '../features/header/Header'
import { Main } from '../features/main/Main'
import { Projects } from '../features/projects/Projects'
import { Skills } from '../features/skills/Skills'
import { UpButton } from './upButton/UpButton'

export const App = () => {
  return (
    <div className={s.app}>
      <ThemeProvider>
        <Header />
        <Main />
        <Skills />
        <Projects />
        <Footer />
        <UpButton />
        <Particle />
      </ThemeProvider>
    </div>
  )
}
