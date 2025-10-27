import { useFilms } from "../../entities/film";
import FilmsList from "../../widgets/films";
import KekLoader from "../../shared/ui/KekLoader";

const Afisha: React.FC = () => {
  const { films, loading, error, reload } = useFilms();

  return (
    <div className="wrapper">
      <h1>Афиша</h1>
      {error ? (
        <div>
          <h2 className="title">Ошибка: {error}</h2>
          <button onClick={reload}>Повторить</button>
        </div>
      ) : loading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <KekLoader />
        </div>
      ) : (
        <FilmsList films={films} />
      )}
    </div>
  );
};

export default Afisha;
