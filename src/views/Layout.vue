<template>
  <div>
    <HeadNav></HeadNav>
    <router-view />
  </div>
</template>

<script>
import HeadNav from "../components/HeadNav";
export default {
  name: "Layout",
  components: {
    HeadNav
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped></style>
