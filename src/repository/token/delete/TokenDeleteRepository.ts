import { TokenManager } from "../../../manager/TokenManager";
import { ITokenDeleteRepository } from "./ITokenDeleteRepository";

export class TokenDeleteRepository implements ITokenDeleteRepository {
    async delete(token: string): Promise<void> {
        const tokenManager: TokenManager = TokenManager.getInstance();
        tokenManager.deleteToken(token);
        console.log("Token expired");
    }
    
}