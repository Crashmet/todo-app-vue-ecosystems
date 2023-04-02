<template>
  <v-card color="orange accent-1" class="mx-auto" max-width="600">
    <v-card-title class="orange accent-1 white--text">
      <span class="text-h6">Что нового?</span>
    </v-card-title>
    <todo-form-add />

    <todo-form-filter />
  </v-card>
</template>

<script>
import TodoFormAdd from './TodoFormAdd.vue';
import TodoFormFilter from './TodoFormFilter.vue';

export default {
  name: 'TodoForm',
  components: {
    TodoFormAdd,
    TodoFormFilter,
  },
};
</script>
