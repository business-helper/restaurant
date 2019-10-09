import JwtService from "../common/jwt.service";

const types = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT'
}

const state = {
    logged: !!window.localStorage.getItem('admin_token')
}

const mutations = {
    [types.LOGIN](state) {
        state.logged = true
    },

    [types.LOGOUT](state) {
        state.logged = false
    }
}

const getters = {
    isLogged: state => state.logged
}

const actions = {
    login({commit}, response) {
        JwtService.saveToken(response.token);
        JwtService.saveUser(response.user);
    },

    logout({commit}) {
        JwtService.destroyToken();
        JwtService.destroyUser();
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}
