<template>
  <v-form @submit.prevent="handlerAddNewTask">
    <v-container class="pt-0 pb-0">
      <v-row>
        <v-col cols="12" sm="6" md="6" class="pt-1 pb-0">
          <v-text-field label="Добавить" solo v-model="title"></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3" class="pt-1 pb-0">
          <v-select
            v-model.trim="parent"
            :items="parentList"
            solo
            label="Подзадача ?"
          >
            <template v-slot:selection="data">
              <v-chip
                :input-value="data.selected"
                close
                @click:close="removeParentSelect(data.item)"
              >
                <v-icon>
                  {{ data.item.icon }}
                </v-icon>
                <span> {{ data.item.title }}</span>
              </v-chip>
            </template>
            <template v-slot:item="data">
              <v-chip :input-value="data.selected">
                <v-icon>
                  {{ data.item.icon }}
                </v-icon>
                <span> {{ data.item.title }}</span>
              </v-chip>
            </template></v-select
          >
        </v-col>

        <v-col cols="12" sm="6" md="2" class="pt-1 pb-0">
          <v-select v-model="icon" :items="icons" solo label="Icons ?">
            <template v-slot:selection="data">
              <v-chip
                :input-value="data.selected"
                close
                @click:close="removeIconSelect(data.item)"
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
        <v-col cols="12" sm="6" md="1" class="pt-0 pb-0">
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
      title: '',
      parent: null,
      icon: null,

      parentList: [],
    };
  },

  created() {
    this.getAllTasks(this.todoList);
  },

  computed: {
    ...mapGetters('icons', ['icons']),
    ...mapGetters('todoList', ['todoList']),

    parentListName() {
      return this.parentList.reduce((acc, el) => {
        acc.push(el.title);
        return acc;
      }, []);
    },
  },

  methods: {
    resetForm() {
      this.title = '';
      this.parent = null;
      this.icon = null;

      this.getAllTasks(this.todoList);
    },

    getAllTasks(tasks) {
      this.parentList = [];

      this.setAllTask(tasks);
    },

    setAllTask(tasks) {
      tasks.map((el) => {
        if (el.childs.length > 0) {
          this.setAllTask(el.childs);
        }
        return this.parentList.push({
          title: el.title,
          icon: el.icon,
          id: el.id,
        });
      });
    },

    addItemParentList(item) {
      if (!item.childs.length) {
        return this.parentList.push(item.title);
      } else {
        createParentList(item.childs);
      }
    },

    handlerAddNewTask() {
      const icon = this.icon ? this.icon : null;
      const parent = this.parent ? this.parent : null;
      const dataTask = {
        title: this.title,
        icon,
        parent,
      };

      this.$emit('handlerAddNewTask', dataTask);

      this.resetForm();
    },

    removeIconSelect() {
      this.icon = null;
    },

    removeParentSelect() {
      this.parent = null;
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
