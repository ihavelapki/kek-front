import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Navbar.module.css';
import Search from '../../features/search';
import Userblock from '../../features/userblock';

const Navbar = () => {
    return (
        <div className={classes.kekbar}>
            <div className={classes.kekbar_btns}>
                <Link className={classes.kekbar_link} to="/about">ABOUT</Link>           
                <Link className={classes.kekbar_link} to="/afisha">AFISHA</Link>
                <Link className={classes.kekbar_link} to="/bargrill">BAR&GRILL</Link>
            </div>
            <Search></Search>
            <Userblock></Userblock>
        </div>
    );
};

export default Navbar;