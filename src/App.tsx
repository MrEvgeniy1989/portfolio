import React from 'react'

import './App.scss'

import { Footer } from './footer/Footer'
import { Header } from './header/Header'
import { Main } from './main/Main'
import { Projects } from './projects/Projects'
import { Skills } from './skills/Skills'

export const App = () => {
  return (
    <div className={'App'}>
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}
