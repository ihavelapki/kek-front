import { useEffect } from "react";
import { useAuth } from "../../shared/auth";
import KekLoader from "../../shared/ui/KekLoader";

const SigninPage: React.FC = () => {
  const { isAuthenticated, loading } = useAuth()

  // При монтировании страницы отправляем пользователя в Keycloak (на форму регистрации)
  useEffect(() => {
    if (!isAuthenticated && !loading) {
      // Редирект через BFF: /api/auth/register → Keycloak
      window.location.href = "/api/auth/register";
    }
  }, [isAuthenticated, loading]);

  return (
    <div className="wrapper" style={{ textAlign: "center", marginTop: "3rem" }}>
      {isAuthenticated ? (
        <h2 className="title">✅ You already have an account</h2>
      ) : (
        <>
          <KekLoader />
          <p className="main_text">Redirecting to Keycloak registration...</p>
        </>
      )}
    </div>
  );
};

export default SigninPage;


