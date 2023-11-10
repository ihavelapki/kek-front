import React from 'react';
import Login from '../../widgets/auth/Login';
import { useAuth } from '../../shared/auth';


const LoginPage = () => {

    //
    const { isAuthenticated } = useAuth();

    return (
        <div className='wrapper'>
            <div></div>
            <div>
                {isAuthenticated ? (
                    <div className='title'>You are logged!</div>
                    ) : (
                        <Login/>
                    )
                }
            </div>
            <div></div>
        </div>
    );
};

export default LoginPage;

