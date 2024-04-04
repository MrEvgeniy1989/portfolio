import React, { useState } from 'react'
import { Link as LinkScroll } from 'react-scroll'

import clsx from 'clsx'

import s from './Nav.module.scss'

const menuItems = [
  { href: 'main', id: 1, title: 'Main' },
  { href: 'skills', id: 2, title: 'Skills' },
  { href: 'projects', id: 3, title: 'Projects' },
  { href: 'contacts', id: 4, title: 'Contacts' },
]

export const Nav = () => {
  const [activeItem, setActiveItem] = useState<null | string>('main')

  return (
    <ul className={s.nav}>
      {menuItems.map(item => {
        return (
          <LinkScroll
            className={clsx(s.link, activeItem === item.href ? s.active : '')}
            hashSpy
            key={item.id}
            offset={-60}
            onClick={() => {
              setActiveItem(item.href)
            }}
            smooth
            spy
            to={item.href}
          >
            {item.title}
          </LinkScroll>
        )
      })}
    </ul>
  )
}
