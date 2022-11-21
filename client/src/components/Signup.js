import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [company, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const body = {
    email: email,
    username: username,
    company: company,
    password: password,
  };

  async function handleSubmit() {
    try {
      const req = await axios.post(
        "http://localhost:5000/api/v1/auth/signup",
        body
      );
      const res = req.data;
      localStorage.setItem("user", JSON.stringify(res.user.user));
      toast.success("Signup Succes", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        onClose: () => navigate("/dashboard"),
      });
    } catch (error) {
      toast.error(error.response.data.error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <div className="login_container">
      <div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggablenavigate
          pauseOnHover
          theme="light"
        />
      </div>
      <h2>Login to dashboard</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label htmlFor="email">
          <span>email</span>
          <input
            type="text"
            id="email"
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label htmlFor="username">
          <span>username</span>
          <input
            type="text"
            id="username"
            placeholder="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <label htmlFor="company">
          <span>company</span>
          <input
            type="text"
            id="company"
            placeholder="company"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
        </label>
        <label htmlFor="pasword">
          <span>password</span>
          <input
            type="password"
            id="password"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button className="btn">Signup</button>
      </form>
    </div>
  );
};
export default Signup;
