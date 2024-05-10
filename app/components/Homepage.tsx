import { motion } from 'framer-motion'
import AboutMe from './AboutMe'
import Landing from './Landing'

const Homepage = () => {
  // const { scrollYProgress } = useScroll()
  // const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  return (
    // GOAL: Scroll down the page smoothly to the next section (First Screen -> Second Screen -> Third Screen) using Framer Motion
    <motion.div
      // style={{ scale }}
      className=""
    >
      {/* First Screen */}
      <Landing />
      {/* <Spiral /> */}

      {/* Second Screen */}
      <AboutMe />
      {/* Third Screen */}
    </motion.div>
  )
}

export default Homepage
