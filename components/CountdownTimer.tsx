import type React from "react"
import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: string
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null
    }

    return (
      <span className="mx-1" key={interval}>
        {timeLeft[interval]}
        {interval}
      </span>
    )
  })

  return (
    <div className="text-center">
      {timerComponents.length ? (
        <div className="bg-white text-green-500 inline-block py-1 px-3 rounded-full text-sm font-semibold shadow-sm">
          {timerComponents}
        </div>
      ) : (
        <span className="text-sm font-semibold">¡Ya estamos en vivo!</span>
      )}
    </div>
  )
}

export default CountdownTimer

