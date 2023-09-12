import React from 'react';
import Films from "../../widgets/films";

const Afisha = () => {
    const filmList = [{'id': 1, 'title': 'One Piece', 'year': 2007, 'description': 'ajobdskbjbd', 'image': '/images/film1.jpg'},
    {'id': 2, 'title': 'One Piece', 'year': 2007, 'description': 'ajobdskbjbd', 'image': '/images/film1.jpg'},
]
    return (
        <div className="wrapper">
            <h1>THIS IS AFISHA PAGE</h1>
            <Films filmList={filmList}></Films>
        </div>
        
    );
};

export default Afisha;