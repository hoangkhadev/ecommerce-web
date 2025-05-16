import { JSX, useEffect, useState } from 'react'

interface CountdownTimerProps {
  targetDate: string
}

type TimeLeftType = {
  [key: string]: number
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const calculateTimeLeft = (): TimeLeftType => {
    const difference = +new Date(targetDate) - +new Date()
    let timeLeft: TimeLeftType = {}

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Mins: Math.floor((difference / 1000 / 60) % 60),
        Secs: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState<TimeLeftType>(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const formatNumber = (number: number) => {
    return String(number).padStart(2, '0')
  }

  const timerComponents: JSX.Element[] = []

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval] !== undefined) {
      timerComponents.push(
        <div
          key={interval}
          className='flex-center gap-[10px] rounded-[3px] min-w-[100px] min-h-[41px] m-[5px] text-[18px] text-four bg-white'
        >
          <span className='font-normal'>{formatNumber(timeLeft[interval])}</span>
          <span className='font-[400] text-secondary'>{interval} </span>
        </div>
      )
    }
  })

  return timerComponents
}
