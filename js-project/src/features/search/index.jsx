import React, { useState } from 'react';
import classes from './Search.module.css';

const Search = (props) => {
    const [value, setValue] = useState()
    return (
        <input className={classes.search} 
            {...props}
            type="text"
            value={value}
            onChange={event => setValue(event.target.value)}
            placeholder='Search'
            
            />
    );
};

export default Search;