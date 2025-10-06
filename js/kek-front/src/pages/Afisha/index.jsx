import React, { useState, useEffect } from 'react';
import Films from "../../widgets/films";
import { fetchFilm } from '../../shared/api'
import KekLoader from '../../shared/ui/KekLoader';
import { useFetching } from '../../shared/hooks/useFetching';

const Afisha = () => {
    const [filmList, setFilmList] = useState([{'id': 1, 'title': 'One Piece', 'year': 2007, 'description': 'ajobdskbjbd', 'image': '/images/film1.jpg', 'date': '2023-09-12'},
        {'id': 2, 'title': 'One Piece', 'year': 2007, 'description': 'ajobdskbjbd', 'image': '/images/film1.jpg', 'date': '2023-08-31'},
    ]);

    // const [isFilmsLoading, setIsFilmsLoading] = useState(false);

    const [fetchFilms, isFilmsLoading, filmsError] = useFetching(async () => {
        const films = await fetchFilm();
        setFilmList(films);
    })

    // async function getFilms() {
    //     setIsFilmsLoading(true);

    //     const films = await fetchFilms();
    //     setFilmList(films);

    //     setIsFilmsLoading(false);
    // }

    useEffect(() => {
        fetchFilms();
    }, [fetchFilms]);

    return (
        <div className="wrapper">
            <h1>THIS IS AFISHA PAGE</h1>
            <div>
                {filmsError
                    ? <h1 className='title'>Кек ${filmsError}</h1>
                    :   <div>{isFilmsLoading 
                            ? <div style={{display: 'flex', justifyContent: 'center'}}><KekLoader/></div>
                            : <Films filmList={filmList}></Films>
                        }</div>
                    
                }
            </div>
        </div>
        
    );
};

export default Afisha;