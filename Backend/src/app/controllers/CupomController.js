import * as Yup from "yup";

import Companies from "../models/Companies";
import Categories from "../models/Categories";
import Cupons from "../models/Cupons";

class CupomController {

    // Rota de listagem
    async index(req, res) {
        const { page = 1 } = req.query;

        const cupomList = await Cupons.findAll({
            order: [ 'id' ],
            attributes: [ 'id', 'name', 'created_at'],
            limit: 2000,
            offset: (page -1) * 2000,
            include: [
                {
                    model: Companies,
                    as: 'companies',
                    attributes: [ 'id', 'name', 'cep', 'highlight' ],
                },
                {
                    model: Categories,
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

        const SaveCupom = await Cupons.create(req.body);

        return res.json(SaveCupom);


    }


    // Rota de exclusão
    async delete(req, res) {
        
        const cupom = await Cupons.findByPk(req.params.id)

        await cupom.destroy()

        return res.send("Cupom cancelada com sucesso")

    }
}

export default new CupomController();