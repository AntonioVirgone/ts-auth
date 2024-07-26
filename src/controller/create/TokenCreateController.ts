import { NextFunction, Request, Response } from "express";
import { TokenModel } from "../../model/TokenModel";
import { ITokenCreateController } from "./ITokenCreateController";
import { UserTokenModel } from "../../model/UserTokenModel";
import { Auth } from "../../decorator/Auth";
import { ITokenCreateService } from "../../service/token/create/ITokenCreateService";
import { TokenCreateService } from "../../service/token/create/TokenCreateService";

export class TokenCreateController implements ITokenCreateController {
  createService: ITokenCreateService = new TokenCreateService();

  @Auth
  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<TokenModel> {
    const user: UserTokenModel = req.body;
    return await this.createService.create(user);
  }
}
