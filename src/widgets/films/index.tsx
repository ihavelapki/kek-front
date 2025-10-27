import { Film } from "../../entities/film";
import type { FilmData } from "../../entities/film";

// Типизация пропсов
interface FilmsProps {
  films: FilmData[];
}

const Films: React.FC<FilmsProps> = ({ films }) => {
  return (
    <div>
      {films.map((film) => (
        <Film film={film} key={film.id} />
      ))}
    </div>
  );
};

export default Films;
