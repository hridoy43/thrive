export const userReducer = (state = null, action) => {
    switch (action.type) {
        case 'USER_REQUEST':
            return { ...state, status: true };
        case 'USER_REQUEST_SUCCESS':
            return { ...state, status: false, data: action.payload.data };
        case 'USER_REQUEST_FAIL':
            return { ...state, status: false, data: null };
        default:
            return state;
    }
};

export const repoReducer = (state = null, action) => {
    switch (action.type) {
        case 'REPO_REQUEST':
            return { ...state, status: true };
        case 'REPO_REQUEST_SUCCESS':
            return { ...state, status: false, data: action.payload.data };
        case 'REPO_REQUEST_FAIL':
            return { ...state, status: false, data: null };
        default:
            return state;
    }
};
