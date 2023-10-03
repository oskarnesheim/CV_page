import { useRecoilState } from "recoil";
import { bigScreen } from "./atoms/atoms";

function About() {
  const [hidePicture] = useRecoilState(bigScreen);
  return (
    <div className="">
      {hidePicture && (
        <img
          src="oskar/Oversiktsbilde.jpeg"
          alt="Råtøff bakgrunn"
          // className={`hidden md:block`}
        />
      )}
      <div className="absolute top-10">
        <div className="mt-8 bg-white bg-opacity-80 p-8 rounded-lg shadow-lg text-center md:text-left w-full sm:w-5/6 md:w-4/6 lg:w-1/2 m-auto mb-20">
          ;
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

// Greetings, I'm a 22-year-old student, currently engrossed in the
// captivating realm of Informatics at NTNU, Trondheim. My journey
// through this discipline has kindled a profound passion for coding,
// inspiring me to explore its intricacies both within the academic
// sphere and during my leisure moments. The thrill of solving coding
// challenges and the allure of discovering new coding languages have
// become integral to my daily life. Whether at school or in my spare
// time, the world of coding has become an endless wellspring of
// fascination and growth. Beyond the digital landscape, I'm an avid
// outdoor enthusiast. Skiing down pristine slopes and conquering
// challenging climbs are pursuits that invigorate my spirit and
// provide a perfect counterpoint to my academic endeavors. In essence,
// my journey combines the excitement of coding with the exhilaration
// of outdoor pursuits, forging a path of balanced exploration and
// continual learning. Best regards, [Your Name]
