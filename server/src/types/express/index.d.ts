import { UserClientAttributes } from "@/interfaces/user";

declare namespace Express {
  export interface Request {
    user?: UserClientAttributes;
    // Alse tried as
    // user: string
    // user?: string
    // user: any ...
  }
}
