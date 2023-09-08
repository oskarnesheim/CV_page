function About() {
  return (
    <div className="">
      <img
        src="oskar/Oversiktsbilde.jpeg"
        alt="Råtøff bakgrunn"
        className="w-full mt-30 lg:m-auto"
      />
      <div className="flex justify-center absolute lg:top-[400px]">
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg text-center md:text-left w-full lg:w-[50%] mx-auto">
          <img
            src="oskar/Oskar_portrettbilde.jpg"
            alt="Profile"
            className="mx-auto rounded-full h-[300px] "
          />
          <h1 className="text-3xl font-semibold mb-4">Oskar Iglebæk Nesheim</h1>
          <p className="text-lg">
            Hello, my name is Oskar and I am a 22 year old student at NTNU. I am
            currently at my third year at the bachelor program in Informatics. I
            have found informatics to be a very interesting field of study, and
            I am looking forward to learn more about it. In the last two years I
            have learned alot about different technologies like React,
            Typescript and Tailwindcss. This page is in fact build on those
            technologies. On my freetime I love to be outdoors, and I am a big
            fan of skiing and climbing. Whenever I have a free weekend I try to
            drive up to the mountains to go skiing. I also very much enjoy the
            studentlife here in Trondheim, where I play beachbolleyball and
            football.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
