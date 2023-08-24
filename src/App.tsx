import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="ml-60">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
