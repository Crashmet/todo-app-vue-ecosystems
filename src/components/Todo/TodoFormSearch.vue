<template>
    <v-form >
      <v-container class="pt-0 pb-0">
        <v-row>
          <v-col cols="12" md="8" class="pr-0 pt-0 pb-0">
            <v-text-field
              label="Добавить"
              solo
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4" class="pt-0 pb-0">
            <v-autocomplete
              :items="items"
              chips
              clearable
              hide-details
              hide-selected
              item-text="name"
              item-value="id"
              label="Icons ?"
              solo
            >

              <template v-slot:selection="{ attr, on, item, selected }">
                <v-chip
                  v-bind="attr"
                  :input-value="selected"
                  color="blue-grey"
                  class="white--text"
                  v-on="on"
                >
                  <v-icon left> mdi-bitcoin </v-icon>
                  <span v-text="item.name"></span>
                </v-chip>
              </template>
              <template v-slot:item="{ item }">
                <v-list-item-avatar
                  color="indigo"
                  class="text-h5 font-weight-light white--text"
                >
                  {{ item.name.charAt(0) }}
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-text="item.name"></v-list-item-title>
                  <v-list-item-subtitle
                    v-text="item.symbol"
                  ></v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-icon>mdi-bitcoin</v-icon>
                </v-list-item-action>
              </template>
            </v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: 'TodoFormSearch',
  data() {
    return {
      items: [
        {
          action: 'mdi-ticket',
         
        },
        {
          action: 'mdi-silverware-fork-knife',
         
        },
        {
          action: 'mdi-school',
         
        },
        {
          action: 'mdi-human-male-female-child',
         
        },
        {
          action: 'mdi-bottle-tonic-plus',
         
        },
        {
          action: 'mdi-briefcase',
         
        },
        {
          action: 'mdi-tag',
        },
      ],
    };
  },
};
</script>

<style>
.v-input__slot {
  margin-bottom: 6px;
}
</style>
