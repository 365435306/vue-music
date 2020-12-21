<template>
  <div class="th-back-top">
    <span class="bg-back2top2"></span>
  </div>
</template>

<script>

export default {
  name: "BackTop",
  data () {
    return {

    }
  },
  mounted () {},
  methods: {}

}

</script>
<style lang="scss" scoped>
.th-back-top{
  position: fixed;
  right: 15px;
  bottom: 104px;
  height: 39px;
  width: 80px;
  z-index: 0;
  opacity: 0.8;
  text-align: right;
}
.bg-back2top2{
  display: inline-block;
  width: 39px;
  height: 39px;
  background: #000;
  background-size: 39px 39px;
}
</style>
