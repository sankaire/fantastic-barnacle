import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const body = {
    email: email,
    password: password,
  };
  async function handleSubmit() {
    try {
      const req = await axios.post(
        "https://umbrella-2gw5.onrender.com/api/v1/auth/login",
        body
      );
      const res = req.data;
      toast.success("Login Succes", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        onClose: () => (window.location = "/"),
      });
      localStorage.setItem("user", JSON.stringify(res));
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message, {
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
          setLoading(true);
        }}
      >
        <label htmlFor="email">
          <span>email</span>
          <input
            type="email"
            id="email"
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
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
        <button className="btn">
          {loading ? (
            <div class="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            "Login"
          )}
        </button>
        <p>
          Don't have an acount? <a href="/signup">Create one.</a>
        </p>
      </form>
    </div>
  );
};
export default Login;
