import { EventEmitter } from "events";
import { TokenManager } from "../../../manager/TokenManager";
import { TokenModel } from "../../../model/TokenModel";
import { UserTokenModel } from "../../../model/UserTokenModel";
import { ITokenCreateRepository } from "./ITokenCreateRepository";
import { ITokenDeleteService } from "../../../service/token/delete/ITokenDeleteService";
import { TokenDeleteService } from "../../../service/token/delete/TokenDeleteService";
import { EXPIRATION_TOKEN } from "../../../config/Config";

export class TokenRepository implements ITokenCreateRepository {
  emitter = new EventEmitter();
  tokenManager: TokenManager = TokenManager.getInstance();
  tokenDeleteService: ITokenDeleteService = new TokenDeleteService();

  constructor() {
    this.emitter.on("expire", (param: string) => {
      this.tokenDeleteService.delete(param);
    });
  }

  async create(user: UserTokenModel): Promise<TokenModel> {
    const token = this.tokenManager.createToken(user);
    this.expire(EXPIRATION_TOKEN, token.key);
    return token;
  }

  expire(timeout: number, extraParam: string) {
    setTimeout(() => {
      this.emitter.emit("expire", extraParam);
    }, timeout);
  }
}
