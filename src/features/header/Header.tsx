import React from 'react'

import s from './Header.module.scss'

import { Container } from '../../common/components/container/Container'
import { Nav } from './nav/Nav'

export const Header = () => {
  return (
    <header className={s.header} id={'header'}>
      <Container className={s.container}>
        <Nav />
      </Container>
    </header>
  )
}
