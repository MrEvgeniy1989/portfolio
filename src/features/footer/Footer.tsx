import React from 'react'

import style from './Footer.module.scss'

import { CodewarsIcon } from '../../assets/icons/socialIcons/CodewarsIcon'
import { GithubIcon } from '../../assets/icons/socialIcons/GithubIcon'
import { LinkedinIcon } from '../../assets/icons/socialIcons/LinkedinIcon'
import { MailIcon } from '../../assets/icons/socialIcons/MailIcon'
import { TelegramIcon } from '../../assets/icons/socialIcons/TelegramIcon'
import { Title } from '../../common/components/title/Title'
import { FooterIcon } from './footerIcon/FooterIcon'

type FooterIconType = {
  children: React.ReactNode
  href: string
  id: number
}

const footerIcons: FooterIconType[] = [
  {
    children: <TelegramIcon className={style.telegramIcon} />,
    href: 'https://t.me/mrEvgeniy1989',
    id: 1,
  },
  {
    children: <LinkedinIcon className={style.linkedinIcon} />,
    href: 'https://www.linkedin.com/in/evgenii-slupachik/',
    id: 2,
  },
  {
    children: <CodewarsIcon className={style.codewarsIcon} />,
    href: 'https://www.codewars.com/users/Slupachik_Evgenii',
    id: 3,
  },
  {
    children: <GithubIcon className={style.githubIcon} />,
    href: 'https://github.com/MrEvgeniy1989',
    id: 4,
  },
  {
    children: <MailIcon className={style.mailIcon} />,
    href: 'mailto:mr.evgeniy1989@yandex.ru',
    id: 5,
  },
]

export const Footer = () => {
  return (
    <footer className={style.footer} id={'contacts'}>
      <div className={style.container}>
        <Title text={'Evgenii Slupachik'} />
        <div className={style.socialIcons}>
          {footerIcons.map(icon => {
            return (
              <FooterIcon href={icon.href} key={icon.id}>
                {icon.children}
              </FooterIcon>
            )
          })}
        </div>
        <span className={style.copyright}>© 2023 All Rights Reserved.</span>
      </div>
    </footer>
  )
}
