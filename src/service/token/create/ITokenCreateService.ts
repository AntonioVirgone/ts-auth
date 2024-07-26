import { TokenModel } from "../../../model/TokenModel";
import { UserTokenModel } from "../../../model/UserTokenModel";

export interface ITokenCreateService {
    create(user: UserTokenModel): Promise<TokenModel>;
}