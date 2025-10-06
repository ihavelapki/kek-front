import React from 'react';
import Signin from '../../widgets/auth/Signin';
import { useAuth } from '../../shared/auth';


const SigninPage = () => {

    //
    const { isAuthenticated } = useAuth();

    return (
        <div className='wrapper'>
            <div></div>
            <div>
                {isAuthenticated ? (
                    <div className='title'>You are already has account!</div>
                    ) : (
                        <Signin/>
                    )
                }
            </div>
            <div></div>
        </div>
    );
};

export default SigninPage;

