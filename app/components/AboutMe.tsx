function AboutMe() {
  const aboutMeCode = `
  .aboutMe {
    name : Vincent;
    role: Jr. Full Stack Developer;
  }
  `

  return (
    <div
      className="p-5 h-screen"
      id="about"
    >
      {/* About Me Section */}
      {/* <div className="min-[540px]:mx-auto p-10 min-[540px]:w-[500px] bg-white rounded-2xl drop-shadow-xl overflow-hidden">
        <div className="py-5">
          <p className="text-2xl font-martel-sans font-bold py-2">About Me</p>
          <p className="font-martel-sans">
            I&apos;m a passionate certified AWS Jr. Full Stack Developer that has only just begun
            their journey within the wonderful field of software development 🚀 <br />
            <br />I like to bring innovative and dynamic approaches to the table, where I continue
            to improve on the intricate dance of front-end and back-end technologies to help create
            smooth running applications
          </p>
        </div>
      </div> */}

      <div className="mx-auto pb-2 m-0 min-[540px]:w-[500px] bg-[#24233b] z-10 rounded-lg drop-shadow-md">
        <div className="m-1 rounded">
          <div className="flex items-center pl-2">
            <div className="px-1">
              <span className="bg-red-600 inline-block items-center w-2 h-2 rounded-lg"></span>
            </div>
            <div className="px-1">
              <span className="bg-yellow-400 inline-block items-center w-2 h-2 rounded-lg"></span>
            </div>
            <div className="px-1">
              <span className="bg-green-500 inline-block items-center w-2 h-2 rounded-lg"></span>
            </div>
            <div className="pl-12 text-white text-[15px]">
              <p>AboutMe.tsx</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <textarea
            readOnly={true}
            defaultValue={aboutMeCode}
            name="code"
            className="p-2 h-[350px] min-[540px]:w-[450px] w-[300px] resize-none rounded bg-[#49465C] text-white border-none"
          ></textarea>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
