import { useEffect, useState } from 'react'

import { Particles, initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

import { useTheme } from '../themeProvider/ThemeProvider'

export const Particle = () => {
  const [init, setInit] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    const initializeParticles = async () => {
      await initParticlesEngine(async engine => {
        await loadSlim(engine)
        setInit(true)
      })
    }

    initializeParticles()
  }, [])

  return (
    init && (
      <Particles
        id={'tsparticles'}
        options={{
          detectRetina: false,
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: { enable: true },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.1,
              },
            },
          },
          particles: {
            links: {
              color: theme === 'dark' ? '#ffffff' : '#000000',
              distance: 200,
              enable: true,
              opacity: 0.5,
              width: 0.5,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                height: 1300,
                width: 1300,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { max: 0.8, min: 0.2 },
            },
          },
        }}
      />
    )
  )
}
