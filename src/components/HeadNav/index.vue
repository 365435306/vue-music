<template>
  <div>
    <ul class="top-nav">
      <li>
        <router-link exact to="/">首页</router-link>
      </li>
      <li>
        <router-link exact to="/topic">榜单</router-link>
      </li>
      <li>
        <router-link exact to="/mine">我的</router-link>
      </li>
      <li>
        <router-link exact to="/search">搜索</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HeadNav",
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.top-nav {
  display: flex;
  background: #fff;
  li {
    flex: 1;
    text-align: center;
    padding-top: 10px;
    a {
      display: block;
      padding-bottom: 8px;
    }
    .active {
      border-bottom: 2px solid #ff0000;
      color: #ff0000;
    }
  }
}
</style>
