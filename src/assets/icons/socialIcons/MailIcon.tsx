import { SVGProps, memo } from 'react'
export const MailIcon = memo((props: SVGProps<SVGSVGElement>) => (
  <svg height={30} viewBox={'0 0 60 60'} width={30} xmlns={'http://www.w3.org/2000/svg'} {...props}>
    <path
      d={
        'M6.6 11.8c-1.5 1.8-1.1 2.2 10.9 9.6 7.5 4.7 13 7.5 13.7 7 .7-.4 6.4-3.8 12.6-7.7 10.8-6.7 11.2-7 9.6-8.8C51.8 10.2 49.9 10 30 10c-19.8 0-21.8.2-23.4 1.8z'
      }
      fill={'currentColor'}
    />
    <path
      d={
        'M5 33.3c0 11 .3 13.9 1.6 15.1 2.3 2.4 44.5 2.4 46.8 0 1.3-1.2 1.6-4.1 1.6-15 0-7.4-.2-13.4-.5-13.4s-5.9 3.4-12.5 7.5L30 35l-11.2-7.1C12.6 24 7 20.5 6.3 20.3c-1-.4-1.3 2.5-1.3 13z'
      }
      fill={'currentColor'}
    />
  </svg>
))
