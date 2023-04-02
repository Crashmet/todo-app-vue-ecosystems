<template>
    <v-form >
      <v-container class="pt-0 pb-0">
        <v-row>
          <v-col cols="12" md="9" class="pr-0 pt-0 pb-0">
            <v-text-field
              label="Добавить"
              solo
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3" class="pt-0 pb-0">
            <v-autocomplete
            v-model="value"
            :items="items"
            solo
            label="Icons ?"
          >
          <template v-slot:selection="data">
            
                <v-chip
                v-bind="data.item"
                :input-value="data.selected"
                  close
                  @click:close="removeItemSelect(data.item)"
                >
                <v-icon>
                    {{data.item.action}}
                </v-icon>
                </v-chip>

              </template>
              <template v-slot:item="data">
                <template>
                  <v-icon>
                    {{data.item.action}}
                  </v-icon>
                  
                </template>
              </template></v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: 'TodoFormAdd',
 

  data() {
    return {
      value: null,
      
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
  methods: {
    removeItemSelect(item) {
      this.value = null
    },
  },
  
  
};
</script>

<style>
.v-input__slot {
  margin-bottom: 6px;
}

.v-autocomplete.v-select.v-input--is-focused input {
    min-width: 0;
}
</style>
