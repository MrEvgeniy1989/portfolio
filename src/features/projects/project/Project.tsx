import React from 'react'

import clsx from 'clsx'

import s from './Project.module.scss'

import { Button } from '../../../common/components/button/Button'

type Props = {
  description: string
  src: string
  title: string
}

export const Project = ({ description, src, title }: Props) => {
  return (
    <div className={s.project}>
      <img alt={title} className={s.img} src={src} />
      <div className={clsx(s.imgContainer)}>
        <Button text={'Смотреть'} />
      </div>
      <div className={s.projectInfo}>
        <h3 className={s.projectTitle}>{title}</h3>
        <span className={s.description}>{description}</span>
        <div>
          <a href={'#'}>Link</a>
          <a href={'#'}>Code</a>
        </div>
      </div>
    </div>
  )
}
