export function addCatRequest(catForm) {
    return {
        type: 'ADD_CATEGORY_REQUEST',
        payload: { catForm },
    };
}

export function addCatFailure() {
    return {
        type: 'ADD_CATEGORY_FAILURE',
    };
}