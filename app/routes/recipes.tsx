import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [{ title: `Vincent's Website` }, { name: 'Recipes', content: `Let him cook!` }]
}

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1 className="">Recipes</h1>
    </div>
  )
}
