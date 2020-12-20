<template>
  <div class="collection-block">
    <div class="block-padding">
      <div class="title">
        <h3>{{ title }}</h3>
        <a href="#">更多</a>
      </div>
      <div class="list clearfix">
        <a href="#" class="item" v-for="(item, index) in musicList" :key="index"
          :class="{'clear-padding' : index%3 !== 1}" 
        >
          <div class="img-warpper">
            <img :src="item.pic_big" alt="" />
          </div>
          <div class="main">{{ item.title }}</div>
          <div class="gray">{{ item.author }}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "MusicListView",
  props: {
    musicList: {
      type: Array,
      default: function () {
        return []
      }
    },
    title: {
        type: String,
        default: '歌曲榜'
      }
  },
  data () {
    return {

    }
  },
  mounted () { },
  methods: {}

}

</script>
<style lang="scss" scoped>
.collection-block {
  padding: 5px 0;
  background-color: #f8f8f8;
}
.block-padding {
  padding: 10px 17px;
  background-color: #fff;
}
.title {
  display: flex;
  margin: 14px 0 18px;
}
.title h3 {
  flex: 1 1 0%;
  display: block;
  font-weight: 700;
  font-size: 20px;
}
.list {
  width: 100%;
}
.list .item {
  float: left;
  width: 31.33%;
  padding: 0 10px;
  margin-bottom: 10px;
}
.clear-padding {
  padding: 0!important;
}
.main {
  margin-top: 4px;
  font-size: 12px;
}
.gray {
  font-size: 12px;
  color: #999;
}
.btn-more {
  font-size: 12px;
  text-align: right;
  color: #333;
}
</style>
