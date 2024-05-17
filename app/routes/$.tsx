// routes/[...].tsx
import { ActionFunction, LinksFunction, LoaderFunction, redirect } from '@remix-run/node'

export const links: LinksFunction = () => {
  return []
}

export const loader: LoaderFunction = async () => {
  return redirect('/')
}

export const action: ActionFunction = async () => {
  return redirect('/')
}

export default function CatchAllRoute() {
  return null
}
