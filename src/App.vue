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
          items: [{ title: 'List Item' }],
          title: 'Attractions',
        },
        {
          action: 'mdi-silverware-fork-knife',
          active: true,
          items: [
            { title: 'Breakfast & brunch' },
            { title: 'New American' },
            { title: 'Sushi' },
          ],
          title: 'Dining',
        },
        {
          action: 'mdi-school',
          items: [{ title: 'List Item' }],
          title: 'Education',
        },
        {
          action: 'mdi-human-male-female-child',
          items: [{ title: 'List Item' }],
          title: 'Family',
        },
        {
          action: 'mdi-bottle-tonic-plus',
          items: [{ title: 'List Item' }],
          title: 'Health',
        },
        {
          action: 'mdi-briefcase',
          items: [{ title: 'List Item' }],
          title: 'Office',
        },
        {
          action: 'mdi-tag',
          items: [{ title: 'List Item' }],
          title: 'Promotions',
        },
      ],
    };
  },

  created() {},

  methods: {},
};
</script>
