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
    <div onClick={() => switchPage(newPath)} className="p-2">
      <p className=" text-white no-underline font-semibold hover:text-gray-300 text-lg">
        {header}
      </p>
    </div>
  );
}

export default Navbar_Item;
