"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);


class Cupons extends _sequelize.Model {
    static init(sequelize) {
        super.init({
              name: _sequelize2.default.STRING,
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

exports. default = Cupons;