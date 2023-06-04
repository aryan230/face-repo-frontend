import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div className="main-home">
      <div className="home-inside">
        <Link to="/login" className="home-links">
          Login
        </Link>
        <Link to="/register" className="home-links">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
