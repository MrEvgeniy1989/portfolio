import React from 'react'
import { Link as LinkScroll } from 'react-scroll'
import ScrollSpy from 'react-scrollspy'

import s from './desktopMenu.module.scss'

import { MenuItem } from '../Header'

type Props = {
  menuItems: MenuItem[]
}

export const DesktopMenu = ({ menuItems }: Props) => {
  return (
    <nav className={s.desktopMenu}>
      <ScrollSpy currentClassName={s.active} items={menuItems.map(item => item.href)} offset={-610}>
        {menuItems.map(item => {
          return (
            <LinkScroll className={s.link} key={item.id} offset={-60} smooth to={item.href}>
              {item.title}
            </LinkScroll>
          )
        })}
      </ScrollSpy>
    </nav>
  )
}
