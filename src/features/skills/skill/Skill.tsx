import React from 'react'

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from '@iconify/react'

import s from './Skill.module.scss'

type SkillPropsType = {
  FontAwesomeIcon?: IconProp
  iconifyIcon?: string
  imgAltTitle?: string
  imgSrc?: string
  title: string
}

export const Skill = (props: SkillPropsType) => {
  let icon

  if (props.FontAwesomeIcon) {
    icon = <FontAwesomeIcon className={s.fontAwesomeIcon} icon={props.FontAwesomeIcon} />
  } else if (props.iconifyIcon) {
    icon = <Icon className={s.iconifyIcon} fontSize={100} icon={props.iconifyIcon} />
  } else {
    icon = <img alt={props.imgAltTitle} src={props.imgSrc} />
  }

  return (
    <div className={s.skill}>
      <div className={s.icon}>{icon}</div>
      <div className={s.skillInfo}>
        <h3>{props.title}</h3>
      </div>
    </div>
  )
}
