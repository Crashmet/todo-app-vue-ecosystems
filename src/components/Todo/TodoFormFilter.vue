<template>
  <v-form>
    <v-container class="pt-0 pb-0">
      <v-text-field
        label="Поиск по фильтру"
        v-model.trim="filter"
      ></v-text-field>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'TodoFormFilter',
  data() {
    return {
      filter: '',
    };
  },
};
</script>
