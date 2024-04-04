import React, { useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'

import s from './upButton.module.scss'

import { UpArrowIcon } from '../../assets/icons/upArrowIcon'
import { useSmoothScroll } from '../../common/hooks/useSmoothScroll/useSmoothScroll'

type Props = {}

export const UpButton = ({}: Props) => {
  const [showButton, setShowButton] = useState(true)

  return (
    <button
      className={s.scrollButton}
      onClick={() => scroll.scrollToTop()}
      style={{ display: showButton ? 'block' : 'none' }}
    >
      <UpArrowIcon className={s.upArrowIcon} />
    </button>
  )
}
