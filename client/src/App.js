import { render } from "react-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./sections/Landing_page";
const App = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
    </>
  );
};
render(<App />, document.getElementById("root"));
