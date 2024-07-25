import { Log } from "../decorator/Log";
import { TokenModel } from "../model/TokenModel";
import { UserTokenModel } from "../model/UserTokenModel";
import { generateRandomString } from 'ts-av-common';

export class TokenManager {
  private static instance: TokenManager;

  private constructor() {}

  private tokenList: TokenModel[] = [];

  public static getInstance(): TokenManager {
    if (!TokenManager.instance) {
      TokenManager.instance = new TokenManager();
    }
    return TokenManager.instance;
  }

  @Log
  public createToken(user: UserTokenModel): TokenModel {
    console.log(`Request generation token by ${user.app} application`);
    
    const token = this.generateToken(user);
    this.tokenList.push(token);
    return token;
  }

  @Log
  public deleteToken(tokenKey: string): void {
    const newTokenList = this.tokenList.filter(
      (token) => token.key !== tokenKey
    );
    this.tokenList = newTokenList;
  }

  @Log
  public readTokenList(): TokenModel[] {
    return this.tokenList;
  }

  @Log
  public findToken(userCode: string, tokenKey: string): TokenModel {
    return this.tokenList.filter(
      (item) => item.userCode === userCode && item.key === tokenKey
    )[0];
  }

  private generateToken(user: UserTokenModel): TokenModel {
    return {
      key: generateRandomString(36),
      role: user.role,
      userCode: user.userCode,
      issuer: user.app,
    };
  }
}
