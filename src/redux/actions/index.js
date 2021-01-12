export const signIn = () => ({
    type: 'SIGN_IN',
});

export const signOut = () => ({
    type: 'SIGN_OUT',
});

export function fetchUser() {
    return {
        type: 'USER_REQUEST',
        payload: {
            request: {
                url: '/users/rakibtg',
            },
        },
    };
}

export function fetchRepo() {
    return {
        type: 'REPO_REQUEST',
        payload: {
            request: {
                url: '/users/rakibtg/repos',
            },
        },
    };
}
