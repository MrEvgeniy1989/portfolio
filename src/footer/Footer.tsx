import React from 'react'

import codewarsIcon from '../assets/Icons/codewarsIcon.svg'
import githubIconBlack from '../assets/Icons/githubIconBlack.svg'
import likedinIcon from '../assets/Icons/likedinIcon.svg'
import mailIcons from '../assets/Icons/mailIcons.png'
import telegramIcon from '../assets/Icons/telegramIcon.svg'
import { Title } from '../common/components/title/Title'

import style from './Footer.module.scss'

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <Title text={'Evgenii Slupachik'} />
        <div className={style.socialIcons}>
          <div className={style.socialIcon}>
            <a href="">
              <img src={telegramIcon} alt="" />
            </a>
          </div>
          <div className={style.socialIcon}>
            <a href="">
              <img src={likedinIcon} alt="" />
            </a>
          </div>
          <div className={style.socialIcon}>
            <a href="">
              <img src={codewarsIcon} alt="" />
            </a>
          </div>
          <div className={style.socialIcon}>
            <a href="">
              <img src={githubIconBlack} alt="" />
            </a>
          </div>
          <div className={style.socialIcon}>
            <a href="">
              <img src={mailIcons} alt="" />
            </a>
          </div>
        </div>
        <span className={style.copyright}>© 2023 All Rights Reserved.</span>
      </div>
    </div>
  )
}
