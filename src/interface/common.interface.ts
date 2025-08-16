import { UserRole } from "@prisma/client";
import { JwtPayload } from "jsonwebtoken";

/* JWT Payload */
export interface I_GlobalJwtType extends JwtPayload {
  id: string;
  email: string;
  role: UserRole;
  isVerified: boolean;
  isBlocked: boolean;
  lastPasswordChangedAt: string | Date;
}

export interface I_PaginationResponse<T> {
  meta: {
    totalCount: number;
    totalPages: number;
    page: number;
    limit: number;
  };

  result: T;
}
