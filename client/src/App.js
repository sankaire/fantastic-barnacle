import { render } from "react-dom";
import axios from "axios";
import { useState } from "react";
const App = () => {
  const [message, setMessage] = useState("");
  const getData = async () => {
    try {
      const data = await axios.get("http://localhost:5000/api/v1");
      const res = data.data;
      setMessage(res.message);
    } catch (error) {
      console.log(error.response.data, error.response.status);
    }
  };
  getData();
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

render(<App />, document.getElementById("root"));
