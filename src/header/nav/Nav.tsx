import React from 'react'

import style from './Nav.module.scss'

export const Nav = () => {
  return (
    <div className={style.nav}>
      <a href="src/header/nav">Main</a>
      <a href="src/header/nav">Skills</a>
      <a href="src/header/nav">Projects</a>
      <a href="src/header/nav">Contacts</a>
    </div>
  )
}
