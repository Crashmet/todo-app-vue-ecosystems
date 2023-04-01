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

<style scoped></style>
