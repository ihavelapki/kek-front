import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { User } from "../../entities/user/model/types"; // ✅ импортируем тип User из entities

// --- Типы данных --- //
export interface SessionResponse {
  isAuthenticated: boolean;
  user?: User;
}

interface AuthContextValue {
  isAuthenticated: boolean;
  user?: User;
  loading: boolean;
  error?: string;
  login: () => void; // вызывает редирект на Keycloak через BFF
  logout: () => Promise<void>;
  refreshSession: () => Promise<void>;
}

// --- Настройки --- //
const API_BASE = import.meta.env.VITE_API_BASE_URL ?? ""; // например, "https://my-bff.example.com"

// --- Реализация --- //
const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>(undefined);

  // --- Проверка сессии при старте приложения --- //
  const fetchSession = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/api/auth/session`, {
        method: "GET",
        credentials: "include", // важно: передаем cookie
      });
      if (!res.ok) throw new Error(`Session check failed: ${res.status}`);
      const data: SessionResponse = await res.json();
      setIsAuthenticated(data.isAuthenticated);
      setUser(data.user);
    } catch (err: any) {
      console.error("Session error:", err);
      setIsAuthenticated(false);
      setUser(undefined);
      setError(err?.message ?? "Session error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchSession();
  }, [fetchSession]);

  // --- Логин: просто редирект на Keycloak через BFF --- //
  const login = useCallback(() => {
    window.location.href = `${API_BASE}/api/auth/login`;
  }, []);

  // --- Logout --- //
  const logout = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/api/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
      if (!res.ok) throw new Error(`Logout failed: ${res.status}`);
      setIsAuthenticated(false);
      setUser(undefined);
    } catch (err: any) {
      console.error("Logout error:", err);
      setError(err?.message ?? "Logout error");
    } finally {
      setLoading(false);
    }
  }, []);

  // --- Обновление сессии --- //
  const refreshSession = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/api/auth/session`, {
        method: "GET",
        credentials: "include",
      });
      if (res.ok) {
        const data: SessionResponse = await res.json();
        setIsAuthenticated(true);
        setUser(data.user);
      }
    } catch (err) {
      console.warn("Failed to refresh session:", err);
    }
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      isAuthenticated,
      user,
      loading,
      error,
      login,
      logout,
      refreshSession,
    }),
    [isAuthenticated, user, loading, error, login, logout, refreshSession]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// --- Хук для использования контекста --- //
export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
