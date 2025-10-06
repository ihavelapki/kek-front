import React from "react";
import classes from "./film.module.css";
import {Link} from "react-router-dom";


const Film = (props) => {
    return (
        <div className={classes.film_container}>
            <div className="main_text" ><strong>{props.film.date}</strong></div>
            <div className={classes.film_body}>
                <image src={props.film.image} className={classes.film_icon}/>
                <div className={classes.film_description}>
                    <h3 className="title">
                        {props.film.title}
                    </h3>
                    <p className="main_text"><strong>year: </strong>{props.film.year}</p>
                    <p className="main_text"><strong>annotation: </strong>{props.film.description}</p>
                </div>
                <div className={classes.film_buttons}>
                    <Link to={`/afisha/${props.film.id}`} className={classes.view_btn}>
                        VIEW
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Film;