<template>
  <button @click="handelShowHintBtn" class="btn">
    "?"
  </button>
</template>

<script>
export default {
  name: "ShowHintBtn",
  methods: {
    handelShowHintBtn() {
      this.$emit("handelShowHintBtn");
    }
  }
};
</script>

<style scoped>
.btn {
  padding: 16px 20px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  background-color: #684caf;
  border: 1px solid #ccc;
  /* border-radius: 16px; */
}

.btn:hover,
.btn:active {
  background: #c93e3e;
}
</style>
