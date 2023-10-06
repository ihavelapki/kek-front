import React from 'react';
// import classes from './Login.module.css';
import Login from '../../widgets/auth/Login';


const LoginPage = () => {

    return (
        <div className='wrapper'>
            <div></div>
            <div>
                <h2 className='title'>PLEASE  LOG IN:</h2>
                <Login/>
            </div>
            <div></div>
        </div>
    );
};

export default LoginPage;