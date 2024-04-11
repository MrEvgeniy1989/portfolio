import React from 'react'

import clsx from 'clsx'

import s from './Button.module.scss'

type ButtonPropsType = {
  className?: string
  href: string
  title: string
}

export const Button = ({ className, href, title }: ButtonPropsType) => {
  return (
    <a className={clsx(s.btn, className)} href={href} rel={'noreferrer'} target={'_blank'}>
      {title}
    </a>
  )
}
