import * as Yup from 'yup';

import User from "../models/Users";

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

        const userExists = await User.findOne({ where: { email: req.body.email } })

        if(userExists) { 
            return res.status(400).json({ error: "User already exists" })
        }

        const user = await User.create(req.body);

        return res.json(user);
    }
}

export default new UserController();