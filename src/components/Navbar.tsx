import Navbar_Item from "./Navbar_Item";

function Navbar() {
  return (
    <div className="sidebar w-48 bg-gray-800 text-white p-4 fixed top-0 left-0 bottom-0">
      <Navbar_Item newPath="/" header="About me" />
      <Navbar_Item newPath="/cv" header="CV" />
      <Navbar_Item newPath="/contact_me" header="Contact Me" />
      <div>
        <a
          href="https://github.com/oskarnesheim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="Github_icon.svg" alt="Check me out on github!" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
