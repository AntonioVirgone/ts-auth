import { TokenModel } from "../../../model/TokenModel";
import { UserRole } from "../../../model/UserRole";
import { UserTokenModel } from "../../../model/UserTokenModel";
import { ITokenCreateRepository } from "../../../repository/token/create/ITokenCreateRepository";
import { TokenRepository } from "../../../repository/token/create/TokenCreateRepository";
import { ITokenCreateService } from "./ITokenCreateService";

export class TokenCreateService implements ITokenCreateService {
    tokenRepository: ITokenCreateRepository = new TokenRepository()

    async create(user: UserTokenModel): Promise<TokenModel> {
    if (!Object.values(UserRole).includes(user.role)) {
      console.error("Role not found");
      throw new Error("Role not found");
    }
    return await this.tokenRepository.create(user);
  }
}
