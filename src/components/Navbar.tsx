import Navbar_Item from "./Navbar_Item";
import { useRecoilState } from "recoil";
import { bigScreen } from "../atoms/atoms";
function Navbar() {
  //   const [bigScreen, setBigScreen] = useState(window.innerWidth > 768);
  const [navbarToTheSide, setNavbarToTheSide] = useRecoilState(bigScreen);

  window.onresize = () => {
    setNavbarToTheSide(window.innerWidth > 790);
  };

  {
    return !navbarToTheSide ? (
      <div
        className={
          "bg-gray-400 w-full max-h-20 text-white flex flex-row justify-between shadow-lg"
        }
      >
        <Navbar_Item newPath="/" header="About me" icon="logoer/user.png" />
        <Navbar_Item newPath="/cv" header="CV" icon="logoer/education.png" />
        <Navbar_Item
          newPath="/projects"
          header="Projects"
          icon="logoer/coding.png"
        />
        <Navbar_Item
          newPath="/contact_me"
          header="Contact Me"
          icon="logoer/contact-mail.png"
        />
      </div>
    ) : (
      <div
        className={
          "bg-gray-800 w-[21%] lg:w-[16%] text-white py-4 fixed top-0 left-0 bottom-0"
        }
      >
        <Navbar_Item newPath="/" header="About me" />
        <Navbar_Item newPath="/cv" header="CV" />
        <Navbar_Item newPath="/projects" header="Projects" />
        <Navbar_Item newPath="/contact_me" header="Contact Me" />
      </div>
    );
  }
}

export default Navbar;
