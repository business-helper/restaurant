const TOKEN_KEY = "manager_token";
const USER_KEY = "manager";

export const getToken = () => {
    return window.localStorage.getItem(TOKEN_KEY);
};

export const saveToken = token => {
    window.localStorage.setItem(TOKEN_KEY, token);
};

export const destroyToken = () => {
    window.localStorage.removeItem(TOKEN_KEY);
};

export const getUser = () => {
    return window.localStorage.getItem(USER_KEY);
};

export const saveUser = user => {
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));

};

export const destroyUser = () => {
    window.localStorage.removeItem(USER_KEY);
};

export default {getToken, saveToken, destroyToken, getUser, saveUser, destroyUser};
