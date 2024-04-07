import React, { useEffect, useState } from 'react'
import Tilt from 'react-parallax-tilt'

import Typewriter from 'typewriter-effect'

import style from './Main.module.scss'

import photo from '../../assets/images/mainPhoto/photo.webp'

export const Main = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', updateWindowWidth)

    return () => {
      window.removeEventListener('resize', updateWindowWidth)
    }
  }, [])

  return (
    <div className={style.main} id={'main'}>
      <div className={style.container}>
        <div className={style.greeting}>
          <span className={style.introducing}>
            I am Evgenii <span className={style.lastName}>Slupachik</span>
          </span>
          <h1 className={style.mainTitle}>
            <p> Frontend Developer</p>
            <Typewriter
              options={{
                autoStart: true,
                delay: 100,
                deleteSpeed: 999999999999999,
                loop: false,
                strings: ['Frontend Developer'],
              }}
            />
          </h1>
        </div>

        <div className={style.photoFrame}>
          {windowWidth > 767 ? (
            <Tilt
              className={style.parallaxEffectImg}
              gyroscope
              perspective={900}
              tiltMaxAngleX={40}
              tiltMaxAngleY={40}
              transitionSpeed={2500}
            >
              <img alt={'photo'} className={style.photo} src={photo} />
            </Tilt>
          ) : (
            <div className={style.mobilePhotoBackground}>
              <img alt={'photo'} className={style.mobilePhoto} src={photo} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
