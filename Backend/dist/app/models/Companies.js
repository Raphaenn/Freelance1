"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);


class Companies extends _sequelize.Model {
    static init(sequelize) {
        super.init({
              name: _sequelize2.default.STRING,
              email: _sequelize2.default.STRING,
              social: _sequelize2.default.STRING,
              phone: _sequelize2.default.STRING,
              cep: _sequelize2.default.STRING,
              address: _sequelize2.default.STRING,
              open_to: _sequelize2.default.STRING,
              latitude: _sequelize2.default.DECIMAL(6, 9),
              longitude: _sequelize2.default.DECIMAL(6, 9),
              paymentform: _sequelize2.default.STRING,
              ticket2: _sequelize2.default.STRING,
              ticket3: _sequelize2.default.STRING,
              ticket4: _sequelize2.default.STRING,
              obs: _sequelize2.default.STRING,
              ticket: _sequelize2.default.STRING,
              highlight: _sequelize2.default.BOOLEAN,
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

exports. default = Companies;