import React from 'react'

import style from './Skill.module.scss'

type SkillPropsType = {
  title: string
  description: string
  imgSrc: string
  imgAltTitle: string
}

export const Skill = (props: SkillPropsType) => {
  return (
    <div className={style.skill}>
      <div className={style.icon}>
        <img src={props.imgSrc} alt={props.imgAltTitle} />
      </div>
      <div className={style.skillInfo}>
        <h3>{props.title}</h3>
      </div>
    </div>
  )
}
