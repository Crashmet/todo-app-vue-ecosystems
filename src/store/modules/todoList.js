import Vue from 'vue';

export default {
  namespaced: true,
  state: {
    todoList: [
      {
        id: 1,
        icon: null,
        title: 'set test',
        listName: 'LIST',
        isComplited: false,
        parent: null,
        childs: [],
      },
    ],
  },
  mutations: {
    ADD_NEW_TASK(state, task) {
      state.todoList.push(task);
      // Vue.set(state.todoList, task);
    },
  },
  getters: {
    todoList: ({ todoList }) => todoList,
  },
  actions: {
    addNewTask({ commit }, task) {
      console.log(task);
      commit('ADD_NEW_TASK', task);
    },
  },
};
