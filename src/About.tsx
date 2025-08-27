import { useRecoilState } from "recoil";
import { bigScreen } from "./atoms/atoms";
import { useState } from "react";

function About() {
  const [hidePicture] = useRecoilState(bigScreen);
  const [someText] = useState("");

  return (
    <div>
      {someText}
      {hidePicture && (
        <img src="oskar/Oversiktsbilde.jpeg" alt="Råtøff bakgrunn" />
      )}
      <div className="absolute top-10">
        <div className="mt-8 bg-white bg-opacity-80 p-8 rounded-lg shadow-lg text-center md:text-left w-full sm:w-5/6 md:w-4/6 lg:w-1/2 m-auto mb-20">
          <img
            src="oskar/Oskar_portrettbilde.jpg"
            alt="Profile"
            className="mx-auto rounded-full h-[300px] "
          />
          {someText}
          <h1 className="text-3xl font-semibold mb-4">Oskar Iglebæk Nesheim</h1>
          <p className="text-lg">
            {" "}
            Her skal jeg skrive noe mer om meg selv. Hello, my name is Oskar and
            I am a 22 year old student at NTNU. I am currently at my third year
            at the bachelor program in Informatics. I have found informatics to
            be a very interesting field of study, and I am looking forward to
            learn more about it. In the last two years I have learned alot about
            different technologies like React, Typescript and Tailwindcss. This
            page is in fact build on those technologies. On my freetime I love
            to be outdoors, and I am a big fan of skiing and climbing. Whenever
            I have a free weekend I try to drive up to the mountains to go
            skiing. I also very much enjoy the studentlife here in Trondheim,
            where I play beachbolleyball and football.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
