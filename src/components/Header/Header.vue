<template>
  <div>
    <v-app-bar
      color="red"
      elevation="5"
      dense
      dark
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-col cols="12" md="4">
        <v-text-field v-model="title" label="Название проекта?"></v-text-field>
      </v-col>
      <v-spacer></v-spacer>
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
};
</script>

<style></style>
