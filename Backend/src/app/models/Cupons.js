import Sequelize, { Model } from "sequelize";


class Cupons extends Model {
    static init(sequelize) {
        super.init({
              name: Sequelize.STRING,
        },
        {
            sequelize,
        });
        return this;
    }

    static associate(models) {
        this.belongsTo(models.Companies, {foreignKey: 'companies_id', as: 'companies'}) 
        this.belongsTo(models.Categories, {foreignKey: 'categories_id', as: 'category'})
    }
}

export default Cupons;