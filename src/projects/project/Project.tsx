import React from 'react'

import { Button } from '../../common/components/button/Button'

import style from './Project.module.scss'

type ProjectPropsType = {
  title: string
  description: string
  style: {
    backgroundImage: string
  }
}

export const Project = (props: ProjectPropsType) => {
  return (
    <div className={style.project}>
      <div className={style.imgContainer} style={props.style}>
        <Button text={'Смотреть'} />
      </div>
      <div className={style.projectInfo}>
        <h3 className={style.projectTitle}>{props.title}</h3>
        <span className={style.description}>{props.description}</span>
      </div>
    </div>
  )
}
