import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="md:ml-[16%]">{<Outlet />}</div>
    </div>
  );
}

export default App;
