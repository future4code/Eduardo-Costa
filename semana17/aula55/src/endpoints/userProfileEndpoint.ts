import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { UserDatabase } from "../data/UserDatabase";
import { BaseDatabase } from "../data/BaseDatabase";

export const userProfileEndpoint = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;
        const authenticationData = new Authenticator().getData(token);
        if (authenticationData.role !== "normal") {
            throw new Error("Only a normal user can access this funcionality");
        }
        const user = await new UserDatabase().getUserById(authenticationData.id);

        res.status(200).send({
            id: user.id,
            email: user.email,
            role: authenticationData.role,
        });
    } catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
    await BaseDatabase.destroyConnection()
}