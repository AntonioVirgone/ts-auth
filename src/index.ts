import express, { Request, Response } from "express";
import { LoginController } from "./controller/login/LoginController";
import { MessageError } from "./model/MessageError";

const app = express();
const port = 3020;

app.use(express.json());

const loginController = new LoginController();

app.get("/", async (req: Request, res: Response) => {
  try {
    const username = req.query.username as string;
    const password = req.query.password as string;
    const appName = req.query.appName as string;

    const result = await loginController.login(username, password, appName);

    res.status(200).json(result);
  } catch (error) {
    const merrsageError: MessageError = new MessageError(401, `Unauthorized ${error}`);
    res.status(merrsageError.getMessageError().status).json(merrsageError);
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
