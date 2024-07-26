import { NextFunction, Request, Response } from "express";

export interface ITokenFindController {
    isValid(req: Request, res: Response, next: NextFunction): Promise<void>;
}