import { useNavigate } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-unused-vars */
interface INavPage {
  newPath: string;
  header: string;
}

function Navbar_Item({ newPath, header }: INavPage) {
  const navigate = useNavigate();
  function switchPage(page: string) {
    navigate(page);
  }
  return (
    <div onClick={() => switchPage(newPath)} className="m-4 ml-7">
      <p className=" text-white no-underline font-semibold hover:text-gray-300 text-xl">
        {header}
      </p>
    </div>
  );
}

export default Navbar_Item;
