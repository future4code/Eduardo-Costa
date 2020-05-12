import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { IdGenerator } from "./services/IdGenerator";
import { UserDatabase } from "./data/UserDatabase";
import { Authenticator } from "./services/Authenticator";

dotenv.config();
const app = express();
app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

app.post("/signup", async (req: Request, res: Response) => {
  try {
    const userData = { email: req.body.email, password: req.body.password }

    const idGenerator = new IdGenerator()
    const id = idGenerator.generate()

    const userDatabase = new UserDatabase()
    await userDatabase.createUser(id, userData.email, userData.password);

    const authenticator = new Authenticator
    const token = authenticator.generateToken({id})

    res.status(200).send({
      token: ""
    })
  } catch (error) {
    res.status(400).send(
      { message: error.message }
    )
  }
})