<template>
  <v-app>
    <Header class="mb-4" @setTitleTodo="setTitleTodo" />

    <v-main>
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
        <todo-form @handlerAddNewTask="handlerAddNewTask" />
        <todo-list />
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import { mapGetters, mapActions } from 'vuex';

import Header from '@/components/Header/Header.vue';
import TodoList from '@/components/Todo/TodoList.vue';
import TodoForm from '@/components/Todo/TodoForm.vue';

export default {
  name: 'App',
  components: {
    Header,
    TodoForm,
    TodoList,
  },

  data() {
    return {
      titleTodo: '',
    };
  },

  created() {},

  methods: {
    ...mapActions('todoList', ['addNewTask', 'addChild']),

    setTitleTodo(title) {
      this.titleTodo = title;
    },

    handlerAddNewTask(item) {
      const { title, icon, parent } = item;

      const task = {
        id: uuidv4(),
        icon,
        title,
        listName: this.titleTodo,
        isComplited: false,
        parent: parent,
        childs: [],
      };

      if (parent !== null) {
        this.addChild(task);
        return;
      }

      this.addNewTask(task);
    },
  },
};
</script>
