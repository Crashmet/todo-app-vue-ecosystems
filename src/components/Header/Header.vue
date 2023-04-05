<template>
  <div>
    <v-app-bar
      color="orange accent-2"
      elevation="5"
      dense
      dark
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-col cols="12" md="4">
        <v-text-field
          v-model.trim="title"
          label="Название проекта?"
        ></v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-avatar color="white" size="30">
        <span class="orange--text text-h6">{{ avatarName }}</span>
      </v-avatar>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      title: '',
    };
  },
  computed: {
    avatarName() {
      return this.title.length ? this.title[0].toUpperCase() : 'K';
    },
  },

  watch: {
    title() {
      this.$emit('setTitleTodo', this.title);
    },
  },
};
</script>

<style></style>
