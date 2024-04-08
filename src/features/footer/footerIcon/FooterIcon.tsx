import React from 'react'

import s from './footerIcon.module.scss'

type Props = {
  children: React.ReactNode
  href: string
}

export const FooterIcon = ({ children, href }: Props) => {
  return (
    <div className={s.socialIcon}>
      <a href={href} rel={'noreferrer'} target={'_blank'}>
        {children}
      </a>
    </div>
  )
}
