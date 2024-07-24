import { TokenModel } from "../model/TokenModel";
import { UserRole } from "../model/UserRole";

export class TokenManager {
    private static instance: TokenManager;

    private constructor() {}

    private tokenList: TokenModel[] = []

    public static getInstance(): TokenManager {
        if (!TokenManager.instance) {
            TokenManager.instance = new TokenManager();
        }
        return TokenManager.instance;
    }

    public createToken(app: string): TokenModel {
        const token = this.generateToken(app);
        this.tokenList.push(token);
        return token;
    }

    public deleteToken(tokenKey: string): void {
        const newTokenList = this.tokenList.filter(token => token.key !== tokenKey)
        this.tokenList = newTokenList;
    }

    public readTokenList(): TokenModel[] {
        return this.tokenList;
    }

    private generateToken(app: string): TokenModel {
        return {
            key: Math.random().toString(21),
            role: UserRole.READER,
            issuer: app,
          };
    }
}