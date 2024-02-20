import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: `Vincent's Website` },
    { name: 'About Me', content: `Welcome to Vincent's Website!` },
  ]
}

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1 className="">About ME</h1>
    </div>
  )
}
