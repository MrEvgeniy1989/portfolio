import { useEffect } from 'react'

export const useSmoothScroll = (callback: (showButton: boolean) => void, threshold: number) => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        callback(true)
      } else {
        callback(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [callback, threshold])

  return () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    })
  }
}
