import { TokenModel } from "../../model/TokenModel";

export interface ITokenFindController {
    isValid(token: TokenModel): Promise<void>;
}