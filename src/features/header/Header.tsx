import React from 'react'

import s from './Header.module.scss'

import { Container } from '../../common/components/container/Container'
import { DesktopMenu } from './desktopMenu/DesktopMenu'
import { MobileMenu } from './mobileMenu/MobileMenu'

export type MenuItem = {
  href: string
  id: number
  title: string
}

const menuItems: MenuItem[] = [
  { href: 'main', id: 1, title: 'Main' },
  { href: 'skills', id: 2, title: 'Skills' },
  { href: 'projects', id: 3, title: 'Projects' },
  { href: 'contacts', id: 4, title: 'Contacts' },
]

export const Header = () => {
  return (
    <header className={s.header} id={'header'}>
      <Container className={s.container}>
        <DesktopMenu menuItems={menuItems} />
        <MobileMenu menuItems={menuItems} />
      </Container>
    </header>
  )
}
