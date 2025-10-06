import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Navbar.module.css';
import Search from '../../features/search';
import Userblock from '../../features/userblock';
import { useAuth } from '../../shared/auth';

const Navbar = () => {
    const { isAuthenticated } = useAuth();

    return (
        <div className={classes.navbar}>
            {isAuthenticated ? (
                <div className={classes.kekbar}>
                    <div className={classes.kekbar_btns}>
                        <Link className={classes.kekbar_link} to="/about">ABOUT</Link>           
                        <Link className={classes.kekbar_link} to="/afisha">AFISHA</Link>
                        <Link className={classes.kekbar_link} to="/bargrill">BAR&GRILL</Link>
                    </div>
                    <Search></Search>
                    <Userblock></Userblock>
                </div>
                ) : (
                    <div className={classes.kekbar}>
                        <div className={classes.kekbar_btns}>
                            <Link className={classes.kekbar_link} to="/about">ABOUT</Link>           
                        </div>
                        <Userblock></Userblock>
                    </div>
                )
            }   
        </div>
    );
};

export default Navbar;