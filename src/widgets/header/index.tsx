import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import Search from "../../features/search";
import Userblock from "../../features/userblock";
import { useSession } from "../../entities/session/model/useSession";
import { useAppContext } from "../../shared/context/appContext";



const Navbar: React.FC = () => {
  const { isAuthenticated } = useSession();
  const { currentApp } = useAppContext();

  if (currentApp === "home") {
    return (
      <div className={classes.navbar}>
        <div className={classes.kekbar}>
          <Userblock />
        </div>
      </div>
    );
  }

  if (currentApp === "radio") {
    return (
      <div className={classes.navbar}>
        <div className={classes.kekbar}>
          <div className={classes.kekbar_btns}>
            <Link className={classes.kekbar_link} to="/">Home</Link>
            <Link className={classes.kekbar_link} to="/radio">Radio</Link>
            <Link className={classes.kekbar_link} to="/radio/about">About</Link>
          </div>
          <Userblock />
        </div>
      </div>
    );
  }

  return (
    <div className={classes.navbar}>
      {isAuthenticated ? (
        <div className={classes.kekbar}>
          <div className={classes.kekbar_btns}>
            <Link className={classes.kekbar_link} to="/">Home</Link>
            <Link className={classes.kekbar_link} to="/cinema/about">About</Link>
            <Link className={classes.kekbar_link} to="/cinema/afisha">Afisha</Link>
            <Link className={classes.kekbar_link} to="/cinema/bargrill">Bar&Grill</Link>
          </div>
          <Search />
          <Userblock />
        </div>
      ) : (
        <div className={classes.kekbar}>
          <div className={classes.kekbar_btns}>
            <Link className={classes.kekbar_link} to="/">Home</Link>
            <Link className={classes.kekbar_link} to="/cinema/about">About</Link>         
          </div>
          <Userblock />
        </div>
      )}
    </div>
  );
};



export default Navbar;
