import express, { Request, Response } from "express";
import knex from "knex";
import { AddressInfo } from "net";
import dotenv from "dotenv";
import { stringify } from "querystring";

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

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME,
    },
});

const createUser = async (name: string, nickname: string, email: string): Promise<any> => {
    const result = await connection.raw(`
    INSERT INTO TodoListUser (name, nickname, email) values("${name}", "${nickname}", "${email}")
    `);
    const idGerado = await connection.raw(`
    SELECT MAX(id) as nid FROM TodoListUser
    `);
    console.log(idGerado)
    return idGerado[0][0].nid
};

app.put("/user", async (req: Request, res: Response) => {
    try {
        if (req.body.name, req.body.nickname, req.body.email) {
            const newUser = await createUser(req.body.name, req.body.nickname, req.body.email);
            res.status(200).send({
                message: `Usuário criado com sucesso ID: ${newUser}`,
                ID: newUser
            })
        } else {
            throw new Error("Não foram recebidos todos os campos obrigatórios");
        }
    } catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
});

const getUserById = async (id: number): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM TodoListUser WHERE id = ${id};
    `);
    return result[0][0]
};

app.get("/user/:id", async (req: Request, res: Response) => {
    try {
        if (req.params.id) {
            const userId = await getUserById(Number(req.params.id));
            if (userId == undefined) {
                throw new Error("O ID informado não existe na tabela de usuários");
            } else {
                res.status(200).send({
                    userData: userId,
                })
            }
        } else {
            throw new Error("faltou o Id do usuário");
        }
    } catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
});

const updateUser = async (field: string, value: string, id: number): Promise<any> => {
    const result = await connection.raw(`
    UPDATE TodoListUser SET ${field} = '${value}' WHERE (id = ${id});
    `);
    return result[0][0]
};

app.post("/user/edit", async (req: Request, res: Response) => {
    try {
        if ((req.body.name == "") || (req.body.nickname == "") || (req.body.email == "")) {
            throw new Error("Existem campos vazios")
        }
        if (req.body.id, req.body.name) {
            const newName = await updateUser("name", req.body.name, req.body.id)
        }
        if (req.body.id, req.body.nickname) {
            const NewNick = await updateUser("nickname", req.body.nickname, req.body.id)
        }
        if (req.body.id, req.body.email) {
            const newEmail = await updateUser("email", req.body.email, req.body.id)
        }
        res.status(200).send({
            message: "Dados atualizados"
        })
    } catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
});

const createTask = async (title: string, description: string, limitDate: Date, creatorId: number): Promise<any> => {
    const newTask = await connection.raw(`
    INSERT INTO TodoListTask (title, description, limit_date, creator_user_id) VALUES ("${title}","${description}","${limitDate}",${creatorId},)
    `);
    const taskId = await connection.raw(`
    SELECT id as nid FROM TodoListTask WHERE title = ${title} AND creator_user_id = ${creatorId}
    `);
    
    return taskId[0][0].nid
};

app.put("/task", async (req: Request, res: Response) => {
    try {
        const newTask = await createTask(req.body.title, req.body.description, req.body.limitDate, req.body.creatorId)

        res.status(200).send({
            message: "Tarefa criada com sucesso",
            ID: newTask
        })
    } catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
});