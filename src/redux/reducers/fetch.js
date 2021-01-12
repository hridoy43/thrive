export const userReducer = (state = null, action) => {
    switch (action.type) {
        case 'USER_REQUEST_SUCCESS':
            return { data: action.payload.data };
        case 'USER_REQUEST_FAIL':
            return { data: {} };
        default:
            return state;
    }
};

export const repoReducer = (state = null, action) => {
    switch (action.type) {
        case 'REPO_REQUEST_SUCCESS':
            return { data: action.payload.data };
        case 'REPO_REQUEST_FAIL':
            return { data: {} };
        default:
            return state;
    }
};
