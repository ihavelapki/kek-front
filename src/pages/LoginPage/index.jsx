import React from 'react';
// import classes from './Login.module.css';
import Login from '../../widgets/auth/Login';


const LoginPage = () => {

    return (
        <div className='wrapper'>
            <div className='title'>First column</div>
            <div>
                <h2 className='title'>Please Login:</h2>
                <Login/>
            </div>
            <div className='title'>Third column</div>
        </div>
    );
};

export default LoginPage;