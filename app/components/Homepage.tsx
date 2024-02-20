import Spiral from './Spiral'

const Homepage = () => {
  return (
    <div className="">
      <Spiral />
      <div className="text-center absolute left-1/2 top-2/3 text-off-white top">
        <ul>
          <li className="p-5 text-xl">
            <a href="/about">About Me</a>
          </li>
          <li className="p-5 text-xl">
            <a href="/learnings">Learnings</a>
          </li>
          <li className="p-5 text-xl">
            <a href="/recipes">Recipes</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Homepage
