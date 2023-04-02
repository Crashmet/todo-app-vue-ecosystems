<template>
  <v-app>
    <Header class="mb-4" />

    <v-main>
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
        <todo-form />
        <todo-list :items="items" />
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
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
      items: [
        {
          action: 'mdi-ticket',
          childs: [
            {
              childs: [],
              title: 'Suzuki',
            },
          ],
          title: 'Attractions',
        },
        {
          action: 'mdi-silverware-fork-knife',
          childs: [
            {
              childs: [],
              title: 'Suzuki',
            },
          ],
          title: 'Dining',
        },
        {
          action: 'mdi-ticket',
          childs: [],
          title: 'Suzuki',
        },
      ],
    };
  },

  created() {},

  methods: {},
};
</script>
