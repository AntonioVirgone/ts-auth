import { TokenModel } from "../../model/TokenModel";
import { UserTokenModel } from "../../model/UserTokenModel";

export interface ITokenCreateController {
    create(user: UserTokenModel): Promise<TokenModel>
}