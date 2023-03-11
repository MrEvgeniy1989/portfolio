import React from 'react'

import styleContainer from '../common/styles/Container.module.css'

import style from './Footer.module.css'

export const Footer = () => {
  return (
    <div className={style.footerBlock}>
      <div className={`${styleContainer.container} ${style.footerContainer}`}>
        <h2 className={style.title}>Evgenii Slupachik</h2>
        <div className={style.footer}>
          <div className={style.footerSocialNetwork}></div>
          <div className={style.footerSocialNetwork}></div>
          <div className={style.footerSocialNetwork}></div>
          <div className={style.footerSocialNetwork}></div>
        </div>
        <span>© 2023 Все права защищены</span>
      </div>
    </div>
  )
}
