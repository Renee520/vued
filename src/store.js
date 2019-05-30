import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const types = {
  TITLE: 'TITLE',
  LOGIN: 'LOGIN',
  TRANSITION_NAME: 'TRANSITION_NAME',
  PREV_ROUTERS: 'PREV_ROUTERS',
};

export default new Vuex.Store({
  state: {
    title: '',
    login: false,
    prevRouters: [],
    transitionName: '',
  },
  mutations: {
    [types.TITLE](state, data) {
      state.title = data;
    },
    [types.LOGIN](state, data) {
      state.login = data;
    },
    [types.TRANSITION_NAME](state, data) {
      state.transitionName = data;
    },
    [types.PREV_ROUTERS](state, data) {
      state.prevRouters = data;
      state.prevRouters.splice();
    },
  },
  actions: {
    setTitle: ({ commit }, title) => {
      commit(types.TITLE, title);
    },
    setLogin: ({ commit }, login) => {
      commit(types.LOGIN, login);
    },
    setTransitionName: ({ commit }, name) => {
      commit(types.TRANSITION_NAME, name);
    },
  },
  getters: {
    title(state) {
      return state.title;
    },
    login(state) {
      return state.login;
    },
    transitionName(state) {
      return state.transitionName;
    },
  },
});
