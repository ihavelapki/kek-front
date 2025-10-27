import type { User } from "../../../entities/user/model/types";

export interface SessionResponse {
  isAuthenticated: boolean;
  user?: User;
}
