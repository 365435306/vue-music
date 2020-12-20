<template>
  <div>
    <MusicListView :musicList="newMusic" title="新歌榜"/>
    <MusicListView :musicList="hotMusic" title="热歌榜"/>
    <MusicListView :musicList="rockMusic" title="摇滚榜"/>
    <MySwiper :imgList="imgs"/>
  </div>
</template>

<script>
import MusicListView from './MusicListView'
import MySwiper from '@/components/MySwiper'

export default {
  name: "MusicList",
  components:{
    MusicListView,
    MySwiper
  },
  data() {
    return {
      hotMusic: [],
      newMusic: [],
      rockMusic: [],
      imgs: [
        require('@/assets/img/1.jpg'),
        require('@/assets/img/2.jpg'),
        require('@/assets/img/3.jpg'),
        require('@/assets/img/4.jpg'),
      ],
    }
  },
  mounted() {
    this.getMusicData()
  },
  methods: {
    getMusicData(){
      this.$api.getMusicData({
        method: 'baidu.ting.billboard.billList',
        type: 1,
        size: 6,
        offset: 0
      }).then(res => {
        this.newMusic = res.data.song_list
      })
      this.$api.getMusicData({
        method: 'baidu.ting.billboard.billList',
        type: 2,
        size: 6,
        offset: 0
      }).then(res => {
        this.hotMusic = res.data.song_list
      })
      this.$api.getMusicData({
        method: 'baidu.ting.billboard.billList',
        type: 11,
        size: 6,
        offset: 0
      }).then(res => {
        this.rockMusic = res.data.song_list
      })
    }
  }
}
</script>
<style lang="scss" scoped></style>
