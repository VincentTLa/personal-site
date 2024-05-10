import TextAnim from './TextAnimation'

const Landing = () => {
  return (
    <div className="h-screen mx-2">
      <div className="mt-20 mx-5 bg-white h-3/4 rounded-2xl drop-shadow-xl">
        {/* Hero Greeting */}
        <div className="p-4">
          <TextAnim />
        </div>
      </div>
    </div>
  )
}

export default Landing
