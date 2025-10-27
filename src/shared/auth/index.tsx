import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { mapSessionResponseToUser } from "../../entities/session/lib/mapSessionToUser";
import { getSession, loginRedirect, logoutRequest } from "../api/auth"; //
import type { User } from "../../entities/user/model/types";

interface AuthContextValue {
  isAuthenticated: boolean;
  user?: User;
  loading: boolean;
  error?: string;
  login: () => void;
  logout: () => Promise<void>;
  refreshSession: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  const fetchSession = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getSession();
      setIsAuthenticated(data.isAuthenticated);
      setUser(mapSessionResponseToUser(data));
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

  const login = useCallback(() => {
    loginRedirect();
  }, []);

  const logout = useCallback(async () => {
    try {
      setLoading(true);
      await logoutRequest();
      setIsAuthenticated(false);
      setUser(undefined);
    } catch (err: any) {
      setError(err?.message ?? "Logout error");
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshSession = useCallback(fetchSession, [fetchSession]);

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

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
