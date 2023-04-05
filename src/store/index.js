import Vue from 'vue';
import Vuex from 'vuex';
import todoList from './modules/todoList';
import icons from './modules/icons';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { todoList, icons },
});
