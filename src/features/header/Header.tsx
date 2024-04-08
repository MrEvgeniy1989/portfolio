import React from 'react'

import style from './Header.module.scss'

import { Nav } from './nav/Nav'

export const Header = () => {
  return (
    <header className={style.header} id={'header'}>
      <div className={style.container}>
        <Nav />
      </div>
    </header>
  )
}
