"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');

var _Companies = require('../models/Companies'); var _Companies2 = _interopRequireDefault(_Companies);

class PointController {
    async index(req, res) {
        const { latitude, longitude } = req.query;

        const haversine = `(6371 * acos(cos(radians(${latitude}))
        * cos(radians(latitude))
        * cos(radians(longitude)
        - radians(${longitude}))
        + sin(radians(${latitude}))
        * sin(radians(latitude))))`;


        const points = await _Companies2.default.findAll({
            where: _sequelize.where.call(void 0, _sequelize.literal.call(void 0, haversine), "<=", 10)
          });


        return res.json(points);
    };

}

exports. default = new PointController();