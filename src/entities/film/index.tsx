import { Link } from "react-router-dom";
import classes from "./film.module.css";

// Описываем тип данных для фильма
export interface FilmData {
  id: string | number;
  title: string;
  year: number | string;
  date: string;
  description: string;
  image: string;
}

// Описываем пропсы компонента
interface FilmProps {
  film: FilmData;
}

const Film: React.FC<FilmProps> = ({ film }) => {
  return (
    <div className={classes.film_container}>
      <div className="main_text">
        <strong>{film.date}</strong>
      </div>

      <div className={classes.film_body}>
        {/* Исправлено: тег <image> → <img> */}
        <img src={film.image} alt={film.title} className={classes.film_icon} />

        <div className={classes.film_description}>
          <h3 className="title">{film.title}</h3>
          <p className="main_text">
            <strong>year: </strong>
            {film.year}
          </p>
          <p className="main_text">
            <strong>annotation: </strong>
            {film.description}
          </p>
        </div>

        <div className={classes.film_buttons}>
          <Link to={`/afisha/${film.id}`} className={classes.view_btn}>
            VIEW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Film;
