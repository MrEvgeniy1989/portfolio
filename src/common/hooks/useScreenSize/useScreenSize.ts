import { useEffect, useState } from 'react'

const useScreenSize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)
  }

  return { windowHeight, windowWidth }
}

export default useScreenSize
