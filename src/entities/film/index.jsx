import React from "react";
import classes from "./film.module.css";

const Film = (props) => {
    return (
        <div className={classes.film_body}>
            <image src={props.film.image} className={classes.film_icon}/>
            <div>
                <div className="title">
                    {props.film.title} 
                </div>
                <p>{props.film.year}</p>
                <p>{props.film.description}</p>
            </div>
        </div>
    );
};

export default Film;