"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

function Counter({ end, label, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      let startTime
      let animationFrame

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = timestamp - startTime

        const percentage = Math.min(progress / duration, 1)
        const easeOutQuart = 1 - Math.pow(1 - percentage, 4)
        const currentCount = Math.floor(easeOutQuart * end)

        setCount(currentCount)

        if (progress < duration) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }
  }, [end, duration, inView])

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-4 bg-card shadow-lg border border-border rounded-lg">
      <div className="text-5xl font-bold text-primary mb-2">{count}</div>
      <div className="text-sm text-foreground uppercase tracking-wider text-center">{label}</div>
      <div className="w-12 h-1 bg-accent mt-2" />
    </div>
  )
}

export default function Component() {
  return (
    <div className="w-full bg-background py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Counter end={180} label="Professional Teachers" />
          <Counter end={20} label="Well Equipped Laboratories" />
          <Counter end={10} label="Professional Courses" />
          <Counter end={2500} label="Registered Students" />
        </div>
      </div>
    </div>
  )
}