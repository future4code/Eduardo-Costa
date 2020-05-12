import { Request, Response } from "express";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { BaseDatabase } from "../data/BaseDatabase";

export const signupEndpoint =  async (req: Request, res: Response) => {
    try {
        const id = new IdGenerator().generate();
        const hashPassword = await new HashManager().hash(req.body.password);
        await new UserDatabase().createUser(id, req.body.email, hashPassword, req.body.role);
        const token = new Authenticator().generateToken({
            id,
            role: req.body.role,
        });

        res.status(200).send({
            token,
        });
    } catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
    await BaseDatabase.destroyConnection()
}