<template>
  <v-form @submit.prevent="handlerAddNewTask">
    <v-container class="pt-0 pb-0">
      <v-row>
        <v-col cols="12" md="7" class="pt-1 pb-0">
          <v-text-field label="Добавить" solo v-model="title"></v-text-field>
        </v-col>

        <!-- <v-col cols="12" md="3" class="pr-0 pt-1 pb-0">
            <v-autocomplete 
            v-model="value"
            :items="//"
            solo
            label="Подзадача"
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
                  <v-icon>
                    {{data.item.action}}
                  </v-icon>
              </template></v-autocomplete>
          </v-col> -->

        <v-col cols="12" md="2" class="pt-1 pb-0">
          <v-select v-model="icon" :items="icons" solo label="Icons ?">
            <template v-slot:selection="data">
              <v-chip
                :input-value="data.selected"
                close
                @click:close="removeItemSelect(data.item)"
              >
                <v-icon>
                  {{ data.item }}
                </v-icon>
              </v-chip>
            </template>
            <template v-slot:item="data">
              <v-chip :input-value="data.selected">
                <v-icon>
                  {{ data.item }}
                </v-icon>
              </v-chip>
            </template></v-select
          >
        </v-col>
        <v-col cols="12" md="1" class="pt-0 pb-0">
          <v-btn type="submit" class="mb-2" fab dark color="teal">
            <v-icon>
              {{ 'mdi-plus' }}
            </v-icon></v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'TodoFormAdd',

  data() {
    return {
      icon: null,
      title: '',
    };
  },

  computed: {
    ...mapGetters('icons', ['icons']),
  },

  methods: {
    resetForm() {},

    handlerAddNewTask() {
      const icon = this.icon ? this.icon.action : null;

      const dataTask = {
        icon,
        title: this.title,
      };

      this.$emit('handlerAddNewTask', dataTask);
    },

    removeItemSelect(item) {
      this.icon = null;
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

.menuable__content__active {
  max-height: 100% !important;
}
</style>
