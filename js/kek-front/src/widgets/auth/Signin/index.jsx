import React, { useCallback, useState } from 'react';
import classes from './Signin.module.css';
import KekInput from '../../../shared/ui/KekInput';

const Signin = () => {
    
    //

    // Create object with email and password
    const [formData, setFormData] = useState({email: '', password: '', firstName: '', lastName: '', passwordConf: ''});


    // 
    const handleInputChange = useCallback((event) => {
        const { name, value } = event.target;
        console.log('handleInputChange:', name, value)
        setFormData({...formData, [name]: value});
    }, [formData]);
      

    // 
    const postSignIn = useCallback((event) => {
        event.preventDefault();

        try {
            console.log(formData.firstName + formData.lastName + formData.email + formData.password + formData.passwordConf)
        } catch (error) {
            console.error('Error during login:', error);
        }

        setFormData({email: '', password: ''});
    }, [formData]);


    // 
    return (
            <form className={classes.loginform}>
                <h2 className='title'>PLEASE SIGN IN:</h2>
                <KekInput 
                        type="text" 
                        name="firstName" 
                        placeholder="First name"
                        value={formData.firstName} 
                        onChange={handleInputChange}/>
                <KekInput 
                        type="text" 
                        name="Last name" 
                        placeholder="lastName"
                        value={formData.lastName} 
                        onChange={handleInputChange}/>
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
                <KekInput 
                        type="password" 
                        name="passwordConf" 
                        placeholder="Conform your password"
                        value={formData.passwordConformation} 
                        onChange={handleInputChange}/>
                <button 
                        className={classes.btn}
                        type="submit" 
                        onClick={postSignIn}
                    >Submit
                </button>
            </form>
    );
};

export default Signin;