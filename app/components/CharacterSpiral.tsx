type CharacterSpiralType = {
  words: string
  offset: number
  animationDuration: number
}

function CharacterSpiral({ words, offset, animationDuration }: CharacterSpiralType) {
  const splitString = words.split('')

  return (
    <div>
      {splitString.map((char, i) => (
        <div
          key={i}
          className="character"
          style={{ animationDelay: `-${i * (animationDuration / 16) - offset}ms` }}
        >
          {char}
        </div>
      ))}
    </div>
  )
}

export default CharacterSpiral
