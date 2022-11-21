import { render } from "react-dom";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashbord from "./dashboard/Dashboard";
import LandingPage from "./sections/Landing_page";
const user = localStorage.getItem("user");
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={!user ? <Login /> : <Dashbord />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};
render(<App />, document.getElementById("root"));
