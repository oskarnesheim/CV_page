import Navbar_Item from "./Navbar_Item";

function Navbar() {
  return (
    <div className="sidebar w-60 bg-gray-800 text-white p-4 fixed top-0 left-0 bottom-0">
      <Navbar_Item newPath="/" header="About me" />
      <Navbar_Item newPath="/cv" header="CV" />
      <Navbar_Item newPath="/projects" header="Projects" />
      <Navbar_Item newPath="/contact_me" header="Contact Me" />
    </div>
  );
}

export default Navbar;
