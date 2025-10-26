import { Navigate, useLocation } from "react-router-dom";
import { useSession } from "../model/useSession";
import KekLoader from "../../../shared/ui/KekLoader";
import type { JSX } from "react";

interface RequireAuthProps {
  children: JSX.Element;
}

/**
 * Guard-компонент, защищает приватные маршруты.
 * Если пользователь не авторизован → редирект на /login
 */
export const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const { isAuthenticated, loading } = useSession();
  const location = useLocation();

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <KekLoader />
        <p>Checking session...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
