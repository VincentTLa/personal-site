import type { MetaFunction } from '@remix-run/node'
import Homepage from '~/components/Homepage'

export const meta: MetaFunction = () => {
  return [
    { title: `Vincent's Website` },
    { name: 'Homepage', content: `Welcome to Vincent's Website!` },
  ]
}

export default function Index() {
  return (
    <div className="h-screen bg-gradient-to-br from-background to-gray-800">
      <Homepage />
    </div>
  )
}
