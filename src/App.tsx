import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex">
      <Navbar />
      <div className="ml-52">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
