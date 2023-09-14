import { useNavigate } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-unused-vars */
interface INavPage {
  newPath: string;
  header: string;
  icon?: string;
}

function Navbar_Item({ newPath, header, icon }: INavPage) {
  const navigate = useNavigate();
  function switchPage(page: string) {
    navigate(page);
  }
  return (
    <div onClick={() => switchPage(newPath)} className="m-4 ml-7">
      <p className="text-white hover:underline underline-offset-4 font-semibold hover:text-gray-300 text-xl">
        {header}
      </p>
      <img className="lg:hidden " src={icon} alt="" />
    </div>
  );
}

export default Navbar_Item;
