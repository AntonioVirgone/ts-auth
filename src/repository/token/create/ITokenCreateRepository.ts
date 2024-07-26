import { TokenModel } from "../../../model/TokenModel";
import { UserTokenModel } from "../../../model/UserTokenModel";

export interface ITokenCreateRepository {
    create(user: UserTokenModel): Promise<TokenModel>;
}