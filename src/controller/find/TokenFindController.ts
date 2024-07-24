import { TokenManager } from "../../manager/TokenManager";
import { TokenModel } from "../../model/TokenModel";
import { ITokenFindController } from "./ITokenFindController";

export class TokenFindController implements ITokenFindController {
  tokenManager = TokenManager.getInstance();

  async isValid(token: TokenModel): Promise<void> {
    if (this.tokenManager.findToken(token.userCode, token.key) === undefined) {
      throw new Error("Token expired");
    }
  }
}
