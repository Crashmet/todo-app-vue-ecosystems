<template>
  <v-list-item-group v-model="selected" active-class="primary--text" multiple>
    <v-list-item :style="indent" @click="handlerAddComplite">
      <template v-slot:default="{ active }">
        <v-icon dense class="mr-4">{{ item.icon || 'mdi-minus' }}</v-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>

          <v-list-item-subtitle class="text--primary"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action class="mr-3">
          <v-icon v-if="!active" color="grey lighten-1">
            mdi-star-outline
          </v-icon>

          <v-icon v-else color="yellow darken-3"> mdi-star </v-icon>
        </v-list-item-action>
        <v-icon color="red lighten-2" @click.stop="hedlerDeleteTask">
          mdi-cancel
        </v-icon>
      </template>
    </v-list-item>
    <todo-item
      v-for="(item, id) in item.childs"
      :key="id"
      :item="item"
      :depth="depth + 1"
    />
  </v-list-item-group>
</template>

<script>
import { mapActions } from 'vuex';

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
  data() {
    return {
      selected: [],

      isComplited: false,
    };
  },
  computed: {
    indent() {
      return { 'padding-left': `${this.depth * 40 + 16}px` };
    },
  },
  methods: {
    ...mapActions('todoList', ['setComplitedStatus', 'deleteTask']),

    handlerAddComplite() {
      this.isComplited = !this.isComplited;

      this.setComplitedStatus({
        isComplited: this.isComplited,
        item: this.item,
      });
    },

    hedlerDeleteTask() {
      this.deleteTask(this.item);
    },
  },
};
</script>

<style scoped></style>
