function AboutMe() {
  return (
    <div
      className="p-5"
      id=""
    >
      <div className="mx-auto pb-2 m-0 min-[540px]:w-[500px] lg:w-3/4 max-w-[1000px] bg-[#17171a] rounded-lg drop-shadow-md">
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
          <div className="p-2 mx-2 h-[350px] resize-none rounded bg-[#46454b] text-white border-none overflow-y-scroll">
            <div className="grid grid-flow-row auto-rows-max m-0 text-left gap-y-2 overflow-y-scroll">
              <div className="w-fit h-fit">{`{`}</div>
              <div className="pl-4 inline-flex h-fit gap-2">
                <p className="text-[#6bc0ea]">{`"name":`}</p>
                <p>{`"Vincent La",`}</p>
              </div>
              <div className="pl-4 inline-flex h-fit gap-2">
                <p className="text-[#6bc0ea]">{`"role":`}</p>
                <p>{`"Jr. Full Stack Developer",`}</p>
              </div>
              <div className="pl-4 inline-flex h-fit gap-2">
                <p className="text-[#6bc0ea]">{`"desc":`}</p>
                <p>{`"I'm a passionate certified AWS Jr. Full Stack Developer
        that has only just begun their 
        journey within the wonderful
        field of software development 🚀 
        I like to bring innovative and 
        dynamic approaches to the table, 
        where I continue to improve on 
        the intricate dance of front-end 
        and back-end technologies to help 
        create smooth running applications",`}</p>
              </div>
              <div className="pl-4 inline-flex h-fit gap-2">
                <p className="text-[#6bc0ea]">{`"certificates":`}</p>
                <p>{`"AWS Certified Developer - Associate (DVA-C02)"`}</p>
              </div>
              <div>{`}`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
