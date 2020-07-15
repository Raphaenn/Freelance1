import Sequelize from "sequelize";

import User from "../app/models/Users";
import Companies from "../app/models/Companies";
import File from "../app/models/File";
import Categories from "../app/models/Categories";
import Cupons from "../app/models/Cupons";
import Partner from "../app/models/Partners";

import databaseConfig from "../config/database";

const models = [ User, Partner, Companies, File, Categories, Cupons ];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection)).map(model => model.associate && model.associate(this.connection.models));
    }

}


export default new Database();