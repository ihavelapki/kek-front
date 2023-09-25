import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={classes.kekbar}>
            <div className={classes.kekbar_btns}>
                <Link className={classes.kekbar_link} to="/about">ABOUT</Link>           
                <Link className={classes.kekbar_link} to="/afisha">AFISHA</Link>
                <Link className={classes.kekbar_link} to="/bargrill">BAR&GRILL</Link>
            </div>
        </div>
    );
};

export default Navbar;