import React from 'react'

import s from './App.module.scss'

import { ThemeProvider } from '../common/components/themeProvider/ThemeProvider'
import { Footer } from '../features/footer/Footer'
import { Header } from '../features/header/Header'
import { Main } from '../features/main/Main'
import { Projects } from '../features/projects/Projects'
import { Skills } from '../features/skills/Skills'
import { UpButton } from './upButton/UpButton'

export const App = () => {
  // const [isParticleLoaded, setIsParticleLoaded] = useState(true)
  //
  // useEffect(() => {
  //   // Можно добавить любую логику, если необходимо, перед установкой isParticleLoaded в false
  //   setIsParticleLoaded(false)
  // }, [])

  return (
    <div className={s.app}>
      {/*{isParticleLoaded ? (*/}
      <ThemeProvider>
        {/*<Particle init={isParticleLoaded} onLoaded={() => setIsParticleLoaded(true)} />*/}
        <Header />
        <Main />
        <Skills />
        <Projects />
        <Footer />
        <UpButton />
      </ThemeProvider>
      {/*) : (*/}
      {/*  <Loader />*/}
      {/*)}*/}
    </div>
  )
}
