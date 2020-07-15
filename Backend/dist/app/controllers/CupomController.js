"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);

var _Companies = require('../models/Companies'); var _Companies2 = _interopRequireDefault(_Companies);
var _Categories = require('../models/Categories'); var _Categories2 = _interopRequireDefault(_Categories);
var _Cupons = require('../models/Cupons'); var _Cupons2 = _interopRequireDefault(_Cupons);

class CupomController {

    // Rota de listagem
    async index(req, res) {
        const { page = 1 } = req.query;

        const cupomList = await _Cupons2.default.findAll({
            order: [ 'id' ],
            attributes: [ 'id', 'name'],
            limit: 20,
            offset: (page -1) * 20,
            include: [
                {
                    model: _Companies2.default,
                    as: 'companies',
                    attributes: [ 'id', 'name', 'cep', 'highlight' ],
                },
                {
                    model: _Categories2.default,
                    as: 'category',
                    attributes: [ 'id', 'name', 'city', 'state' ]
                },
            ],
        });

        return res.json(cupomList);
    }

    // Rota de criação
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
        });

        if(!(await schema.isValid(req.body))) {
            return res.status(400).json({error: "Validations fails"})
        }

        /* const cupomExists = await Cupons.findOne({ where: { name: req.body.name } })
        
        if(cupomExists) {
            return res.status(400).json({error: "Company already exists"});
        } */

        const SaveCupom = await _Cupons2.default.create(req.body);

        return res.json(SaveCupom);


    }


    // Rota de exclusão
    async delete(req, res) {
        
        const cupom = await _Cupons2.default.findByPk(req.params.id)

        await cupom.destroy()

        return res.send("Cupom cancelada com sucesso")

    }
}

exports. default = new CupomController();