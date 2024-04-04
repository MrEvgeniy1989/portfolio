import React, { useEffect, useState } from 'react'

import s from './upButton.module.scss'

import { UpArrowIcon } from '../../assets/icons/upArrowIcon'
import { useSmoothScroll } from '../../common/hooks/useSmoothScroll/useSmoothScroll'

type Props = {}

export const UpButton = ({}: Props) => {
  const [showButton, setShowButton] = useState(false)
  const scrollToTop = useSmoothScroll(setShowButton, 50)

  return (
    <button
      className={s.scrollButton}
      onClick={scrollToTop}
      style={{ display: showButton ? 'block' : 'none' }}
    >
      <UpArrowIcon className={s.upArrowIcon} />
    </button>
  )
}
