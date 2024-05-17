import JavaIcon from './content/JavaIcon'
import NodeJSIcon from './content/NodeJSIcon'
import TailwindIcon from './content/TailwindIcon'
import SpringbootIcon from './content/SpringbootIcon'
import ReactIcon from './content/ReactIcon'
import JavascriptIcon from './content/JavascriptIcon'
import TypescriptIcon from './content/TypescriptIcon'

function Skills() {
  return (
    <div
      id="skills"
      className="mx-auto p-2 mt-20 min-[540px]:w-[500px] lg:w-3/4 max-w-[1000px] text-white"
    >
      <h1 className="p-2 font-martel-sans text-3xl">Skills 📝</h1>
      <p className="p-2">
        Although I am new to the scene, I have had the pleasure of experiencing a variety of
        languages and frameworks with the main ones being:
      </p>
      <div className="mt-5">
        <div className="p-2 grid grid-cols-2 mx-auto min-[420px]:gap-4">
          <div className="flex flex-col gap-3 text-left min-[420px]:ml-6 min-[420px]:text-2xl text-lg border-r border-white transition-all duration-300 ease-in-out">
            <div className="inline-flex gap-1">
              <JavascriptIcon />
              <p>JavaScript</p>
            </div>
            <div className="inline-flex gap-1">
              <TypescriptIcon />
              <p>TypeScript</p>
            </div>
            <div className="inline-flex gap-1">
              <JavaIcon />
              <p>Java</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pl-3 text-left min-[420px]:ml-2 min-[420px]:text-2xl text-lg transition-all duration-300 ease-in-out">
            <div className="inline-flex gap-1">
              <ReactIcon />
              <p>React</p>
            </div>
            <div className="inline-flex gap-1 max-[320px]:text-base">
              <TailwindIcon />
              <p>TailwindCSS</p>
            </div>
            <div className="inline-flex gap-1">
              <SpringbootIcon />
              <p>Springboot</p>
            </div>
            <div className="inline-flex gap-1">
              <NodeJSIcon />
              <p>NodeJS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
