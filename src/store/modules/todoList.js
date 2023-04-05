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

    ADD_CHILD({ todoList }, task) {
      todoList.forEach(function foo(el) {
        if (el.title === task.parent.title && el.id === task.parent.id) {
          el.childs.push(task);
          return;
        } else if (el.childs.length > 0) {
          el.childs.forEach(foo);
        }
      });
    },
  },
  getters: {
    todoList: ({ todoList }) => todoList,
  },
  actions: {
    addNewTask({ commit }, task) {
      console.log('VUEX', task);
      commit('ADD_NEW_TASK', task);
    },

    addChild({ commit }, task) {
      commit('ADD_CHILD', task);
    },
  },
};
