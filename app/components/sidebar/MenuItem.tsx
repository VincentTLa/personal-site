/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from 'framer-motion'
import { Link } from '@remix-run/react'

type MenuItemType = {
  title: string
  icon: any
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

export const MenuItem = ({ title, icon, url }: MenuItemType) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to={`${url}`}
        className="list-none mb-5 flex items-center cursor-pointer"
      >
        {/* Icon */}
        <div className="w-10 h-10 rounded-[50%] flex-[40px 0] mr-5">{icon}</div>
        {/* Text */}
        <div className="text-xl font-martel-sans text-gray-900">{title}</div>
      </Link>
    </motion.li>
  )
}
