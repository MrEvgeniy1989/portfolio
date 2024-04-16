import React from 'react'

import s from './Header.module.scss'

import { Container } from '../../common/components/container/Container'
import useScreenSize from '../../common/hooks/useScreenSize/useScreenSize'
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
  const { windowWidth } = useScreenSize()

  return (
    <header className={s.header} id={'header'}>
      <Container className={s.container}>
        {windowWidth > 768 ? (
          <DesktopMenu menuItems={menuItems} />
        ) : (
          <MobileMenu menuItems={menuItems} />
        )}
      </Container>
    </header>
  )
}
