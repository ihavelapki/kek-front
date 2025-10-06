import React from 'react';
import Film from "../../entities/film";

const Films = (props) => {

    return (
        <div>
            {props.filmList.map(film => <Film film={film} key={film.id}></Film>)}  
        </div>
        
    );
};

export default Films;