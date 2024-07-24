import { TokenModel } from "../../model/TokenModel";
import { ILoginController } from "./ILoginController";
import { TokenManager } from "../../manager/TokenManager";
import { TokenEventEmitter } from "../../emitter/TokenEventEmitter";

export class LoginController implements ILoginController {
  tokenManager: TokenManager = TokenManager.getInstance();
  tokenEventEmitter = new TokenEventEmitter();

  async login(
    username: string,
    password: string,
    app: string
  ): Promise<TokenModel> {
    console.log(this.tokenManager.readTokenList());

    if (username === "pippo" && password === "test") {
      const token = this.tokenManager.createToken(app);
      this.tokenEventEmitter.expire(5000, token.key);

      return token;
    }
    throw new Error("Not authorized");
  }
}
