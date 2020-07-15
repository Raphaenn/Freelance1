import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

// import history from '../../../services/history';
import api from "../../../services/api";
import { addCatFailure } from "./actions";

export function* CategoryRegister({ payload }) {

    try {
        const { name, city, state } = payload.catForm; 

        yield call(api.post, 'categories', {
            name,
            city,
            state
        });

        toast.success('Cadastro realizado com sucesso!');


    } catch (err) {
        toast.error('Erro ao cadastrar categoria, confira os dados!');
        yield put(addCatFailure())
    }

}


export default all([
    takeLatest('ADD_CATEGORY_REQUEST', CategoryRegister),
]);