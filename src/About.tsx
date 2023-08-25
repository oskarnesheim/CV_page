function About() {
  return (
    <div className="h-screen flex-row items-center justify-center">
      <img
        src="Kul_kat.jpg"
        alt="Råtøff bakgrunn"
        className=" border-red-500 border-4"
      />
      <div className="flex justify-center">
        <div className="mx-4 md:mx-8 bg-white bg-opacity-80 p-8 rounded-lg shadow-lg text-center md:text-left w-[50%] ml-[25%] mr-[25%]">
          <img
            src="oskar/Kul_katt.jpg"
            alt="Profile"
            className="mx-auto rounded-full border-4 border-white h-32 w-32 shadow-lg"
          />
          <h1 className="text-3xl font-semibold mb-4">Oskar Iglebæk Nesheim</h1>
          <p className="text-lg">
            Greetings, I'm a 22-year-old student, currently engrossed in the
            captivating realm of Informatics at NTNU, Trondheim. My journey
            through this discipline has kindled a profound passion for coding,
            inspiring me to explore its intricacies both within the academic
            sphere and during my leisure moments. The thrill of solving coding
            challenges and the allure of discovering new coding languages have
            become integral to my daily life. Whether at school or in my spare
            time, the world of coding has become an endless wellspring of
            fascination and growth. Beyond the digital landscape, I'm an avid
            outdoor enthusiast. Skiing down pristine slopes and conquering
            challenging climbs are pursuits that invigorate my spirit and
            provide a perfect counterpoint to my academic endeavors. In essence,
            my journey combines the excitement of coding with the exhilaration
            of outdoor pursuits, forging a path of balanced exploration and
            continual learning. Best regards, [Your Name]
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
