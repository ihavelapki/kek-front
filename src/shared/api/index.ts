import axios from "axios";

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // для cookie-based auth (BFF)
  headers: {
    "Content-Type": "application/json",
  },
});



// import axios from "axios";
// import type { AxiosResponse } from "axios";

// // Опиши структуру фильма (совпадает с твоим типом FilmData)
// export interface FilmData {
//   id: string | number;
//   title: string;
//   year: number | string;
//   date: string;
//   description: string;
//   image: string;
// }

// // Базовый URL можно вынести в .env (например, VITE_API_BASE_URL)
// const API_BASE_URL = "http://192.168.1.77:5000";

// /**
//  * Получает список всех фильмов
//  */
// export async function fetchFilms(): Promise<FilmData[]> {
//   const response: AxiosResponse<FilmData[]> = await axios.get(`${API_BASE_URL}/films`);
//   return response.data;
// }

// /**
//  * Получает информацию о фильме по ID
//  */
// export async function getFilmInfo(id: string | number): Promise<FilmData | null> {
//   try {
//     const response: AxiosResponse<FilmData[]> = await axios.get(
//       `http://192.168.1.104:5000/movies?id=${id}`
//     );

//     // Иногда API может возвращать массив из одного элемента
//     const film = Array.isArray(response.data) ? response.data[0] : response.data;
//     return film ?? null;
//   } catch (e) {
//     console.error("Error fetching film by Id", e);
//     throw e;
//   }
// }
