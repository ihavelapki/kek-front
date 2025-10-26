import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import Search from "../../features/search";
import Userblock from "../../features/userblock";
import { useSession } from "../../entities/session/model/useSession";

const Navbar: React.FC = () => {
  const { isAuthenticated } = useSession();

  return (
    <div className={classes.navbar}>
      {isAuthenticated ? (
        <div className={classes.kekbar}>
          <div className={classes.kekbar_btns}>
            <Link className={classes.kekbar_link} to="/about">ABOUT</Link>           
            <Link className={classes.kekbar_link} to="/afisha">AFISHA</Link>
            <Link className={classes.kekbar_link} to="/bargrill">BAR&GRILL</Link>
          </div>
          <Search />
          <Userblock />
        </div>
      ) : (
        <div className={classes.kekbar}>
          <div className={classes.kekbar_btns}>
            <Link className={classes.kekbar_link} to="/about">ABOUT</Link>           
          </div>
          <Userblock />
        </div>
      )}
    </div>
  );
};

export default Navbar;
