export function addToEdit(item) {
    return {
        type: 'ADD_TO_EDIT',
        item
    };
};

export function addRequest(formulario) {
    return {
        type: 'ADD_COMPANY_REQUEST',
        payload: { formulario },
    };
}

export function addCompany(formulario) {
    return {
        type: 'ADD_COMPANY_SUCCESS',
        payload: { formulario }
    }
}

export function addCompanyFailure() {
    return {
        type: 'ADD_COMPANY_FAILURE',
    };
}

export function deleteCompany(item) {
    return {
        type: 'DELETE_COMPANY_REQUEST',
        payload: { item }
    }
}

export function deleteCompanyFailure() {
    return {
        type: 'DELETE_COMPANY_FAILURE',
    };
}

export function updateCompanyRequest(data) {
    return {
        type: 'UPDATE_COMPANY_REQUEST',
        payload: { data },
    };
}

export function updateProfileSuccess(profile) {
    return { 
        type: 'UPDATE_PROFILE_SUCCESS',
        payload: {profile},
    };
}

export function updateCompanyFailure() {
    return {
        type: 'UPDATE_PROFILE_FAILURE',
    };
}