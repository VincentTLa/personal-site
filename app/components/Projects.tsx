import GithubCard from './GithubCard'

function Projects() {
  return (
    <div
      id="skills"
      className="h-screen mx-auto p-2 pt-10 m-0 min-[540px]:w-[500px] lg:w-3/4 max-w-[1000px] text-white"
    >
      <h1 className="p-2 font-martel-sans text-3xl">Projects 💡</h1>
      <p className="p-2">I like to make things, feel free to check them out below!</p>
      <div className="flex flex-col gap-y-3">
        <GithubCard
          projectName="deal-searcher"
          link="https://github.com/VincentTLa/deal-searcher"
          skills="Typescript | React Native | Express"
        >
          An application to help search for deals using the OzBargain website.
        </GithubCard>
        <GithubCard
          projectName="budget-tracker"
          link="https://github.com/brandonwilbert8/budget-tracker"
          skills="Typescript | React Native | Express.js | MongoDB"
        >
          A simple budget tracker application with customised plans that assist users in managing
          their income. Made in collaboration with Brandon Wilbert.
        </GithubCard>
        <GithubCard
          projectName="personal-site"
          link="https://github.com/VincentTLa/personal-site"
          skills="Typescript | Remix.run | TailwindCSS"
        >
          The repository for this current site!
        </GithubCard>
      </div>
    </div>
  )
}

export default Projects
