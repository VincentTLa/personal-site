import type { MetaFunction } from '@remix-run/node'
import AboutMe from '~/components/AboutMe'

export const meta: MetaFunction = () => {
  return [
    { title: `Vincent's Website` },
    { name: 'About Me', content: `Welcome to Vincent's Website!` },
  ]
}

export default function Index() {
  return (
    <>
      <AboutMe />
    </>
  )
}
