import React from 'react'

import clsx from 'clsx'

import s from './Title.module.scss'

type Props = {
  className?: string
  text: string
}

export const Title = ({ className, text }: Props) => {
  return <h2 className={clsx(s.title, className)}>{text}</h2>
}
