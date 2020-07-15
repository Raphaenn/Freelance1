import Sequelize, { Model } from "sequelize";


class Categories extends Model {
    static init(sequelize) {
        super.init({
              name: Sequelize.STRING,
              city: Sequelize.STRING,
              state: Sequelize.STRING,
        },
        {
            sequelize,
        });
        return this;
    }

}

export default Categories;