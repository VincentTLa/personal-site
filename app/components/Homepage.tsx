import { motion } from 'framer-motion'
import Spiral from './Spiral'

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
      <Spiral />
      <div className="text-center absolute m-auto w-full top-2/3 text-off-white">
        <ul>
          <li className="p-5 text-xl">
            <a href="/about">About Me</a>
          </li>
          <li className="p-5 text-xl">
            <a href="/learnings">Learnings</a>
          </li>
          <li className="p-5 text-xl">
            <a href="/recipes">Recipes</a>
          </li>
        </ul>
      </div>

      {/* Second Screen */}
      {/* Third Screen */}
    </motion.div>
  )
}

export default Homepage
