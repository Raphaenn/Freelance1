import * as Yup from "yup";

import Companies from "../models/Companies";
import File from "../models/File";
import Categories from "../models/Categories";

class CompaniesController {

    // Rota de listagem
    async index(req, res) {
        const { page = 1 } = req.query;

        const companiesList = await Companies.findAll({
            order: [ 'id' ],
            attributes: [ 'id', 'name', 'email', 'social', 'phone', 'cep', 'address', 'open_to', 'latitude', 'longitude', 'paymentform', 'obs', 'ticket', 'ticket2', 'ticket3', 'ticket4', 'highlight'],
            limit: 200,
            offset: (page -1) * 200,
            include: [
                {
                    model: File,
                    as: 'path',
                    attributes: [ 'id', 'path', 'url' ],
                },
                {
                    model: Categories,
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

        const companyExists = await Companies.findOne({ where: { name: req.body.name } })
        
        if(companyExists) {
            return res.status(400).json({error: "Company already exists"});
        }

        const SaveCompanie = await Companies.create(req.body);

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


        const companies = await Companies.findByPk(req.params.id)

        await companies.update(req.body);

        const { name, email, social, phone, cep, address, open_to, latitude, longitude, paymentform, ticket2, ticket3, ticket4, obs, ticket, path, categories, highlight } = await Companies.findByPk(req.params.id, {
            include: [
                {
                    model: File,
                    as: 'path',
                    attributes: [ 'id', 'path', 'url' ]
                },
                {
                    model: Categories,
                    as: 'categories',
                    attributes: [ 'id', 'name', 'city', 'state' ]
                },
            ]
        })

        
        return res.json({name, email, social, phone, cep, address, open_to, latitude, longitude, paymentform, obs, ticket, ticket2, ticket3, ticket4, path, categories, highlight})
    }

    // Rota de exclusão
    async delete(req, res) {
        
        const companies = await Companies.findByPk(req.params.id)

        await companies.destroy()

        return res.send("Empresa cancelada com sucesso")

    }
}

export default new CompaniesController();