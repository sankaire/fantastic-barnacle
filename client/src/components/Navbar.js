const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__left">
        <h1 className="logo">Symentical</h1>
      </div>
      <div className="nav__right">
        <ul>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <button className="btn" onClick={() => (window.location = "/dashboard")}>
        Dashbord
      </button>
    </nav>
  );
};
export default Navbar;
