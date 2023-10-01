import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Userblock.module.css';
import KekModal from '../../shared/ui/KekModal';

const Userblock = () => {

    const [hidden, setHidden] = useState(false);
    // console.log(hidden);

    return (
        <div className={classes.usericon}>
            <button className={classes.user_btn} onClick={() => setHidden(true)}>KEK</button>
            <KekModal visible={hidden} setVisible={setHidden}>
                <div className={classes.user_dialog_list}>
                    <Link to="/afisha"><p className="title">user</p></Link>
                    <Link to="/afisha"><p className="title">kek</p></Link>
                    <Link to="/afisha"><p className="title">help</p></Link>
                    <Link to="/afisha"><p className="title">login</p></Link>
                </div>
            </KekModal>
        </div>
    );
};

export default Userblock;