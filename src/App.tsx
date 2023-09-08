import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      {/* min-w-full p-[25%] pt-[10%] w-1/2 m-auto mt-20 w-1/2 m-auto mt-20 */}
      <div className="lg:ml-60">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
