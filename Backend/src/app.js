import express from "express";
import cors from 'cors';
import helmet from "helmet";
import path from "path";

import routes from "./routes";

import "./database";

class App {
    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
    }


    middlewares() {
        this.server.use(cors());
        this.server.use(helmet());
        this.server.use(express.json()); // possibilita o uso do json
        this.server.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))); // utilizado 
    }

    routes() {
        this.server.use(routes) // carrega as rotas
    }

}

export default new App().server;