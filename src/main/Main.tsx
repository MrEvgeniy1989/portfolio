import React from 'react'

import style from './Main.module.scss'

export const Main = () => {
  return (
    <div className={style.mainBlock} id={'main'}>
      <div className={style.container}>
        <div className={style.greeting}>
          <span>
            I am Evgenii <span>Slupachik</span>
          </span>
          <h1> Frontend Developer</h1>
        </div>
        <div className={style.photo}>
          <div className={style.image}></div>
        </div>
      </div>
    </div>
  )
}
