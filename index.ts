import express, { Express, Request, Response } from "express"; 

const app: Express = express(); 
const port: number = 3000;

app.set('views', `${__dirname}/views`); // Tìm đến thư mục tên là views / Sử dụng trực tiếp biến dirname để môi trường deploy hiểu 
app.set('view engine', 'pug'); // template engine sử dụng: pug

app.get("/topics", (req: Request, res: Response) => {
    res.render("client/pages/topics/index");
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});