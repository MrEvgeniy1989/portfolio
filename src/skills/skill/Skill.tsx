import React from 'react'

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from '@iconify/react'

import style from './Skill.module.scss'

type SkillPropsType = {
  title: string
  description: string
  imgSrc?: string
  imgAltTitle?: string
  FontAwesomeIcon?: IconProp
  iconifyIcon?: string
}

export const Skill = (props: SkillPropsType) => {
  let icon

  if (props.FontAwesomeIcon) {
    icon = <FontAwesomeIcon icon={props.FontAwesomeIcon} className={style.fontAwesomeIcon} />
  } else if (props.iconifyIcon) {
    icon = <Icon icon={props.iconifyIcon} className={style.iconifyIcon} fontSize={100} />
  } else {
    icon = <img src={props.imgSrc} alt={props.imgAltTitle} />
  }

  return (
    <div className={style.skill}>
      <div className={style.icon}>{icon}</div>
      <div className={style.skillInfo}>
        <h3>{props.title}</h3>
      </div>
    </div>
  )
}
