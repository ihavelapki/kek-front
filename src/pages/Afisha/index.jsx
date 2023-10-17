import React, { useState, useEffect } from 'react';
import Films from "../../widgets/films";
import { fetchFilms } from '../../shared/api';

const Afisha = () => {

    const [filmList, setFilmList] = useState([{'id': 1, 'title': 'One Piece', 'year': 2007, 'description': 'ajobdskbjbd', 'image': '/images/film1.jpg', 'date': '2023-09-12'},
        {'id': 2, 'title': 'One Piece', 'year': 2007, 'description': 'ajobdskbjbd', 'image': '/images/film1.jpg', 'date': '2023-08-31'}
    ]);

    async function getFilms() {
        const films = await fetchFilms();
        setFilmList(films);
    }

    useEffect(() => {
        getFilms();
    }, [])

    return (
        <div className="wrapper">
            <h1>THIS IS AFISHA PAGE</h1>
            <Films filmList={filmList}></Films>
        </div>
        
    );
};

export default Afisha;