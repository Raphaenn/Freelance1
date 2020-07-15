"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);

var _Categories = require('../models/Categories'); var _Categories2 = _interopRequireDefault(_Categories);

class CategoriesController {

    // Rota de listagem
    async index(req, res) {

        const categoriesList = await _Categories2.default.findAll({
            order: [ 'id' ],
            attributes: ['id', 'name', 'city', 'state']
        })

        return res.json(categoriesList);
    }

    // Rota de criação
    async store(req, res) {

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            city: Yup.string().required(),
            state: Yup.string().required()
        })

        if(!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validations fails' })
        };

        const categoriesExists = await _Categories2.default.findOne({ where: { name: req.body.name } });

        if(categoriesExists) {
            return res.status(400).json({error: "Company already exists"});
        }

        const SaveCategory = await _Categories2.default.create(req.body);

        return res.json(SaveCategory);

    }

    // Rota de edição
    async update(req, res) {

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            city: Yup.string().required(),
            state: Yup.string().required()
        })

        if(!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validations fails' })
        };

        const categories = await _Categories2.default.findByPk(req.params.id)

        await categories.update(req.body);

        const { name, city, state } = await _Categories2.default.findByPk(req.params.id)

        return res.json({ name, city, state })
    }
}

exports. default = new CategoriesController();