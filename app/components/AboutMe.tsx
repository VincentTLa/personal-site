import TextAnim from './TextAnimation'

function AboutMe() {
  return (
    <div className="mx-5 mt-5 p-5">
      {/* Hero Greeting */}
      <div className=" mb-20">
        <TextAnim />
      </div>
      {/* About Me Section */}
      <div className="py-5 text-white">
        <p className="text-2xl font-martel-sans">About Me</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non maximus erat, vitae
          consequat lorem. Morbi pharetra quam scelerisque turpis pretium, in lacinia quam laoreet.
          Duis sit amet nunc id quam mattis mattis. Maecenas velit mi, lacinia a nisl non, volutpat
          imperdiet ligula. Vivamus sodales euismod ipsum, non imperdiet nulla vestibulum fermentum.
          Nam bibendum fringilla maximus.
          <br />
          <br />
          Donec semper quam quam, nec viverra dui dignissim nec. Nunc mauris tellus, posuere
          molestie ante ut, facilisis tempus urna. Nunc vel quam finibus ipsum semper blandit
          maximus vitae nisl. Quisque vel pharetra tortor. Sed sed ullamcorper diam. Ut non magna
          quis dui pharetra ornare. Morbi mattis sapien et neque suscipit, id consectetur quam
          ornare.
        </p>
      </div>
      <div className="py-5 text-white">
        <p className="text-2xl font-martel-sans">Projects</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non maximus erat, vitae
          consequat lorem. Morbi pharetra quam scelerisque turpis pretium, in lacinia quam laoreet.
          Duis sit amet nunc id quam mattis mattis. Maecenas velit mi, lacinia a nisl non, volutpat
          imperdiet ligula. Vivamus sodales euismod ipsum, non imperdiet nulla vestibulum fermentum.
          Nam bibendum fringilla maximus.
          <br />
          <br />
          Donec semper quam quam, nec viverra dui dignissim nec. Nunc mauris tellus, posuere
          molestie ante ut, facilisis tempus urna. Nunc vel quam finibus ipsum semper blandit
          maximus vitae nisl. Quisque vel pharetra tortor. Sed sed ullamcorper diam. Ut non magna
          quis dui pharetra ornare. Morbi mattis sapien et neque suscipit, id consectetur quam
          ornare.
        </p>
      </div>
      <div className="py-5 text-white">
        <p className="text-2xl font-martel-sans">Socials</p>
      </div>
    </div>
  )
}

export default AboutMe
