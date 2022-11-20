import { render } from "react-dom";
import axios from "axios";
const App = () => {
  const getData = async () => {
    try {
      const data = await axios.get("https://umbrella-2gw5.onrender.com/api/v1");
      const res = data.data;
      console.log(res);
      setMessage(res.message);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div>
      <button onClick={getData}>Click</button>
    </div>
  );
};

render(<App />, document.getElementById("root"));
