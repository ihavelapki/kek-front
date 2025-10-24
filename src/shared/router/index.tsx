import { Routes, Route, Navigate } from "react-router-dom";
import About from "../../pages/About";
import Afisha from "../../pages/Afisha";
import FilmPage from "../../pages/FlimPage";
import BarGrill from "../../pages/BarGrill";
import LoginPage from "../../pages/LoginPage";
import SigninPage from "../../pages/SigninPage";
import { useAuth } from "../../shared/auth";
import type { ReactElement } from "react";

interface PrivateRouteProps {
  element: ReactElement;
}

/**
 * Обёртка для защищённых маршрутов.
 * Если пользователь не авторизован — делает редирект на /login.
 */
const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { isAuthenticated } = useAuth();

  console.log("private:", isAuthenticated);

  return !isAuthenticated ? element : <Navigate to="/login" replace />;
};

/**
 * Основной роутинг приложения.
 */
const KekRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/afisha" element={<PrivateRoute element={<Afisha />} />} />
      <Route path="/afisha/:id" element={<PrivateRoute element={<FilmPage />} />} />
      <Route path="/bargrill" element={<PrivateRoute element={<BarGrill />} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="*" element={<Navigate to="/about" replace />} />
    </Routes>
  );
};

export default KekRouter;