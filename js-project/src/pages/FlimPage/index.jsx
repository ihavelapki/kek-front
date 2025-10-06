import React from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../../widgets/pleer";

const FilmPage = () => {
    const params = useParams()
    console.log(params)
    return (
        <div className="wrapper">
            <div><h1 className="title"> FILM PAGE {params.id}</h1></div>
            <div>
                <VideoPlayer/>
            </div>
            <div></div>
        </div>
    );
}

export default FilmPage;