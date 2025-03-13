/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { motion } from 'framer-motion'
import AboutMe from './AboutMe'
import Landing from './Landing'
import Skills from './Skills'
import Projects from './Projects'
import { GithubIcon } from './content/GithubIcon'
import LinkedInIcon from './content/LinkedInIcon'
import { MailIcon } from './content/MailIcon'

const Homepage = () => {
  const handleClick = (location: string) => {
    const element = document.getElementById(location)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    // GOAL: Scroll down the page smoothly to the next section (First Screen -> Second Screen -> Third Screen) using Framer Motion
    <motion.div className="bg-gradient-to-br from-black to-slate-700">
      {/* First Screen */}
      <div
        id="#landing"
        className="h-screen"
      >
        <Landing />
        {/* Scroll Down Button */}
        <div className="flex items-center justify-center mt-4 animate-pulse hover:animate-none">
          <button
            // before="Continue Down"
            className="scrollDownButton before:content-['Continue_Down']"
            onClick={() => {
              handleClick('aboutMe')
            }}
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
        {/* <div className="p-2 bg-[#bebbb7] border border-black shadow-lg drop-shadow-2xl rounded-lg mx-auto w-fit min-[540px]:w-[500px] lg:w-3/4 max-w-[1000px]"> */}
        <AboutMe />
        <Skills />
        {/* </div> */}
        {/* Scroll Down Button */}
        <div className="hidden md:flex items-center justify-center max-[768px]:mt-2 mt-10 animate-pulse hover:animate-none">
          <button
            className="scrollDownButton before:content-['Continue_Down']"
            onClick={() => {
              handleClick('projects')
            }}
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
      {/* Third Screen */}
      <div
        id="projects"
        className="pb-20"
      >
        <Projects />
      </div>
      <footer className="p-5 border-t border-slate-500 text-center text-white">
        <div className=" flex flex-col">
          <div className="p-2">
            <ul className="flex gap-4 justify-center">
              <li className="fill-white">
                <a
                  href="https://github.com/VincentTLa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon color="white" />
                </a>
              </li>
              <li
                className="cursor-pointer hover:after:content-['Copy_to_Clipboard!'] hover:after:absolute hover:after:bg-white hover:after:rounded-full hover:after:text-black hover:after:p-2"
                onClick={() => navigator.clipboard.writeText('vtla101@gmail.com')}
              >
                <MailIcon color="white" />
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/vincent-la-2ab335212/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
          </div>
          <p className="text-xs">Copyright © 2024</p>
          <p className="text-xs">Vincent La</p>
        </div>
      </footer>
    </motion.div>
  )
}

export default Homepage
