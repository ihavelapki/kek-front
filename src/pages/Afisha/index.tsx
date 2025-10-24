import { useState, useEffect } from "react";
import Films from "../../widgets/films";
import { fetchFilms } from "../../shared/api";
import KekLoader from "../../shared/ui/KekLoader";
import { useFetching } from "../../shared/hooks/useFetching";
import type { FilmData } from "../../entities/film";

const Afisha: React.FC = () => {
  // Состояние списка фильмов
  const [filmList, setFilmList] = useState<FilmData[]>([
    {
      id: 1,
      title: "One Piece",
      year: 2007,
      description: "ajobdskbjbd",
      image: "/images/film1.jpg",
      date: "2023-09-12",
    },
    {
      id: 2,
      title: "One Piece",
      year: 2007,
      description: "ajobdskbjbd",
      image: "/images/film1.jpg",
      date: "2023-08-31",
    },
  ]);

  // Используем наш типизированный useFetching
  const [fetchAllFilms, isFilmsLoading, filmsError] = useFetching(async () => {
    const films = await fetchFilms();
    setFilmList(films);
  });

  // Загружаем фильмы при монтировании
  useEffect(() => {
    void fetchAllFilms();
  }, [fetchAllFilms]);

  return (
    <div className="wrapper">
      <h1>THIS IS AFISHA PAGE</h1>
      <div>
        {filmsError ? (
          <h1 className="title">Ошибка: {filmsError}</h1>
        ) : isFilmsLoading ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <KekLoader />
          </div>
        ) : (
          <Films filmList={filmList} />
        )}
      </div>
    </div>
  );
};

export default Afisha;
