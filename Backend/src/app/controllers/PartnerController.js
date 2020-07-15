import * as Yup from "yup";

import Partner from "../models/Partners";

class PartnerController {

    // Rota de listagem
    async index(req, res) {

        const partnerList = await Partner.findAll({
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

        const partnerExists = await Partner.findOne({ where: { company: req.body.company } });

        if(partnerExists) {
            return res.status(400).json({error: "Company already exists"});
        }

        const SaveNewpartner = await Partner.create(req.body);

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

        const partneredit = await Partner.findByPk(req.params.id)

        await partneredit.update(req.body);

        const { name, email, tel, cep, company, plan, register } = await Partner.findByPk(req.params.id)

        return res.json({ name, email, tel, cep, company, plan, register })
    }
}

export default new PartnerController();