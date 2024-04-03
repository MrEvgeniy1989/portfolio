import React from 'react'

import './App.module.scss'

import s from '../src/App.module.scss'

import { Footer } from './footer/Footer'
import { Header } from './header/Header'
import { Main } from './main/Main'
import { Projects } from './projects/Projects'
import { Skills } from './skills/Skills'
export const App = () => {
  return (
    <div className={s.app}>
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}
