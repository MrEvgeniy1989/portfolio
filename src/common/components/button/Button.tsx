import React from 'react'

import style from './Button.module.scss'

type ButtonPropsType = {
  text: string
}

export const Button = (props: ButtonPropsType) => {
  return (
    <a className={style.btn} href={''}>
      {props.text}
    </a>
  )
}
