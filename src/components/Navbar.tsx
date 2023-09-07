import Navbar_Item from "./Navbar_Item";

function Navbar() {
  return (
    <div className="sidebar w-[17%] bg-gray-800 text-white py-4 fixed top-0 left-0 bottom-0">
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
