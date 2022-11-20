import homeimg from "../../images/home.svg";

const LandingPage = () => {
  return (
    <div className="landing__page">
      <span>
        We are the <h2>Best</h2>
        Plartform to <h2>manage</h2> your Store and <h2>Inventories</h2>
      </span>
      <span>
        <img clasName="home_image" src={homeimg} alt="pic" />
      </span>
    </div>
  );
};
export default LandingPage;
