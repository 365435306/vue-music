<template>
  <div class="tabs">
    <Tabs :currentIndex="currentIndex" @changeCurrentIndex="getCurrentIndex">
      <Tab 
        v-for="(element,index) in allMusicData"
        :key="index"
        :label="element.billboard.name"
        :index="index+1">
        <div class="panel hotsongs on">
          <ul class="list ">
            <li
              v-for="(item,index) in element.song_list"
              :key="index"
              class="song url">
              <div class="poster">
                <img :src="item.pic_big" alt="">
              </div>
              <div class="info">
                <div class="name">{{item.title}}</div>
                <div class="author">{{item.author}}</div>
              </div>
            </li>
          </ul>
        </div>
      </Tab>
    </Tabs>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "MusicTabs",
  data () {
    return {
      currentIndex: 1,
      allMusicData: []
    }
  },
  created () {
    axios.all([this.getNewMusic(),this.getHotMusic(),this.getRockMusic()]).then(
      axios.spread((newMusic,hotMusic,rockMusic)=> {
        this.allMusicData.push(newMusic.data,hotMusic.data,rockMusic.data)
      })
    )
  },
  mounted () {},
  methods: {
    getCurrentIndex(index){
      this.currentIndex = index
    },
    getNewMusic() {
      return axios.get('/baidu_music_api/v1/restserver/ting',{
        params:{
          method: 'baidu.ting.billboard.billList',
          type: 1,
          size: 6,
          offset: 0
        }
      })
    },
    getHotMusic() {
      return axios.get('/baidu_music_api/v1/restserver/ting',{
        params:{
          method: 'baidu.ting.billboard.billList',
          type: 2,
          size: 6,
          offset: 0
        }
      })
    },
    getRockMusic() {
      return axios.get('/baidu_music_api/v1/restserver/ting',{
        params:{
          method: 'baidu.ting.billboard.billList',
          type: 11,
          size: 6,
          offset: 0
        }
      })
    }
  }

}

</script>
<style lang="scss" scoped>

.tabs{
  background: #fff;
  padding: 10px;
}
.musictop{
  background: #fff;
  padding: 10px;
}
.panel  {
  border-top: 1px solid #eee;
  display: block;
  position: relative;
  top: -1px;
  background: #fff;
}
.panel .list  {
  height: 375px;
  padding-top: 0;
}
.panel .list li  {
  height: 60px;
  border-bottom: 1px solid #eee;
  padding-left: 0;
  display: flex;
  padding-top: 10px;
}
.panel .list li .poster {
  position: relative;
  width: 45px;
  margin-right: 8px;
}
.panel .list li .poster img{
  border: 1px solid #eee;
}

.info{
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  .author{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: #999;
    margin-top: 2px;
  }
}
  
.more-songs{
  color: #999;
  margin-top: 9px;
  font-size: 12px;
  text-align: center;
  height: 32px;
  line-height: 32px;
}
</style>
