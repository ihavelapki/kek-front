import { useState, useEffect, useCallback } from "react";
import { fetchFilms } from "../../../shared/api/film";
import type { FilmData } from "../model/types";

export function useFilms() {
  const [films, setFilms] = useState<FilmData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadFilms = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchFilms();
      setFilms(data);
    } catch (err: any) {
      setError(err.message ?? "Ошибка загрузки фильмов");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadFilms();
  }, [loadFilms]);

  return { films, loading, error, reload: loadFilms };
}
