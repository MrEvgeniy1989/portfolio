import React from 'react'

import style from './Nav.module.scss'

const menuItems = [
  { href: 'main', id: 1, title: 'Main' },
  { href: 'skills', id: 2, title: 'Skills' },
  { href: 'projects', id: 3, title: 'Projects' },
  { href: 'contacts', id: 4, title: 'Contacts' },
]

export const Nav = () => {
  return (
    // <div className={style.nav}>
    //   <a href={'#main'}>Main</a>
    //   <a href={'#skills'}>Skills</a>
    //   <a href={'#projects'}>Projects</a>
    //   <a href={'#contacts'}>Contacts</a>
    // </div>

    <ul className={style.nav}>
      {menuItems.map(item => {
        return (
          <a href={`#${item.href}`} key={item.id}>
            {item.title}
          </a>
        )
      })}
    </ul>
  )
}
