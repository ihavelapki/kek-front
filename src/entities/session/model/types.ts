import type { User } from "../../user/model/types";

export interface Session {
  isAuthenticated: boolean;
  loading: boolean;
  user?: User;
  login: () => void | Promise<void>;
  logout: () => void | Promise<void>;
}
