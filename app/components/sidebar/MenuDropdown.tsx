import { useRef } from 'react'
import { motion, useCycle } from 'framer-motion'
import { useDimensions } from '../use-dimensions'
import { MenuToggle } from './MenuToggle'
import Navigation from './Navigation'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 250px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 250px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}
// The Menu Burger dropdown which will contain the Nav and items
// Associated components should be Navigation.tsx
function MenuDropdown() {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)
  return (
    <motion.nav
      className="absolute z-50 top-0 right-0 bottom-0 w-[300px]"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className="absolute top-0 right-0 bottom-0 w-[300px] bg-gray-300"
        variants={sidebar}
      />
      {/* <AnimatePresence>{isOpen && <Navigation />}</AnimatePresence> */}
      <Navigation isOpen={isOpen} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}

export default MenuDropdown
