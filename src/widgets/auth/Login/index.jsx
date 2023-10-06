import React, { useCallback, useState } from 'react';
import classes from './Login.module.css';
import KekInput from '../../../shared/ui/KekInput';
import { useAuth } from '../../../shared/auth';
import { useNavigate } from "react-router-dom";

const Login = () => {
    
    //
    const { isAuthenticated, login, logout } = useAuth();
    console.log('point 0', isAuthenticated)
    // Create object with email and password
    const [formData, setFormData] = useState({email: '', password: ''});

    //
    const navigate = useNavigate();

    // 
    const handleInputChange = useCallback((event) => {
        const { name, value } = event.target;
        console.log('handleInputChange:', name, value)
        setFormData({...formData, [name]: value});
    }, [formData]);
      
    // 
    const postLogin = useCallback((event) => {
        event.preventDefault();

        // login(formData.email, formData.password);
        setFormData({email: '', password: ''});

        try {
            console.log('point 1', isAuthenticated)
            login(formData.email, formData.password);

            console.log('point 2', isAuthenticated)
            if (isAuthenticated) {
                navigate('/about'); // Перенаправляем пользователя на страницу /about
            } else {
                alert('Password is wrong, asshole!');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
        console.log('point 3', isAuthenticated)
    }, [login, formData, isAuthenticated, navigate]);

    return (
        <div>
            {isAuthenticated ? (
                <button className={classes.btn} onClick={logout}>logout</button>
                ) : (
                    <form className={classes.loginform}>
                        <KekInput value={formData.email} name="email" onChange={handleInputChange} type="text" placeholder="email"/>
                        <KekInput value={formData.password} name="password" onChange={handleInputChange} type="password" placeholder="password"/>
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