import React from 'react'
import Tilt from 'react-parallax-tilt'

import Typewriter from 'typewriter-effect'

import style from './Main.module.scss'

import photo from '../assets/images/photo.webp'

export const Main = () => {
  return (
    <div className={style.mainBlock} id={'main'}>
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
          {window.innerWidth > 1230 ? (
            <Tilt
              className={style.parallaxEffectImg}
              gyroscope
              perspective={800}
              scale={1.1}
              tiltMaxAngleX={40}
              tiltMaxAngleY={40}
              transitionSpeed={1500}
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
