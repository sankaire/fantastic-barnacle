import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
const user = localStorage.getItem("user");
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={!user ? <Login /> : <Dashboard />} />
          {/* <Route path="/" element={<LandingPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
};
render(<App />, document.getElementById("root"));
