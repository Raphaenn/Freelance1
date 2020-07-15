import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import history from '../../../services/history';
import api from "../../../services/api";
import { addCompanyFailure, updateProfileSuccess, updateCompanyFailure, deleteCompanyFailure } from "./actions";

export function* CompanyRegister({ payload }) {

    try {
        const { name, email, address, phone, cep, social, open_to, latitude, longitude, obs, paymentform, ticket } = payload.formulario; 

        yield call(api.post, 'companies', {
            name,
            email,
            social,
            phone,
            cep,
            address,
            open_to,
            latitude,
            longitude,
            paymentform,
            obs,
            ticket,
            path1: 16,
            category: 1,
            highlight: false,
        });

        toast.success('Cadastro realizado com sucesso!');


    } catch (err) {
        toast.error('Erro ao cadastrar empresa, confira os dados!');
        yield put(addCompanyFailure())
    }

}

export function* updateCompany({ payload }) {

    try {

        const { id, name, email, address, phone, cep, social, open_to, latitude, longitude, obs, paymentform, ticket, ticket2, ticket3, ticket4, highlight, category, path1 } = payload.data; 

        const CompanyData = { id, name, email, address, phone, cep, social, open_to, latitude, longitude, obs, paymentform, ticket, ticket2, ticket3, ticket4, highlight, category, path1 }

        const response = yield call(api.put, `companies/${id}`, CompanyData);

        toast.success('Dados atualizados com sucesso!');

        yield put(updateProfileSuccess(response.data))

    } catch(err) {
        toast.error('Erro ao atualizar dados, tente novamente.');
        yield put(updateCompanyFailure())
    }

}

export function* deleteCompany({ payload }) {
    try {
        const { id } = payload.item; 

        yield call(api.delete, `companies/${id}`);

        toast.success('Empresa excluída com sucesso!');

        setTimeout(() => {  history.push('home'); }, 3000);

    } catch(err) {
        toast.error('Erro excluir empresa, tente novamente.');
        yield put(deleteCompanyFailure())
    }
}

export default all([
    takeLatest('ADD_COMPANY_REQUEST', CompanyRegister),
    takeLatest('DELETE_COMPANY_REQUEST', deleteCompany),
    takeLatest('UPDATE_COMPANY_REQUEST', updateCompany),
]);