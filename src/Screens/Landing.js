import "./Landing.css";
import ShareIcon from "@mui/icons-material/Share";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
const Landing = () => {
  return (
    <div className="landing-page">
      <nav>
        <h2 className="nav-element">
          {" "}
          <HomeIcon sx={{ mr: 1 }} />
          Home
        </h2>
        <h2 className="nav-element">
          <FeaturedPlayListIcon sx={{ mr: 1 }} />
          Logs
        </h2>
        <h2 className="nav-element">
          <PeopleIcon sx={{ mr: 1 }} />
          Peoples
        </h2>
        <h2 className="nav-element">
          <HomeIcon sx={{ mr: 1 }} />
          Logout
        </h2>
      </nav>
      <div className="connected">
        <div className="inside-connected">
          <ShareIcon style={{ color: "rgb(71, 227, 255)" }} />
          <h3 className="connected-text">Connected</h3>
        </div>
      </div>
      <div className="logs">
        <div className="logs-inside"></div>
      </div>
    </div>
  );
};

export default Landing;
