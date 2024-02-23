import { motion } from 'framer-motion'
import { Link } from '@remix-run/react'

type MenuItemType = {
  i: number
  title: string
  icon: string
  url: string
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF']

export const MenuItem = ({ i, title, icon, url }: MenuItemType) => {
  const style = { border: `2px solid ${colors[i]}` }
  return (
    <motion.li
      className="list-none mb-5 flex items-center cursor-pointer"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={`${url}`}>
        {/* Icon */}
        <div
          className="w-10 h-10 rounded-[50%] flex-[40px 0] mr-5"
          style={style}
        >
          {icon}
        </div>
        {/* Text */}
        <div
          className="rounded-md w-52 h-5 flex-1"
          style={style}
        >
          {title}
        </div>
      </Link>
    </motion.li>
  )
}
