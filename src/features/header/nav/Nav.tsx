import React from 'react'
import { Link as LinkScroll } from 'react-scroll'
import ScrollSpy from 'react-scrollspy'

import s from './Nav.module.scss'

const menuItems = [
  { href: 'main', id: 1, title: 'Main' },
  { href: 'skills', id: 2, title: 'Skills' },
  { href: 'projects', id: 3, title: 'Projects' },
  { href: 'contacts', id: 4, title: 'Contacts' },
]

export const Nav = () => {
  return (
    <ul>
      <ScrollSpy
        className={s.nav}
        currentClassName={s.active}
        items={menuItems.map(item => item.href)}
        offset={-600}
      >
        {menuItems.map(item => {
          return (
            <LinkScroll className={s.link} key={item.id} offset={-60} smooth to={item.href}>
              {item.title}
            </LinkScroll>
          )
        })}
      </ScrollSpy>
    </ul>
  )
}
