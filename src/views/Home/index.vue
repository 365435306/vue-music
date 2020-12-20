<template>
  <div class="home">
    <MusicList></MusicList>
    <Tabs :currentIndex="currentIndex" @changeCurrentIndex="getCurrentIndex">
      <Tab label="导航1" index="1">
        <div>1</div>
      </Tab>
      <Tab label="导航2" index="2">
        <div>2</div>
      </Tab>
      <Tab label="导航3" index="3">
        <div>3</div>
      </Tab>
    </Tabs>
  </div>
</template>
<script>
import MusicList from './MusicList'

export default {
  name: "Home",
  components: {
    MusicList
  },
  data() {
    return {
      currentIndex: 1
    }
  },
  methods:{
    getCurrentIndex(index){
      this.currentIndex = index
    }
  }
}
</script>
