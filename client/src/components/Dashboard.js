import Home from "../pages/Home";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Dashboard = () => {
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
export default Dashboard;
