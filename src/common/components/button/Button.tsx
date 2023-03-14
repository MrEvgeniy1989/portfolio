import React from 'react'

import style from './Button.module.scss'

type ButtonPropsType = {
  text: string
}

export const Button = (props: ButtonPropsType) => {
  return (
    <a href={''} className={style.btn}>
      {props.text}
    </a>
  )
}
