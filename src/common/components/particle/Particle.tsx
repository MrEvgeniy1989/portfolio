import { useEffect, useState } from 'react'

import { Particles, initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

import { useTheme } from '../themeProvider/ThemeProvider'

export const Particle = () => {
  const [init, setInit] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  return (
    init && (
      <Particles
        id={'tsparticles'}
        options={{
          detectRetina: true,
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: { enable: true },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.1,
              },
            },
          },
          particles: {
            color: {
              value: theme === 'dark' ? '#ffffff' : '#000000',
            },
            links: {
              color: theme === 'dark' ? '#ffffff' : '#000000',
              distance: 200,
              enable: true,
              opacity: 0.5,
              width: 1,
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
                height: 1500,
                width: 1500,
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
              value: { max: 1, min: 0.2 },
            },
          },
        }}
      />
    )
  )
}
