import React from 'react'

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from '@iconify/react'

import style from './Skill.module.scss'

type SkillPropsType = {
  FontAwesomeIcon?: IconProp
  description: string
  iconifyIcon?: string
  imgAltTitle?: string
  imgSrc?: string
  title: string
}

export const Skill = (props: SkillPropsType) => {
  let icon

  if (props.FontAwesomeIcon) {
    icon = <FontAwesomeIcon className={style.fontAwesomeIcon} icon={props.FontAwesomeIcon} />
  } else if (props.iconifyIcon) {
    icon = <Icon className={style.iconifyIcon} fontSize={100} icon={props.iconifyIcon} />
  } else {
    icon = <img alt={props.imgAltTitle} src={props.imgSrc} />
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
