<template>
  <v-container class="pt-0">
    <v-card class="mx-auto" max-width="600">
      <v-list>
        <todo-item
          v-for="(item, id) in items"
          :key="id"
          :item="item"
          :depth="0"
        />
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import TodoItem from './TodoItem.vue';
export default {
  name: 'TodoList',
  components: { TodoItem },
  props: {
    items: Array,
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped></style>
