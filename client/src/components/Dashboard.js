import Home from "../pages/Home";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default Dashboard = () => {
  return (
    <div>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <Home />
        <div className="flex m-5"></div>
      </div>
    </div>
  );
};
