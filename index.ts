import express, { Express, Request, Response } from "express";

import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import * as database from "./config/database";
database.connect();

import { routesClient } from "./routes/client/index.route";
import { routesAdmin } from "./routes/admin/index.route";
import { systemConfig } from "./config/system";
import path from "path";
import methodOverride from "method-override";

const app: Express = express();
const port: number = 3000;

app.set('views', `${__dirname}/views`); // Tìm đến thư mục tên là views / Sử dụng trực tiếp biến dirname để môi trường deploy hiểu 
app.set('view engine', 'pug'); // template engine sử dụng: pug

app.use(express.static(`${__dirname}/public`)); // Thiết lập thư mục chứa file tĩnh

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// App Local Variables
app.locals.prefixAdmin = systemConfig.prefixAdmin;
// TinyMCE
app.use('/tinymce', express.static(path.join(__dirname, 'node_modules', 'tinymce')));

app.use(methodOverride("_method"));

routesAdmin(app);
routesClient(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});