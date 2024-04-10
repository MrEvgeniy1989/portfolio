import React from 'react'

import s from './Footer.module.scss'

import { CodewarsIcon } from '../../assets/icons/socialIcons/CodewarsIcon'
import { GithubIcon } from '../../assets/icons/socialIcons/GithubIcon'
import { LinkedinIcon } from '../../assets/icons/socialIcons/LinkedinIcon'
import { MailIcon } from '../../assets/icons/socialIcons/MailIcon'
import { TelegramIcon } from '../../assets/icons/socialIcons/TelegramIcon'
import { Container } from '../../common/components/container/Container'
import { Title } from '../../common/components/title/Title'
import { FooterIcon } from './footerIcon/FooterIcon'

type FooterIconType = {
  children: React.ReactNode
  href: string
  id: number
}

const footerIcons: FooterIconType[] = [
  {
    children: <TelegramIcon className={s.telegramIcon} />,
    href: 'https://t.me/mrEvgeniy1989',
    id: 1,
  },
  {
    children: <LinkedinIcon className={s.linkedinIcon} />,
    href: 'https://www.linkedin.com/in/evgenii-slupachik/',
    id: 2,
  },
  {
    children: <CodewarsIcon className={s.codewarsIcon} />,
    href: 'https://www.codewars.com/users/Slupachik_Evgenii',
    id: 3,
  },
  {
    children: <GithubIcon className={s.githubIcon} />,
    href: 'https://github.com/MrEvgeniy1989',
    id: 4,
  },
  {
    children: <MailIcon className={s.mailIcon} />,
    href: 'mailto:mr.evgeniy1989@yandex.ru',
    id: 5,
  },
]

export const Footer = () => {
  return (
    <footer className={s.footer} id={'contacts'}>
      <Container className={s.container}>
        <Title className={s.footerTitle} text={'Evgenii Slupachik'} />
        <div className={s.socialIcons}>
          {footerIcons.map(icon => {
            return (
              <FooterIcon href={icon.href} key={icon.id}>
                {icon.children}
              </FooterIcon>
            )
          })}
        </div>
        <span className={s.copyright}>© 2023 All Rights Reserved.</span>
      </Container>
    </footer>
  )
}
