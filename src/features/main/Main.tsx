import React from 'react'
import Tilt from 'react-parallax-tilt'

import Typewriter from 'typewriter-effect'

import s from './Main.module.scss'

import photo from '../../assets/images/mainPhoto/photo.webp'
import { Container } from '../../common/components/container/Container'
import useScreenSize from '../../common/hooks/useScreenSize/useScreenSize'

export const Main = () => {
  const { windowWidth } = useScreenSize()

  return (
    <div className={s.main} id={'main'}>
      <Container className={s.container}>
        <div className={s.greeting}>
          <h2 className={s.introducing}>
            I am Evgenii <span className={s.lastName}>Slupachik</span>
          </h2>
          <h1 className={s.mainTitle}>
            <p>Frontend Developer</p>
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

        <div className={s.photoFrame}>
          {windowWidth > 767 ? (
            <Tilt
              className={s.parallaxEffectImg}
              gyroscope
              perspective={900}
              tiltMaxAngleX={40}
              tiltMaxAngleY={40}
              transitionSpeed={2500}
            >
              <img alt={'photo'} className={s.photo} src={photo} />
            </Tilt>
          ) : (
            <div className={s.mobilePhotoBackground}>
              <img alt={'photo'} className={s.mobilePhoto} src={photo} />
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}
