import { NextFunction, Request, Response } from "express";
import { TokenModel } from "../../model/TokenModel";

export interface ITokenCreateController {
    create(req: Request, res: Response, next: NextFunction): Promise<TokenModel>
}