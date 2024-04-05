import React from 'react'

import clsx from 'clsx'

import style from './Project.module.scss'

import { Button } from '../../../common/components/button/Button'

type Props = {
  className?: string
  description: string
  title: string
}

export const Project = ({ className, description, title }: Props) => {
  return (
    <div className={style.project}>
      <div className={clsx(style.imgContainer, className)}>
        <Button text={'Смотреть'} />
      </div>
      <div className={style.projectInfo}>
        <h3 className={style.projectTitle}>{title}</h3>
        <span className={style.description}>{description}</span>
      </div>
    </div>
  )
}
