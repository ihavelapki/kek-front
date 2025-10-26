import { useAuth } from "../../../shared/auth";

export const useSession = () => {
  const { isAuthenticated, user, login, logout, loading } = useAuth();

  return {
    isAuthenticated,
    user,
    login,
    logout,
    loading,
  };
};
