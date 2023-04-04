<template>
  <v-container class="pb-0">
    <v-card color="orange accent-1">
      <v-card-title class="orange accent-1 white--text">
        <span class="text-h6">Что нового?</span>
      </v-card-title>
      <todo-form-add @handlerAddNewTask="handlerAddNewTask" />

      <todo-form-filter />
    </v-card>
  </v-container>
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
  methods: {
    handlerAddNewTask(item) {
      this.$emit('handlerAddNewTask', item);
    },
  },
};
</script>
