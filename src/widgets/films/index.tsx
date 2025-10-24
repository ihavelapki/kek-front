import Film from "../../entities/film";
import type { FilmData } from "../../entities/film";

// Типизация пропсов
interface FilmsProps {
  filmList: FilmData[];
}

const Films: React.FC<FilmsProps> = ({ filmList }) => {
  return (
    <div>
      {filmList.map((film) => (
        <Film film={film} key={film.id} />
      ))}
    </div>
  );
};

export default Films;
