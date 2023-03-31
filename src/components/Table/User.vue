<template>
  <div>
    <tr>
      <td :style="indent">
        <div class="table-name">
          <span v-if="isUserSubordinates" class="table-name__child"></span>
          {{ userName }}
        </div>
      </td>
      <td>
        <span class="table-phone">{{ user.phone }}</span>
      </td>
    </tr>
    <User
      v-for="user in user.subordinates"
      :key="user.id"
      :user="user"
      :depth="depth + 1"
    />
  </div>
</template>

<script>
export default {
  name: 'User',
  components: {},
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
    depth: {
      type: Number,
    },
  },
  computed: {
    isUserSubordinates() {
      return this.user.subordinates.length > 0 || this.depth > 0;
    },
    userName() {
      return this.user.marker + ' ' + this.user.name;
    },
    indent() {
      return { 'padding-left': `${this.depth * 40 + 16}px` };
    },
  },
};
</script>

<style scoped>
th,
td {
  width: 60%;
  border: 1px solid #ccc;
  padding: 8px 15px;
  text-align: left;
}

.table-name {
  position: relative;

  padding: 10px;
  padding-left: 30px;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

.table-phone {
  padding-left: 30px;
}

.table-name__child {
  position: absolute;
  background-image: none;
  bottom: 38%;
  left: 0%;
  width: 6.5px;
  height: 6.5px;
  border: 2px solid;
  border-color: transparent transparent #328136 #328136;
  transform: rotate(-135deg);
}
</style>
