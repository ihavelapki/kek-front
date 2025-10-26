import { Navigate } from "react-router-dom";
import { useSession } from "../model/useSession";
import type { JSX } from "react";

interface RequireGuestProps {
  children: JSX.Element;
}

/**
 * Guard для публичных маршрутов (например, login, signin).
 * Если пользователь уже авторизован → редирект на /afisha
 */
export const RequireGuest: React.FC<RequireGuestProps> = ({ children }) => {
  const { isAuthenticated, loading } = useSession();

  if (loading) return null; // можно показать лоадер

  return isAuthenticated ? <Navigate to="/afisha" replace /> : children;
};
