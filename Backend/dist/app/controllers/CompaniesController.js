"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);

var _Companies = require('../models/Companies'); var _Companies2 = _interopRequireDefault(_Companies);
var _File = require('../models/File'); var _File2 = _interopRequireDefault(_File);
var _Categories = require('../models/Categories'); var _Categories2 = _interopRequireDefault(_Categories);

class CompaniesController {

    // Rota de listagem
    async index(req, res) {
        const { page = 1 } = req.query;

        const companiesList = await _Companies2.default.findAll({
            order: [ 'id' ],
            attributes: [ 'id', 'name', 'email', 'social', 'phone', 'cep', 'address', 'open_to', 'latitude', 'longitude', 'paymentform', 'obs', 'ticket', 'ticket2', 'ticket3', 'ticket4', 'highlight'],
            limit: 20,
            offset: (page -1) * 20,
            include: [
                {
                    model: _File2.default,
                    as: 'path',
                    attributes: [ 'id', 'path', 'url' ],
                },
                {
                    model: _Categories2.default,
                    as: 'categories',
                    attributes: [ 'id', 'name', 'city', 'state' ]
                },
            ],
        });

        return res.json(companiesList);
    }

    // Rota de criação
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().required(),
            social: Yup.string(),
            phone: Yup.string().required(),
            cep: Yup.string().required(),
            address: Yup.string().required(),
            open_to: Yup.string(),
            latitude: Yup.string(),
            longitude: Yup.string(),
            paymentform: Yup.string(),
            ticket2: Yup.string(),
            ticket3: Yup.string(),
            ticket4: Yup.string(),
            obs: Yup.string(),
            ticket: Yup.string(),
            highlight: Yup.string(),
        });

        if(!(await schema.isValid(req.body))) {
            return res.status(400).json({error: "Validations fails"})
        }

        const companyExists = await _Companies2.default.findOne({ where: { name: req.body.name } })
        
        if(companyExists) {
            return res.status(400).json({error: "Company already exists"});
        }

        const SaveCompanie = await _Companies2.default.create(req.body);

        return res.json(SaveCompanie);


    }

    // ROTA DE UPDATE
    async update(req, res) {

        const schema = Yup.object().shape({
            name: Yup.string(),
            email: Yup.string(),
            social: Yup.string(),
            phone: Yup.string(),
            cep: Yup.string(),
            address: Yup.string(),
            open_to: Yup.string(),
            latitude: Yup.string(),
            longitude: Yup.string(),
            paymentform: Yup.string(),
            ticket2: Yup.string(),
            ticket3: Yup.string(),
            ticket4: Yup.string(),
            obs: Yup.string(),
            ticket: Yup.string(),
            highlight: Yup.string()
        });

        if(!(await schema.isValid(req.body))) {
            return res.status(400).json({error: "Validations fails"})
        }


        const companies = await _Companies2.default.findByPk(req.params.id)

        await companies.update(req.body);

        const { name, email, social, phone, cep, address, open_to, latitude, longitude, paymentform, ticket2, ticket3, ticket4, obs, ticket, path, categories, highlight } = await _Companies2.default.findByPk(req.params.id, {
            include: [
                {
                    model: _File2.default,
                    as: 'path',
                    attributes: [ 'id', 'path', 'url' ]
                },
                {
                    model: _Categories2.default,
                    as: 'categories',
                    attributes: [ 'id', 'name', 'city', 'state' ]
                },
            ]
        })

        
        return res.json({name, email, social, phone, cep, address, open_to, latitude, longitude, paymentform, obs, ticket, ticket2, ticket3, ticket4, path, categories, highlight})
    }

    // Rota de exclusão
    async delete(req, res) {
        
        const companies = await _Companies2.default.findByPk(req.params.id)

        await companies.destroy()

        return res.send("Empresa cancelada com sucesso")

    }
}

exports. default = new CompaniesController();