import { useState } from "react";
import Navbar_Item from "./Navbar_Item";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";

function Navbar() {
  const [bigScreen, setBigScreen] = useState(true);
  window.onresize = () => {
    setBigScreen(window.innerWidth > 768);
  };
  {
    return !bigScreen ? (
      <div className={" w-full fixed top-0 left-0 right-0 z-40"}>
        <Menu>
          <MenuButton as={Button} height={"100px"}>
            <img src="logoer/Menu_icon.png" alt="Click to change path" />
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Navbar_Item
                icon="logoer/person_icon.png"
                newPath="/"
                header="About me"
              />
            </MenuItem>
            <MenuItem>
              <Navbar_Item
                icon="logoer/CV_icon.png"
                newPath="/cv"
                header="CV"
              />
            </MenuItem>
            <MenuItem>
              <Navbar_Item
                icon="logoer/projects_icon.png"
                newPath="/projects"
                header="Projects"
              />
            </MenuItem>
            <MenuItem>
              <Navbar_Item
                icon="logoer/contact_me_icon.png"
                newPath="/contact_me"
                header="Contact Me"
              />
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    ) : (
      <div
        className={
          "bg-gray-800 w-[21%] lg:w-[16%] text-white w- py-4 fixed top-0 left-0 bottom-0"
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
