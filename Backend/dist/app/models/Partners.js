"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);


class Partner extends _sequelize.Model {
    static init(sequelize) {
        super.init({
            name: _sequelize2.default.STRING,
            email: _sequelize2.default.STRING,
            tel: _sequelize2.default.STRING,
            company: _sequelize2.default.STRING,
            cep: _sequelize2.default.STRING,
            plan: _sequelize2.default.STRING,
            register: _sequelize2.default.BOOLEAN,
        },
        {
            sequelize,
        });
        return this;
    }

}

exports. default = Partner;