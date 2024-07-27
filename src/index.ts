import express, { NextFunction, Request, Response } from "express";
import { TokenCreateController } from "./controller/create/TokenCreateController";
import { TokenFindController } from "./controller/find/TokenFindController";
import { MessageError } from "ts-av-common";

const app = express();
const port = 3020;

app.use(express.json());

const tokenCreateController = new TokenCreateController();
const tokenFindController = new TokenFindController();

app.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await tokenCreateController.create(req, res, next);

    res.status(200).json(result);
  } catch (error) {
    const merrsageError: MessageError = new MessageError(
      401,
      `Unauthorized ${error}`
    );
    res.status(merrsageError.getMessageError().status).json(merrsageError);
  }
});

app.post("/verify", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await tokenFindController.isValid(req, res, next);
    res.status(200).json();
  } catch (error) {
    const merrsageError: MessageError = new MessageError(
      401,
      `Unauthorized ${error}`
    );
    res.status(merrsageError.getMessageError().status).json(merrsageError);
  }
});

app.listen(port, () => {
  console.log(`Server ts-auth is running at http://localhost:${port}`);
});
