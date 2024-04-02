import React from 'react'

import Typewriter from 'typewriter-effect'

import style from './Main.module.scss'

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
        <div className={style.photo}>
          <div className={style.image}></div>
        </div>
      </div>
    </div>
  )
}
