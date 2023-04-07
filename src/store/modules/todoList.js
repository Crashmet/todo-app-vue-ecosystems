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
    ADD_NEW_TASK({ todoList }, task) {
      todoList.push(task);
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

    SET_STATUS({ todoList }, { isComplited, item }) {
      todoList.forEach(function foo(el) {
        if (el.title === item.title && el.id === item.id) {
          return (el.isComplited = isComplited);
        } else if (el.childs.length > 0) {
          el.childs.forEach(foo);
        }
      });
    },

    DELETE_TASK({ todoList }, task) {
      let idX = null;

      todoList.forEach(function foo(el, id) {
        if (el.title === task.title && el.id === task.id) {
          return (idX = id);
        } else if (el.childs.length > 0) {
          el.childs.map(foo);

          if (idX !== null) {
            el.childs.splice(idX, 1);
            idX = null;
          }
        }
      });

      if (idX !== null) {
        todoList.splice(idX, 1);
      }
    },

    RENAME_LIST_NAME({ todoList }, listName) {
      todoList.forEach(function foo(el) {
        el.listName = listName;

        if (el.childs.length > 0) {
          el.childs.forEach(foo);
        }
      });
      console.log(todoList);
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

    setComplitedStatus({ commit }, complitedItem) {
      commit('SET_STATUS', complitedItem);
    },

    deleteTask({ commit }, task) {
      commit('DELETE_TASK', task);
    },

    renameListName({ commit }, listName) {
      commit('RENAME_LIST_NAME', listName);
    },
  },
};
