import CharacterSpiral from './CharacterSpiral'

const Spiral = () => {
  const ANIMATION_DURATION = 4000
  const words = 'Welcome To My Website'

  return (
    <div className={`h-full m-0 justify-center items-center overflow-hidden`}>
      <div
        id="spiral"
        className={`absolute flex items-center gap-2.5  top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 `}
      >
        <CharacterSpiral
          words={words}
          offset={0}
          animationDuration={ANIMATION_DURATION}
        />
      </div>
      <div
        id="spiral2"
        className={`absolute flex items-center gap-2.5 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 `}
      >
        <CharacterSpiral
          words={words}
          offset={(-1 * ANIMATION_DURATION) / 2}
          animationDuration={ANIMATION_DURATION}
        />
      </div>
    </div>
  )
}

export default Spiral
