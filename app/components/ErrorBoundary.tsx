function ErrorBoundaryPage() {
  return (
    <div className="h-screen p-5 bg-gradient-to-br from-black to-slate-700">
      <div className="mx-auto pb-2 bg-[#17171a] rounded-lg">
        <div className="m-2 rounded">
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
              <p>ErrorPage.tsx</p>
            </div>
          </div>
        </div>

        <div className="text-left">
          <div
            className="p-6 mx-2 resize-none h-full rounded bg-[#46454b] text-white border-none overflow-y-scroll"
            style={{ overflowY: 'scroll' }}
          >
            <div className="">
              <h1 className="text-5xl">Uh oh!🤕</h1>
              <p className="font-martel-sans py-5">
                It looks like we&apos;ve ventured off somewhere far away... but thats okay! Click on
                the button below to return back on track!
              </p>
              <div className="m-5">
                <a
                  href="/"
                  className="w-36 rounded-full bg-orange-300 items-center p-4 border border-slate-400 shadow-lg drop-shadow-lg hover:animate-pulse"
                >
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorBoundaryPage
