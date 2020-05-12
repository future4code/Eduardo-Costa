import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { signupEndpoint } from "./endpoints/signupEndpoint";
import { loginEndpoint } from "./endpoints/loginEndpoint";
import { userProfileEndpoint } from "./endpoints/userProfileEndpoint";
import { deleteEndPoint } from "./endpoints/deleteEndpoint";
import { userDataEndpoint } from "./endpoints/userDataEndpoint";

const app = express();
dotenv.config();
app.use(express.json());

app.post("/signup", signupEndpoint)
app.post("/login", loginEndpoint);
app.delete("/user/delete/:id", deleteEndPoint)
app.get("/user/profile", userProfileEndpoint);
app.get("/user/data/:id", userDataEndpoint)

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
