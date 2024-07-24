import { TokenModel } from "../../model/TokenModel";

export interface ILoginController {
    login(username: string, password: string, app: string): Promise<TokenModel>
}