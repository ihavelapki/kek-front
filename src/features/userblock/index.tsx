import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Userblock.module.css";
import KekModal from "../../shared/ui/KekModal";
import { useSession } from "../../entities/session/model/useSession";

const Userblock: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const { isAuthenticated, user, logout } = useSession();

  return (
    <div className={classes.usericon}>
      <button className={classes.user_btn} onClick={() => setHidden(true)}>
        {user?.name ?? "KEK"}
      </button>

      <KekModal visible={hidden} setVisible={setHidden}>
        {isAuthenticated ? (
          <div className={classes.user_dialog_list}>
            <Link to="/afisha">
              <p className="title">Profile</p>
            </Link>
            <Link to="/bargrill">
              <p className="title">Bar&Grill</p>
            </Link>
            <Link to="/about">
              <p className="title">Help</p>
            </Link>
            <Link
              to="/login"
              onClick={() => {
                logout();
                setHidden(false);
              }}
            >
              <p className="title">Logout</p>
            </Link>
          </div>
        ) : (
          <div className={classes.user_dialog_list}>
            <Link to="/signin">
              <p className="title">Sign Up</p>
            </Link>
            <Link to="/login">
              <p className="title">Log In</p>
            </Link>
          </div>
        )}
      </KekModal>
    </div>
  );
};

export default Userblock;
