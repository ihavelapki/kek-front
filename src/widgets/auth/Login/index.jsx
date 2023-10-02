import React, { useCallback, useState } from 'react';
import classes from './Login.module.css';
import KekInput from '../../../shared/ui/KekInput';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const postLogin = useCallback((e) => {
        e.preventDefault()
        console.log(email)
        console.log(password)

        setEmail('')
        setPassword('')


    }, [email, password]);

    return (
        <form className={classes.loginform}>
            <KekInput value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="email"/>
            <KekInput value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="password"/>
            <button onClick={postLogin}>Submit</button>
        </form>
    );
};

export default Login;