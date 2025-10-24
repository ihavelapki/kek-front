import { useEffect } from "react";
import { useAuth } from "../../shared/auth";
import KekLoader from "../../shared/ui/KekLoader";

const LoginPage: React.FC = () => {
  const { isAuthenticated, login, loading } = useAuth();

  // При монтировании страницы вызываем login() → редирект в Keycloak
  useEffect(() => {
    if (!isAuthenticated && !loading) {
      login(); // вызывает /api/auth/login на BFF → редиректит на Keycloak
    }
  }, [isAuthenticated, loading, login]);

  return (
    <div className="wrapper" style={{ textAlign: "center", marginTop: "3rem" }}>
      {isAuthenticated ? (
        <h2 className="title">✅ You are already logged in</h2>
      ) : (
        <>
          <KekLoader />
          <p className="main_text">Redirecting to Keycloak...</p>
        </>
      )}
    </div>
  );
};

export default LoginPage;
