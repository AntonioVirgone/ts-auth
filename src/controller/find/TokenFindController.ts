import { NextFunction, Request, Response } from "express";
import { Auth } from "../../decorator/Auth";
import { TokenManager } from "../../manager/TokenManager";
import { TokenModel } from "../../model/TokenModel";
import { ITokenFindController } from "./ITokenFindController";

export class TokenFindController implements ITokenFindController {
  tokenManager = TokenManager.getInstance();

  @Auth
  async isValid(req: Request, res: Response, next: NextFunction): Promise<void> {
    const token: TokenModel = req.body;
    if (this.tokenManager.findToken(token.userCode, token.key) === undefined) {
      throw new Error("Token expired");
    }
  }
}
