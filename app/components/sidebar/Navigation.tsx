import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem'
import { navList } from '~/constant'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

function Navigation() {
  return (
    <motion.ul
      variants={variants}
      className="ml-8 absolute top-24 w-60"
    >
      {navList.map((navListItem) => (
        <MenuItem
          i={navListItem.i}
          key={navListItem.i}
          title={navListItem.title}
          icon={navListItem.icon}
          url={navListItem.url}
        />
      ))}
    </motion.ul>
  )
}
// const itemIds = [0, 1, 2, 3, 4]

export default Navigation
