import { TokenManager } from "../../../manager/TokenManager";
import { ITokenDeleteService } from "./ITokenDeleteService";

export class TokenDeleteService implements ITokenDeleteService {
  tokenManager: TokenManager = TokenManager.getInstance();
  async delete(key: string): Promise<void> {
    this.tokenManager.deleteToken(key);
    console.log("Token expired");
  }
}
