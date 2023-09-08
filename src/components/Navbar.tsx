/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import Navbar_Item from "./Navbar_Item";

function Navbar() {
  const [show, setShow] = useState(true);

  function setScroll() {
    if (window.scrollY > 50) {
      setShow(false);
    }
    setShow(true);
  }

  useEffect(() => {
    console.log("logscroll");
    window.addEventListener("scroll", setScroll);

    return () => {
      window.removeEventListener("scroll", setScroll);
    };
  }, []);

  return (
    <div
      className={`${
        !show && "hidden"
      } lg:w-[17%] bg-gray-800 text-white py-4 sticky lg:fixed top-0 left-0 lg:bottom-0 right-0 w-full flex flex-row lg:flex-col`}
    >
      <Navbar_Item
        icon="public/logoer/person_icon.png"
        newPath="/"
        header="About me"
      />
      <Navbar_Item icon="public/logoer/CV_icon.png" newPath="/cv" header="CV" />
      <Navbar_Item
        icon="public/logoer/projects_icon.png"
        newPath="/projects"
        header="Projects"
      />
      <Navbar_Item
        icon="public/logoer/contact_me_icon.png"
        newPath="/contact_me"
        header="Contact Me"
      />
    </div>
  );
}

export default Navbar;
