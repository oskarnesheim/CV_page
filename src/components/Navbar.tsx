import Navbar_Item from "./Navbar_Item";

function Navbar() {
  return (
    <nav className="sidebar w-48 bg-gray-800 text-white p-4 fixed top-0 left-0 bottom-0">
      <ul>
        <Navbar_Item newPath="/" header="About me" />
        <Navbar_Item newPath="/cv" header="CV" />
        <Navbar_Item newPath="/contact_me" header="Contact Me" />
      </ul>
    </nav>
  );
}

export default Navbar;
