import React, { useCallback, useState } from 'react';
import classes from './Login.module.css';
import KekInput from '../../../shared/ui/KekInput';
import { useAuth } from '../../../shared/auth';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const { isAuthenticated, login, logout } = useAuth();

    const postLogin = useCallback((e) => {
        e.preventDefault()
        console.log(email)
        console.log(password)

        setEmail('')
        setPassword('')

        login()

    }, [email, password, login]);

    return (
        <div>
            {isAuthenticated ? (
                <button className={classes.btn} onClick={logout}>logout</button>
                ) : (
                    <form className={classes.loginform}>
                        <KekInput value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="email"/>
                        <KekInput value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="password"/>
                        <button 
                            className={classes.btn}
                            type="submit" 
                            onClick={postLogin}
                            >Submit</button>
                    </form>
                )
            }
       </div>
    );
};

export default Login;