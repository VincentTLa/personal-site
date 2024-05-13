import TextAnim from './TextAnimation'
import Profile from '../../public/images/profile.png'

const Landing = () => {
  return (
    <div className="h-screen mx-2">
      <div className="mt-20 mx-5 bg-white h-3/4 rounded-2xl drop-shadow-xl">
        {/* Hero Greeting */}
        <div className="p-4 fixed">
          <TextAnim />
        </div>
        <div className="pt-28">
          <img
            src={Profile}
            alt="profile"
            className="w-3/4 h-3/4 mx-auto rounded-[50%] shadow-md"
          />
          <div className="bg-green-100 mt-6">
            <li></li>
            <li></li>
            <li></li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
