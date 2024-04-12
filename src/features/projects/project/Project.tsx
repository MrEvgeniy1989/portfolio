import React from 'react'

import clsx from 'clsx'

import s from './Project.module.scss'

import { Button } from '../../../common/components/button/Button'

type Props = {
  codeHref: string
  description: string
  projectHref: string
  src: string
  title: string
}

export const Project = ({ codeHref, description, projectHref, src, title }: Props) => {
  return (
    <div className={s.project}>
      <div className={clsx(s.imgContainer)}>
        <img alt={title} className={s.img} src={src} />
        <Button className={s.button} href={projectHref} title={'View Project'} />
      </div>
      <div className={s.projectInfo}>
        <h3 className={s.projectTitle}>{title}</h3>
        <span className={s.description}>{description}</span>
        <div className={s.links}>
          <Button className={s.link} href={projectHref} title={'Project'} />
          <Button className={s.link} href={codeHref} title={'Code'} />
        </div>
      </div>
    </div>
  )
}
