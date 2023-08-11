function Navbar() {
  return (
    <nav className="sidebar w-48 bg-gray-800 text-white p-4 fixed top-0 left-0 bottom-0">
      <ul>
        <li>
          <a href="/about">About me</a>
        </li>
        <li>
          <a href="/cv">cv</a>
        </li>
        <li>
          <a href="/contact_me">contact me</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
