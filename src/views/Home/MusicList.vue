<template>
  <div>
    <MusicListView :musicList="newMusic" title="新歌榜"/>
    <MusicListView :musicList="hotMusic" title="热歌榜"/>
    <MusicListView :musicList="rockMusic" title="摇滚榜"/>
  </div>
</template>

<script>
import MusicListView from './MusicListView'


export default {
  name: "MusicList",
  components:{
    MusicListView
  },
  data() {
    return {
      hotMusic: [],
      newMusic: [],
      rockMusic: []
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
