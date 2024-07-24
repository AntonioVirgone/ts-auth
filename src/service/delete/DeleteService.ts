import { TokenManager } from "../../manager/TokenManager";
import { IDeleteService } from "./IDeleteService";

export class DeleteService implements IDeleteService {
  async delete(key: string): Promise<void> {
    const tokenManager: TokenManager = TokenManager.getInstance();
    tokenManager.deleteToken(key);
    console.log("Token expired");
  }
}
