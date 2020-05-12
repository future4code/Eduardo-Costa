import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { UserDatabase } from "../data/UserDatabase";
import { BaseDatabase } from "../data/BaseDatabase";

export const userDataEndpoint = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;
        new Authenticator().getData(token);
        const id = req.params.id
        const result = await new UserDatabase().getUserById(id)

        res.status(200).send({id: result.id, email: result.email})
        
    } catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
    await BaseDatabase.destroyConnection()
}