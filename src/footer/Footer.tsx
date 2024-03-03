import React from 'react'

import style from './Footer.module.scss'

import { CodewarsIcon } from '../assets/Icons/socialIcons/CodewarsIcon'
import { GithubIcon } from '../assets/Icons/socialIcons/GithubIcon'
import { LinkedinIcon } from '../assets/Icons/socialIcons/LinkedinIcon'
import { MailIcon } from '../assets/Icons/socialIcons/MailIcon'
import { TelegramIcon } from '../assets/Icons/socialIcons/TelegramIcon'
import { Title } from '../common/components/title/Title'

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <Title text={'Evgenii Slupachik'} />
        <div className={style.socialIcons}>
          <div className={style.socialIcon}>
            <a href={'https://t.me/mrEvgeniy1989'} rel={'noreferrer'} target={'_blank'}>
              <TelegramIcon className={style.telegramIcon} />
            </a>
          </div>
          <div className={style.socialIcon}>
            <a
              href={'https://www.linkedin.com/in/evgenii-slupachik/'}
              rel={'noreferrer'}
              target={'_blank'}
            >
              <LinkedinIcon className={style.linkedinIcon} />
            </a>
          </div>
          <div className={style.socialIcon}>
            <a
              href={'https://www.codewars.com/users/Slupachik_Evgenii'}
              rel={'noreferrer'}
              target={'_blank'}
            >
              <CodewarsIcon className={style.codewarsIcon} />
            </a>
          </div>
          <div className={style.socialIcon}>
            <a href={'https://github.com/MrEvgeniy1989'} rel={'noreferrer'} target={'_blank'}>
              <GithubIcon className={style.githubIcon} />
            </a>
          </div>
          <div className={style.socialIcon}>
            <a href={'mailto:mr.evgeniy1989@yandex.ru'} rel={'noreferrer'} target={'_blank'}>
              <MailIcon className={style.mailIcon} />
            </a>
          </div>
        </div>
        <span className={style.copyright}>© 2023 All Rights Reserved.</span>
      </div>
    </div>
  )
}
