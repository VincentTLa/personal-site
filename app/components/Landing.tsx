/* eslint-disable @typescript-eslint/no-explicit-any */
import TextAnim from './TextAnimation'
import Profile from '../../public/images/profile.png'
import SocialCard from './SocialCard'
import { GithubIcon } from '../components/content/GithubIcon'
import LinkedIcon from '../components/content/LinkedInIcon'
import { MailIcon } from '../components/content/MailIcon'

const Landing = () => {
  return (
    <div className="pt-20 mx-2">
      <div className="mx-4 min-[540px]:mx-auto p-4 pb-20 min-[540px]:w-[500px] lg:w-3/4 max-w-[1000px] bg-white rounded-2xl drop-shadow-xl overflow-hidden">
        <div className="wave w-[550px] h-[750px] lg:w-[1200px] lg:h-[1400px]"></div>
        <div className="wave w-[550px] h-[750px] lg:w-[1200px] lg:h-[1400px]"></div>
        <div className="wave w-[550px] h-[750px] lg:w-[1200px] lg:h-[1400px]"></div>
        {/* Hero Greeting */}
        <div className="p-4 fixed text-white">
          <TextAnim />
        </div>

        <div className="pt-32">
          <img
            src={Profile}
            alt="profile"
            className="w-3/4 h-3/4 mx-auto  min-[425px]:w-[250px] min-[425px]:h-[250px] rounded-[50%] shadow-2xl drop-shadow-2xl relative"
          />
          <div className="flex flex-col gap-y-2 mt-6">
            <SocialCard
              icon={<GithubIcon color="black" />}
              link="https://github.com/VincentTLa"
            >
              VincentTLa
            </SocialCard>
            <SocialCard
              icon={<LinkedIcon />}
              link="https://www.linkedin.com/in/vincent-la-2ab335212/"
            >
              Vincent La
            </SocialCard>
            <SocialCard icon={<MailIcon color="black" />}>vtla101@gmail.com</SocialCard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
