import { api } from "../index";
import type { FilmData } from "../../../entities/film";

const USE_MOCK = import.meta.env.VITE_USE_MOCK === "true";

/**
 * Получает список фильмов
 */
export async function fetchFilms(): Promise<FilmData[]> {
  if (USE_MOCK) {
    const res = await fetch("/api/film/films.json");
    if (!res.ok) throw new Error("Failed to load mock films");
    const data: FilmData[] = await res.json();
    return data;
  }

  const response = await api.get<FilmData[]>("/films");
  return response.data;
}

/**
 * Получает информацию о фильме по ID
 */
export async function getFilmInfo(id: string | number): Promise<FilmData | null> {
  try {
    if (USE_MOCK) {
      // читаем список из mock-файла и ищем по id
      const res = await fetch("/api/film/films.json");
      if (!res.ok) throw new Error("Failed to load mock films");
      const data: FilmData[] = await res.json();
      const film = data.find((f) => f.id === id || f.id === Number(id));
      return film ?? null;
    }

    const response = await api.get<FilmData | FilmData[]>(`/movies?id=${id}`);
    const data = response.data;
    const film = Array.isArray(data) ? data[0] : data;
    return film ?? null;
  } catch (e) {
    console.error("Error fetching film by Id:", e);
    throw e;
  }
}
