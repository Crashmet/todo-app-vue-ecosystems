<template>
  <v-container class="pt-0">
    <v-card>
      <v-list>
        <todo-item
          v-for="(item, id) in todoList"
          :key="id"
          :item="item"
          :depth="0"
        />
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

import TodoItem from './TodoItem.vue';

export default {
  name: 'TodoList',
  components: { TodoItem },
  data() {
    return {};
  },
  computed: {
    ...mapGetters('todoList', ['todoList']),
  },
};
</script>

<style scoped></style>
