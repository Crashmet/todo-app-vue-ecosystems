<template>
  <div>
    <v-list-item :style="indent">
      <v-icon dense class="mr-4">{{ item.action || 'mdi-minus' }}</v-icon>

      <v-list-item-title>{{ item.title }}</v-list-item-title>

      <v-btn color="red" dark>
        <v-icon dark small> mdi-cancel </v-icon>
      </v-btn>
    </v-list-item>
    <todo-item
      v-for="(item, id) in item.childs"
      :key="id"
      :item="item"
      :depth="depth + 1"
    />
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  components: {},
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    depth: {
      type: Number,
    },
  },
  computed: {
    indent() {
      return { 'padding-left': `${this.depth * 40 + 16}px` };
    },
  },
};
</script>

<style scoped></style>
