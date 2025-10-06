import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Userblock.module.css';
import KekModal from '../../shared/ui/KekModal';
import { useAuth } from '../../shared/auth';

const Userblock = () => {

    const [hidden, setHidden] = useState(false);
    // console.log(hidden);
    const { isAuthenticated, logout } = useAuth();

    return (
        <div className={classes.usericon}>
            <button className={classes.user_btn} onClick={() => setHidden(true)}>KEK</button>
            <KekModal visible={hidden} setVisible={setHidden}>
                {isAuthenticated ? (
                        <div className={classes.user_dialog_list}>
                            <Link to="/afisha"><p className="title">user</p></Link>
                            <Link to="/afisha"><p className="title">kek</p></Link>
                            <Link to="/afisha"><p className="title">help</p></Link>
                            <Link to="/login" onClick={logout}><p className="title">logout</p></Link>
                        </div>
                    ) : (
                        <div className={classes.user_dialog_list}>
                            <Link to="/signin"><p className="title">signin</p></Link>
                            <Link to="/login"><p className="title">login</p></Link>
                        </div>
                    )
                }
            </KekModal>
        </div>
    );
};

export default Userblock;