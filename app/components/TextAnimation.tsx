import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'
import CursorBlinker from './CursorBlinker'

export default function TextAnim() {
  const baseText = 'Hey there 👋' as string
  const baseTextName = 'My name is Vincent!' as string
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const displayTextGretting = useTransform(rounded, (latest) => baseText.slice(0, latest))
  const displayTextName = useTransform(rounded, (latest) => baseTextName.slice(0, latest))

  const updatedThisRound = useMotionValue(true)

  useEffect(() => {
    animate(count, 60, {
      type: 'tween',
      duration: 1,
      ease: 'easeIn',
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false)
        } else if (updatedThisRound.get() === false && latest === 0) {
          updatedThisRound.set(true)
        }
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="">
      <div className="">
        <motion.span className="font-martel-sans text-3xl font-bold">
          {displayTextGretting}
        </motion.span>
      </div>

      <motion.span className="font-martel-sans text-2xl font-bold">{displayTextName}</motion.span>
      <CursorBlinker />
    </div>
  )
}
