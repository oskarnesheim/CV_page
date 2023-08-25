/* eslint-disable @typescript-eslint/no-unused-vars */
interface IContactMeProps {
  email: string;
  phoneNumber: string;
  linkedIn: string;
  github: string;
}

const contactInfo: IContactMeProps = {
  email: "nesheimo@gmail.com",
  phoneNumber: "+47 90156493",
  linkedIn: "https://www.linkedin.com/in/oskar-nesheim-027862289/",
  github: "https://github.com/oskarnesheim",
};

function ContactMe() {
  return (
    <div className="min-w-full p-[25%] pt-[10%]">
      {/*  */}
      <header className=" text-2xl">Check me out on!</header>

      <div className="flex flex-row justify-center min-h-[200px]">
        <a
          href={contactInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-20 min-w-[170px]"
        >
          <img
            src="logoer/Github_icon.svg"
            alt="Check me out on github!"
            width={150}
            className="hover:w-[170px] transition-all duration-200 ease-in-out"
          />
        </a>
        <a
          href={contactInfo.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-20 min-w-[170px]"
        >
          <img
            width={150}
            src="logoer/LinkedIn_icon.svg"
            alt="Check me out on LinkedIn!"
            className="hover:w-[170px] transition-all duration-200 ease-in-out"
          />
        </a>
      </div>

      <div>
        <p className="text-2xl mb-5">Or contact me via </p>
      </div>
      <div className="flex flex-row text-xl text-gray-500">
        <p className="mr-5 hover:underline" onClick={() => {}}>
          {contactInfo.email}
        </p>
        <p className="text-black">or</p>
        <p className="ml-5 hover:underline">{contactInfo.phoneNumber}</p>
      </div>
    </div>
  );
}

export default ContactMe;
