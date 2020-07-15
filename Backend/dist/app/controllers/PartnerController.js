"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);

var _Partners = require('../models/Partners'); var _Partners2 = _interopRequireDefault(_Partners);

class PartnerController {

    // Rota de listagem
    async index(req, res) {

        const partnerList = await _Partners2.default.findAll({
            order: [ 'id' ],
            attributes: ['id', 'name', 'email', 'tel', 'company', 'cep', 'register', 'plan']
        })

        return res.json(partnerList);
    }

    // Rota de criação
    async store(req, res) {

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().required(),
            tel: Yup.string().required(),
            company: Yup.string().required(),
            cep: Yup.string().required(),
            plan: Yup.string().required(),
        })

        if(!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validations fails' })
        };

        const partnerExists = await _Partners2.default.findOne({ where: { company: req.body.company } });

        if(partnerExists) {
            return res.status(400).json({error: "Company already exists"});
        }

        const SaveNewpartner = await _Partners2.default.create(req.body);

        return res.json(SaveNewpartner);

    }

    // Rota de edição
    async update(req, res) {

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().required(),
            tel: Yup.string().required(),
            company: Yup.string().required(),
            cep: Yup.string().required(),
            plan: Yup.string().required(),
            register: Yup.boolean().required(),
        })

        if(!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validations fails' })
        };

        const partneredit = await _Partners2.default.findByPk(req.params.id)

        await partneredit.update(req.body);

        const { name, email, tel, cep, company, plan, register } = await _Partners2.default.findByPk(req.params.id)

        return res.json({ name, email, tel, cep, company, plan, register })
    }
}

exports. default = new PartnerController();