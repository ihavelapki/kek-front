import { NavLink } from "react-router-dom";

import Search from "../../features/search";
import Userblock from "../../features/userblock";
import { useSession } from "../../entities/session/model/useSession";
import { useAppContext } from "../../shared/context/appContext";

import classes from "./Navbar.module.css";

const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? `${classes.kekbar_link} ${classes.active}`
    : classes.kekbar_link;

const Navbar: React.FC = () => {
  const { isAuthenticated } = useSession();
  const { currentApp } = useAppContext();

  if (currentApp === "home") {
    return (
      <header className={classes.navbar}>
        <div className={classes.kekbar}>
          <Userblock />
        </div>
      </header>
    );
  }

  if (currentApp === "radio") {
    return (
      <header className={classes.navbar}>
        <div className={classes.kekbar}>
          <nav className={classes.kekbar_btns}>
            <NavLink className={getNavLinkClass} to="/">
              Home
            </NavLink>
            <NavLink className={getNavLinkClass} to="/radio">
              Radio
            </NavLink>
            <NavLink className={getNavLinkClass} to="/radio/about">
              About
            </NavLink>
          </nav>

          <Userblock />
        </div>
      </header>
    );
  }

  return (
    <header className={classes.navbar}>
      <div className={classes.kekbar}>
        <nav className={classes.kekbar_btns}>
          <NavLink className={getNavLinkClass} to="/">
            Home
          </NavLink>

          <NavLink className={getNavLinkClass} to="/cinema/about">
            About
          </NavLink>

          {isAuthenticated && (
            <>
              <NavLink className={getNavLinkClass} to="/cinema/afisha">
                Afisha
              </NavLink>

              <NavLink className={getNavLinkClass} to="/cinema/bargrill">
                Bar&Grill
              </NavLink>
            </>
          )}
        </nav>

        {isAuthenticated && <Search />}

        <Userblock />
      </div>
    </header>
  );
};

export default Navbar;