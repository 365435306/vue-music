<template>
  <div class="play" v-if="songInfo.songinfo">
    <div class="header">
      <div class="title">
        <router-link to="/">
          <i class="iconfont icon-home left"></i>
        </router-link>
        <div class="music-info">
          <p>{{songInfo.songinfo.title}}</p>
          <p class="author">{{songInfo.songinfo.author}}</p>
        </div>
        <router-link to="/search">
          <i class="iconfont icon-search left"></i>
        </router-link>
      </div>
    </div>
    <div class="song-info">
      <div class="song-info-img">
        <img :src="songInfo.songinfo.pic_huge" alt="">
        <LRC :lrcLink="lrcLink" :currentTime="currentTime" :duration="duration"/>
      </div>
      <div class="iconbox">
        <i class="iconfont icon-fabulous left"></i>
        <i class="box"></i>
        <i class="iconfont icon-download left"></i>
      </div>
    </div>
    <div class="song">
      <audio ref="player" :src="songInfo.bitrate.file_link" controls></audio>
    </div>
  </div>
</template>

<script>
import LRC from './LRC'
export default {
  name: "Player",
  components:{
    LRC
  },
  data () {
    return {
      songInfo: {},
      currentTime: 0,
      duration: 0,
      lrcLink:''
    }
  },
  props: {
    songId:{
      type: [String,Number],
      required: true
    }
  },
  mounted () {
    this.$api.getMusicPlayer({
      method: 'baidu.ting.song.play',
      songid: this.songId
    }).then(res =>{
      this.songInfo = res.data
      this.lrcLink = res.data.songinfo.lrclink
      this.$nextTick(()=>{
        this.addEventHandle()
      })
    })
  },
  beforeDestroy(){
    this.removeEventHandle()
  },
  methods: {
    addEventHandle(){
      this.$refs.player.addEventListener('timeupdate',this.currentTimeHandle)
      this.$refs.player.addEventListener('canplay',this.durationHandle)
    },
    removeEventHandle(){
      this.$refs.player.removeEventHandle('timeupdate',this.currentTimeHandle)
      this.$refs.player.removeEventHandle('canplay',this.durationHandle)
    },
    currentTimeHandle(event){
      this.currentTime = this.$refs.player.currentTime
    },
    durationHandle(event){
      this.duration = this.$refs.player.duration
    },
  }

}

</script>
<style lang="scss" scoped>

.header{
  padding: 15px;
}
.music-info{
  flex: 1;
  font-size: 20px;
}
.title{
  display: flex;
  text-align: center;
}
.left{
  font-size: 30px;
}
.ca{
  color: red;
}
.right{
  font-size: 30px;
}
.song-info{
  padding: 15px;
}
.song-info-img{
  text-align: center;
}
.song-info-img img{
  width: 50%;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(50,50,50, 0.31);
}
.song-lrc{
  margin-top:10px;
  min-height: 50px;
}
.iconbox {
  display: flex;
  margin-top: 50px;
}
.iconbox .box{
  flex: 1;
}
.song{
  width: 100%;
  text-align: center;
}
.song audio{
  width: 80%;
}
.active{
  color: #222;
}
.author{
  font-size: 12px;
  color: #999;
}
</style>
