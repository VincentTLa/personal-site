import { ReactNode } from 'react'

type SocialCardProps = {
  children: ReactNode
  icon?: ReactNode
  link?: string
}

const SocialCard = ({ children, icon, link }: SocialCardProps) => {
  return (
    <div className="p-2 border bg-white border-slate-100 rounded-xl shadow-md drop-shadow-sm min-[540px]:w-[350px] min-[540px]:mx-auto hover:scale-105 hover:bg-gray-100">
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex gap-4 p-2">
            <div>{icon}</div>
            <h1 className="font-extralight">{children}</h1>
          </div>
        </a>
      ) : (
        <div className="flex gap-4 p-2">
          <div>{icon}</div>
          <h1 className="font-extralight">{children}</h1>
        </div>
      )}
    </div>
  )
}

export default SocialCard
