<template>
  <v-container class="pt-0">
    <v-card>
      <v-list>
        <template v-if="todoList.length > 0">
          <todo-item
            v-for="(item, id) in todoList"
            :key="id"
            :item="item"
            :depth="0"
          />
        </template>
        <template v-else>
          <v-card-title class="accent-1">
            <strong class="subheading">Список пуст</strong>
          </v-card-title>
          <v-divider></v-divider>
        </template>
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
