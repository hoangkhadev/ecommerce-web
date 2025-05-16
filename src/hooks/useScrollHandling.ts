import { useEffect, useRef, useState } from 'react'

const useScrollHandling = () => {
  const [srcollDirection, setSrcollDirection] = useState<'up' | 'down' | null>(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  const prevScrollPosition = useRef(0)

  const scrollTracking = () => {
    const currentScrollPosition = window.pageYOffset

    if (currentScrollPosition > prevScrollPosition.current) {
      setSrcollDirection('down')
    } else if (currentScrollPosition < prevScrollPosition.current) {
      setSrcollDirection('up')
    }

    prevScrollPosition.current = Math.max(0, currentScrollPosition)
    setScrollPosition(currentScrollPosition)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollTracking)

    return () => window.removeEventListener('scroll', scrollTracking)
  }, [])

  return { scrollPosition, srcollDirection, scrollTracking }
}

export default useScrollHandling
