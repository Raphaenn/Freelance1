import Sequelize, { Model } from "sequelize";


class Companies extends Model {
    static init(sequelize) {
        super.init({
              name: Sequelize.STRING,
              email: Sequelize.STRING,
              social: Sequelize.STRING,
              phone: Sequelize.STRING,
              cep: Sequelize.STRING,
              address: Sequelize.STRING,
              open_to: Sequelize.STRING,
              latitude: Sequelize.DECIMAL(6, 9),
              longitude: Sequelize.DECIMAL(6, 9),
              paymentform: Sequelize.STRING,
              ticket2: Sequelize.STRING,
              ticket3: Sequelize.STRING,
              ticket4: Sequelize.STRING,
              obs: Sequelize.STRING,
              ticket: Sequelize.STRING,
              highlight: Sequelize.BOOLEAN,
        },
        {
            sequelize,
        });
        return this;
    }

    static associate(models) {
        this.belongsTo(models.File, {foreignKey: 'path1', as: 'path'}) // passado que o codinome do file seria avatar
        this.belongsTo(models.Categories, {foreignKey: 'category', as: 'categories'})
    }
}

export default Companies;