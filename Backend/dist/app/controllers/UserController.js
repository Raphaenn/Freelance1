"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);

var _Users = require('../models/Users'); var _Users2 = _interopRequireDefault(_Users);

class UserController {
    async store(req, res) {

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().required(),
            password: Yup.string().required().min(6),
        });

        if(!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Validation Fails" })
        }

        const userExists = await _Users2.default.findOne({ where: { email: req.body.email } })

        if(userExists) { 
            return res.status(400).json({ error: "User already exists" })
        }

        const user = await _Users2.default.create(req.body);

        return res.json(user);
    }
}

exports. default = new UserController();