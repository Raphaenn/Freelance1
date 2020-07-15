import * as Yup from "yup";

import Categories from "../models/Categories";

class CategoriesController {

    // Rota de listagem
    async index(req, res) {

        const categoriesList = await Categories.findAll({
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

        const categoriesExists = await Categories.findOne({ where: { name: req.body.name } });

        if(categoriesExists) {
            return res.status(400).json({error: "Company already exists"});
        }

        const SaveCategory = await Categories.create(req.body);

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

        const categories = await Categories.findByPk(req.params.id)

        await categories.update(req.body);

        const { name, city, state } = await Categories.findByPk(req.params.id)

        return res.json({ name, city, state })
    }
}

export default new CategoriesController();