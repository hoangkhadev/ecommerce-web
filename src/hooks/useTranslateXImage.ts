import useScrollHandling from '@/hooks/useScrollHandling'
import { useCallback, useEffect, useState } from 'react'

const useTranslateXImage = () => {
  const [translateXPosition, setTranslateXPosition] = useState(30)
  const { scrollPosition, srcollDirection } = useScrollHandling()

  const handleTranslateX = useCallback(() => {
    if (srcollDirection == 'down' && scrollPosition >= 1500) {
      setTranslateXPosition(Math.max(0, translateXPosition - 2))
    } else if (srcollDirection == 'up' && scrollPosition <= 2800) {
      setTranslateXPosition(Math.min(30, translateXPosition + 2))
    }
  }, [scrollPosition, srcollDirection, translateXPosition])

  useEffect(() => {
    handleTranslateX()
  }, [scrollPosition, handleTranslateX])

  return { translateXPosition }
}

export default useTranslateXImage
