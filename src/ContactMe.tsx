import { useState } from "react";

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

type ContactMeProps = {
  mail: boolean;
  tlf: boolean;
};

function ContactMe() {
  const [clipboard, setClipboard] = useState<ContactMeProps>({
    mail: false,
    tlf: false,
  });

  function updateClipboard(newClip: string) {
    if (newClip === "mail") {
      navigator.clipboard.writeText(contactInfo.email);
      if (clipboard.tlf) {
        clipboard.tlf = false;
        // setClipboard(() => ({ ...clipboard, tlf: false }));
      }
      setClipboard({ ...clipboard, mail: true });
    } else if (newClip === "tlf") {
      navigator.clipboard.writeText(contactInfo.phoneNumber);
      if (clipboard.mail) {
        clipboard.mail = false;
        // setClipboard(() => ({ ...clipboard, mail: false }));
      }
      setClipboard({ ...clipboard, tlf: true });
    }
  }

  const notCheckedIcon = "logoer/Clipboard.svg";
  const checkedIcon = "logoer/Checked.svg";

  return (
    <div className="flex flex-col items-center pt-[10%]">
      <div className="flex flex-col items-start">
        <header className="text-2xl">Check me out on!</header>

        <div className="flex flex-row justify-center min-h-[200px]">
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="md:mr-20 min-w-[170px]"
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
            className="md:mr-20 min-w-[170px]"
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
        <div className="flex flex-col md:flex-row text-xl text-gray-500">
          <a target="_blank" href="mailto:nesheimo@gmail.com">
            <p className="mr-5 hover:underline">{contactInfo.email}</p>
          </a>
          <img
            src={clipboard.mail ? checkedIcon : notCheckedIcon}
            alt="Copy"
            className="max-h-[30px] hidden md:block"
            onClick={() => updateClipboard("mail")}
          />

          {/* <p className="text-black"> or</p> */}
          <a href="tel:+4790156493">
            <p className="ml-5 hover:underline">{contactInfo.phoneNumber}</p>
          </a>
          <img
            src={clipboard.tlf ? checkedIcon : notCheckedIcon}
            alt="Copy"
            className="max-h-[30px] hidden md:block"
            onClick={() => updateClipboard("tlf")}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
