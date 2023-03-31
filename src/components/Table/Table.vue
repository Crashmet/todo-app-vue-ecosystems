<template>
  <div class="users-table">
    <table>
      <tr>
        <th @click="sortByUserName">
          <span class="table-title">Имя</span>
          <span :class="chevronNameClass"></span>
        </th>
        <th @click="sortByUserPhone">
          <span class="table-title">Телефон</span>
          <span :class="chevronPhoneClass"></span>
        </th>
      </tr>

      <tbody :key="parentKey">
        <User v-for="user in users" :key="user.id" :user="user" :depth="0" />
      </tbody>
    </table>
  </div>
</template>

<script>
import User from './User.vue';

export default {
  name: 'Table',
  components: {
    User,
  },
  props: {
    users: {
      type: Array,
    },
    isByUserNameDown: {
      type: Boolean,
    },
    isByUserPhoneDown: {
      type: Boolean,
    },
  },
  data() {
    return {
      chevronNameClass: 'js-table-sort-neutral',
      chevronPhoneClass: 'js-table-sort-neutral',

      parentKey: 'parent',
    };
  },

  methods: {
    sortByUserName() {
      this.$emit('sortByUserName', this.users);
    },

    sortByUserPhone() {
      this.$emit('sortByUserPhone', this.users);
    },
  },
  watch: {
    isByUserNameDown() {
      this.chevronNameClass = this.isByUserNameDown
        ? 'js-table-sort-down'
        : 'js-table-sort-up';

      this.chevronPhoneClass = 'js-table-sort-neutral';
    },

    isByUserPhoneDown() {
      this.chevronPhoneClass = this.isByUserPhoneDown
        ? 'js-table-sort-down'
        : 'js-table-sort-up';

      this.chevronNameClass = 'js-table-sort-neutral';
    },

    users() {
      this.parentKey = Math.random();
    },
  },
};
</script>

<style scoped>
.users-table {
  width: 100%;
}

table {
  margin-bottom: 20px;
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}
th,
td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}
th {
  position: relative;
  padding-left: 45px;
  background-color: #4caf50;
  color: white;
  font-weight: bold;
}

th:hover,
th:active,
th:focus {
  background: #328136;
}
.js-table-sort-neutral {
  position: absolute;
  background-image: none;
  bottom: 50%;
  right: 6%;
  width: 8px;
  height: 8px;
  border: 2px solid;
  border-color: transparent transparent #ffffff36 #ffffff36;
  transform: rotate(-45deg);
}

.js-table-sort-down {
  position: absolute;
  background-image: none;
  bottom: 50%;
  right: 6%;
  width: 8px;
  height: 8px;
  border: 2px solid;
  border-color: transparent transparent #fff #fff;
  transform: rotate(-45deg);
}

.js-table-sort-up {
  position: absolute;
  background-image: none;
  bottom: 30%;
  right: 6%;
  width: 8px;
  height: 8px;
  border: 2px solid;
  border-color: transparent transparent #fff #fff;
  transform: rotate(-225deg);
}
</style>
