import React, { ReactNode } from 'react'

import s from './Skill.module.scss'

type SkillPropsType = {
  icon?: ReactNode
  imgAltTitle?: string
  imgSrc?: string
  title: string
}

export const Skill = ({ icon, imgAltTitle, imgSrc, title }: SkillPropsType) => {
  return (
    <div className={s.skill}>
      <div className={s.icon}>{icon}</div>
      <h3 className={s.skillTitle}>{title}</h3>
    </div>
  )
}
