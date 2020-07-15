import { literal, where } from "sequelize";

import Companies from "../models/Companies";

class PointController {
    async index(req, res) {
        const { latitude, longitude } = req.query;

        const haversine = `(6371 * acos(cos(radians(${latitude}))
        * cos(radians(latitude))
        * cos(radians(longitude)
        - radians(${longitude}))
        + sin(radians(${latitude}))
        * sin(radians(latitude))))`;


        const points = await Companies.findAll({
            where: where(literal(haversine), "<=", 50)
          });


        return res.json(points);
    };

}

export default new PointController();