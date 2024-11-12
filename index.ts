import express, { Express, Request, Response } from "express";

import dotenv from "dotenv";
dotenv.config();
import * as database from "./config/database";
database.connect();

import { Topic } from "./models/topic.model";

const app: Express = express();
const port: number = 3000;

app.set('views', `${__dirname}/views`); // Tìm đến thư mục tên là views / Sử dụng trực tiếp biến dirname để môi trường deploy hiểu 
app.set('view engine', 'pug'); // template engine sử dụng: pug

app.get("/topics", async (req: Request, res: Response) => {
    const topics = await Topic.find({
        deleted: false
    });
    console.log(topics);

    res.render("client/pages/topics/index");
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});