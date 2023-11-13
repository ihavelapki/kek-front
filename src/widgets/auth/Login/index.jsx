import React, { useCallback, useState } from 'react';
import classes from './Login.module.css';
import KekInput from '../../../shared/ui/KekInput';
import { useAuth } from '../../../shared/auth';

const Login = () => {
    
    //
    const { isAuthenticated, login } = useAuth();

    // Create object with email and password
    const [formData, setFormData] = useState({email: '', password: ''});


    // 
    const handleInputChange = useCallback((event) => {
        const { name, value } = event.target;
        console.log('handleInputChange:', name, value)
        setFormData({...formData, [name]: value});
    }, [formData]);
      

    // 
    const postLogin = useCallback((event) => {
        event.preventDefault();

        try {
            login(formData.email, formData.password);
        } catch (error) {
            console.error('Error during login:', error);
        }

        setFormData({email: '', password: ''});
    }, [login, formData]);


    // 
    return (
        <div>
            {isAuthenticated ? (
                <div className='title'>You are logged! AAAA</div>
                ) : (
                    <form className={classes.loginform}>
                        <h2 className='title'>PLEASE  LOG IN:</h2>
                        <KekInput 
                                type="text" 
                                name="email" 
                                placeholder="email"
                                value={formData.email} 
                                onChange={handleInputChange}/>
                        <KekInput 
                                type="password" 
                                name="password" 
                                placeholder="password"
                                value={formData.password} 
                                onChange={handleInputChange}/>
                        <button 
                                className={classes.btn}
                                type="submit" 
                                onClick={postLogin}
                            >Submit
                        </button>
                    </form>
                )
            }
       </div>
    );
};

export default Login;