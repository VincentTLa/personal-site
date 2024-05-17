import { ReactNode } from 'react'

type GithubCardProps = {
  projectName: string
  children: ReactNode
  link?: string
  skills: string
}

const GithubCard = ({ projectName, children, link, skills }: GithubCardProps) => {
  return (
    <div className="p-2 mx-2 border text-black bg-white border-slate-100 rounded-xl shadow-xl drop-shadow-xl min-[540px]:w-[500px] lg:w-full max-w-[1000px] min-[540px]:mx-auto hover:scale-105 hover:bg-gray-100 transition-all duration-300 ease-in-out">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex flex-col min-h-32">
          <div className="inline-flex items-center gap-1">
            <h1 className="font-extrabold text-blue-600 p-2">{projectName}</h1>
            <div className="px-2 text-sm text-slate-600 rounded-full border border-slate-400">
              Public
            </div>
          </div>
          <p className="font-martel-sans p-2">{children}</p>
          <p className="font-extralight p-2">{skills}</p>
        </div>
      </a>
    </div>
  )
}

export default GithubCard
