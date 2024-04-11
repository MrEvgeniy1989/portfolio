import React, { useState } from 'react'
import { Link as LinkScroll } from 'react-scroll'
import ScrollSpy from 'react-scrollspy'

import clsx from 'clsx'

import s from './mobileMenu.module.scss'

import { MenuItem } from '../Header'

type Props = {
  menuItems: MenuItem[]
}

export const MobileMenu = ({ menuItems }: Props) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  const onBurgerButtonClick = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <nav className={s.mobileMenu}>
      <button
        className={clsx(s.burgerButton, menuIsOpen && s.burgerButtonOpen)}
        onClick={onBurgerButtonClick}
      >
        <span></span>
      </button>
      <div
        className={clsx(s.mobileMenuPopup, menuIsOpen && s.popupOpen)}
        onClick={() => setMenuIsOpen(false)}
      >
        <ScrollSpy
          currentClassName={s.active}
          items={menuItems.map(item => item.href)}
          offset={-610}
        >
          {menuItems.map(item => {
            return (
              <LinkScroll
                className={s.link}
                key={item.id}
                offset={-60}
                onClick={() => setMenuIsOpen(false)}
                smooth
                to={item.href}
              >
                {item.title}
              </LinkScroll>
            )
          })}
        </ScrollSpy>
      </div>
    </nav>
  )
}
