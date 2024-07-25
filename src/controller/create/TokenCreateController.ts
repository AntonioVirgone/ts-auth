import { TokenModel } from "../../model/TokenModel";
import { ITokenCreateController } from "./ITokenCreateController";
import { TokenManager } from "../../manager/TokenManager";
import { TokenEventEmitter } from "../../emitter/TokenEventEmitter";
import { UserTokenModel } from "../../model/UserTokenModel";
import { CheckUserRole } from "../../decorator/CheckUserDecorator";
import { Auth } from "../../decorator/Auth";

export class TokenCreateController implements ITokenCreateController {
  tokenManager: TokenManager = TokenManager.getInstance();
  tokenEventEmitter = new TokenEventEmitter();

  @Auth
  @CheckUserRole
  async create(user: UserTokenModel): Promise<TokenModel> {
    const token = this.tokenManager.createToken(user);
    this.tokenEventEmitter.expire(60000, token.key);

    return token;
  }
}
