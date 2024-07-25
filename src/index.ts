import express, { Request, Response } from "express";
import { TokenCreateController } from "./controller/create/TokenCreateController";
import { MessageError } from "./model/MessageError";
import { UserTokenModel } from "./model/UserTokenModel";
import { TokenFindController } from "./controller/find/TokenFindController";
import { TokenModel } from "./model/TokenModel";

const app = express();
const port = 3020;

app.use(express.json());

const tokenCreateController = new TokenCreateController();
const tokenFindController = new TokenFindController();

app.post("/", async (req: Request, res: Response) => {
  try {
    const userToken: UserTokenModel = req.body;
    const result = await tokenCreateController.create(userToken);

    res.status(200).json(result);
  } catch (error) {
    const merrsageError: MessageError = new MessageError(
      401,
      `Unauthorized ${error}`
    );
    res.status(merrsageError.getMessageError().status).json(merrsageError);
  }
});

app.post("/verify", async (req: Request, res: Response) => {
  try {
    const userToken: TokenModel = req.body;
    await tokenFindController.isValid(userToken);
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
