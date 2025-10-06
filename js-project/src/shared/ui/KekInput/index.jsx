import React from 'react';
import classes from './KekInput.module.css';


const KekInput = (props) => {

    return (
        <input {...props} className={classes.input}/>
    );
};

export default KekInput;