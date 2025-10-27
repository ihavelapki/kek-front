import { api } from "../index";
import type { SessionResponse } from "./types";

// если нет Keycloak, можно использовать заглушку
const USE_MOCK = import.meta.env.VITE_USE_MOCK === "true";

/**
 * Проверка текущей сессии пользователя
 */
export async function getSession(): Promise<SessionResponse> {
  if (USE_MOCK) {
    const res = await fetch("/api/auth/session.json");
    return await res.json();
  }

  const res = await api.get<SessionResponse>("/api/auth/session");
  return res.data;
}

/**
 * Логин — вызывает редирект на Keycloak (через BFF)
 */
export function loginRedirect(): void {
  window.location.href = `${api.defaults.baseURL}/api/auth/login`;
}

/**
 * Logout — разлогинивает пользователя
 */
export async function logoutRequest(): Promise<void> {
  if (USE_MOCK) {
    await fetch("/api/auth/logout.json");
    return;
  }

  await api.post("/api/auth/logout");
}
