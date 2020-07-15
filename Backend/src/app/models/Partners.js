import Sequelize, { Model } from "sequelize";


class Partner extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            tel: Sequelize.STRING,
            company: Sequelize.STRING,
            cep: Sequelize.STRING,
            plan: Sequelize.STRING,
            register: Sequelize.BOOLEAN,
        },
        {
            sequelize,
        });
        return this;
    }

}

export default Partner;