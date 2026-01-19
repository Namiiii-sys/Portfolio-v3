import React from 'react'
import { motion } from 'framer-motion'

const FloatingAnimation = () => {
  const [items, setItems] = React.useState<{ x: number; y: number; width: number; height: number; duration: number; xTo: number[]; yTo: number[] }[]>([]);

  React.useEffect(() => {
    const newItems = [...Array(20)].map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      width: Math.random() * 30 + 10,
      height: Math.random() * 30 + 10,
      duration: Math.random() * 10 + 10,
      xTo: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
      yTo: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
    }));
    setItems(newItems);
  }, []);

  if (items.length === 0) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-purple-500/10"
          initial={{
            x: item.x,
            y: item.y,
            width: item.width,
            height: item.height,
          }}
          animate={{
            x: item.xTo,
            y: item.yTo,
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  )
}

export default FloatingAnimation