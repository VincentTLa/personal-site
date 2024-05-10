import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem'
import { navList } from '~/constant'

type NavigationProps = {
  isOpen: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toggle: any
}

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

function Navigation({ isOpen, toggle }: NavigationProps) {
  return (
    <motion.ul
      variants={variants}
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      className="ml-8 fixed top-24 w-60"
      exit={{ opacity: 0 }}
    >
      {isOpen
        ? navList.map((navListItem) => (
            <MenuItem
              toggle={toggle}
              key={navListItem.i}
              title={navListItem.title}
              icon={navListItem.icon}
              url={navListItem.url}
            />
          ))
        : ''}
    </motion.ul>
  )
}

export default Navigation
