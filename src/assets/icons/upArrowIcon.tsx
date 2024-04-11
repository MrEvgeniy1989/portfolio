import { SVGProps, memo } from 'react'

export const UpArrowIcon = memo((props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height={'1.5em'}
      viewBox={'0 0 24 24'}
      width={'1.5em'}
      xmlns={'http://www.w3.org/2000/svg'}
      {...props}
    >
      <path d={'M6 17.59L7.41 19L12 14.42L16.59 19L18 17.59l-6-6z'} fill={'currentColor'}></path>
      <path d={'m6 11l1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z'} fill={'currentColor'}></path>
    </svg>
  )
})
