<template>
  <div class="lrcContainer">
    <div class="lrc" ref="lrc">
      <p class="lrc-p"
        :class="{'active':currentTime > allKeys[index] && currentTime < allKeys[index+1]}"
        v-for="(item,name,index) in lrcs" :key="index">
        {{item}}{{scrollLRC(index)}}
      </p>
      <!-- <p class="lrc-p"
        v-if="currentTime > allKeys[index] && currentTime < allKeys[index+1]"
        v-for="(item,name,index) in lrcs" :key="index">
        {{item}}
      </p> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "LRC",
  props: {
    lrcLink:{
      type: [String,Number],
      required: true
    },
    duration:{
      type: [String,Number],
      required: true
    },
    currentTime:{
      type: [String,Number],
      required: true
    },
  },
  data () {
    return {
      lrcs: [],
      allKeys: []
    }
  },
  mounted () {
    axios.get(this.lrcLink).then(res => {
      let lyrics = res.data.split('\n')
      if(res.data.includes('[')){
        this.filterLrc2(lyrics)
      }else{
        this.$nextTick(()=>{
          this.filterLrc(lyrics)
        })
      }
    })
  },
  methods: {
    scrollLRC(index){
      if(this.currentTime > this.allKeys[index] && this.currentTime < this.allKeys[index+1]){
        this.$refs.lrc.style.top = (-30 * (index-2)) + 'px'
      }
    },
    filterLrc(lyrics){
      if(this.duration){
        let t = this.duration / lyrics.length
        let lrc = {}
        for (let i = 0; i < lyrics.length; i++) {
          let time = parseInt(i * t)
          this.allKeys.push(time)
          lrc[time] = lyrics[i];
        }
        this.lrcs = lrc
      }else{
        this.lrcs = lyrics
      }

    },
    filterLrc2(lyrics){
      let lrc = {}
      let reg = /\[\d*:\d*(\.|:)\d*]/g;
      for (let i = 0; i < lyrics.length; i++) {
        let timeRegArr = lyrics[i].match(reg)
        if(!timeRegArr) continue
        let t = timeRegArr[0]
        let min = parseInt(t.match(/\[\d*/i).toString().slice(1))
        let sec = parseInt(t.match(/\:\d*/i).toString().slice(1))
        let time = min*60 + sec
        this.allKeys.push(time)
        let content = lyrics[i].replace(timeRegArr,'')
        lrc[time] = content
      }
      this.lrcs = lrc
    }
  }

}

</script>
<style lang="scss" scoped>
.active{
  color: red;
}
.lrcContainer{
  width: 100%;
  height: 150px;
  overflow: scroll;
  position: relative;
}
.lrc{
  width: 100%;
  position: absolute;
  top: 0;
}
.lrc-p{
  height: 30px;
  line-height: 30px;
}
.up30{
  margin-top: -30px;
}
</style>
