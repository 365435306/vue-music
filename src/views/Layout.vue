<template>
  <div>
    <HeadNav></HeadNav>
    <keep-alive include="Home">
      <router-view />
    </keep-alive>
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
