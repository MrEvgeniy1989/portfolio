import React from 'react'

import s from './Title.module.scss'

type TitlePropsType = {
  text: string
}

export const Title = (props: TitlePropsType) => {
  return <h2 className={s.title}>{props.text}</h2>
}
