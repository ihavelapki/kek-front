import type { SessionResponse } from "../../../shared/auth";
import type { User } from "../../user/model/types";

/**
 * Маппер: конвертирует данные из BFF (API /api/auth/session)
 * в формат бизнес-сущности User.
 */
export function mapSessionResponseToUser(data: SessionResponse): User | undefined {
  if (!data.user) return undefined;

  const apiUser = data.user;

  return {
    id: apiUser.id,
    name: apiUser.name ?? "Unknown",
    email: apiUser.email,
    roles: apiUser.roles ?? [],
  };
}
