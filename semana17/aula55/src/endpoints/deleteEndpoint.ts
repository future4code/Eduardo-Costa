import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { UserDatabase } from "../data/UserDatabase";
import { BaseDatabase } from "../data/BaseDatabase";

export const deleteEndPoint = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;
        const authenticationData = await new Authenticator().getData(token);

        if (authenticationData.role != "admin") {
            throw new Error("Unautorized")
        }
        await new UserDatabase().deleteUserById(req.params.id)

        res.sendStatus(200)

    } catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
    await BaseDatabase.destroyConnection()
}