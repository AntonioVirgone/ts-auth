import { UserRole } from "./UserRole";

export type UserTokenModel = {
    userCode: string;
    app: string;
    role: UserRole;
}