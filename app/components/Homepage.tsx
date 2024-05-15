import { motion } from 'framer-motion'
import AboutMe from './AboutMe'
import Landing from './Landing'
import Skills from './Skills'

const Homepage = () => {
  const handleClick = () => {
    const element = document.getElementById('aboutMe')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    // GOAL: Scroll down the page smoothly to the next section (First Screen -> Second Screen -> Third Screen) using Framer Motion
    <motion.div className="bg-gradient-to-br from-indigo-900 to-slate-700">
      {/* First Screen */}
      <div
        id="#landing"
        className="h-screen"
      >
        <Landing />
        {/* Scroll Down Button */}
        <div className="flex items-center justify-center mt-4">
          <button
            className="scrollDownButton"
            onClick={handleClick}
            onTouchStart={handleClick}
          >
            <svg
              viewBox="0 0 384 512"
              className="svgIcon"
            >
              <g transform="scale(1, -1) translate(0, -512)">
                <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
      {/* Second Screen */}
      <div
        id="aboutMe"
        className="h-screen"
      >
        <AboutMe />
        <Skills />
      </div>
    </motion.div>
  )
}

export default Homepage
