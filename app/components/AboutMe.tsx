function AboutMe() {
  return (
    <div
      className="p-5"
      id="about"
    >
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
          <div
            className="p-2 mx-2 h-[350px] resize-none rounded bg-[#49465C] text-white border-none overflow-y-scroll"
            style={{ overflowY: 'scroll' }}
          >
            <div className="grid grid-cols-6 mx-2">
              <div className="col-span-6 text-left">
                <p>{`{`}</p>
              </div>
              <div className="col-span-1 text-left text-[#6bc0ea] min-[420px]:ml-4">
                <p>{`"name":`}</p>
                <p>{`"role":`}</p>
                <p>{`"certs":`}</p>
                <p>{`"desc":`}</p>
              </div>
              <div className="col-span-5 text-left mx-6 min-[420px]:ml-6">
                <p>{`"Vincent"`}</p>
                <p className="text-nowrap">{`"Jr. Full Stack Developer"`}</p>
                <p className="text-nowrap">{`"AWS Developer (DVA-C02)"`}</p>
                <p>{`"I'm a passionate certified AWS Jr. Full Stack Developer
        that has only just begun their 
        journey within the wonderful
        field of software development 🚀 
        I like to bring innovative and 
        dynamic approaches to the table, 
        where I continue to improve on 
        the intricate dance of front-end 
        and back-end technologies to help 
        create smooth running applications"`}</p>
              </div>
              <div className="col-span-6 text-left">
                <p>{`}`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
