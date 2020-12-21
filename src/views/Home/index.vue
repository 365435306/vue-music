<template>
  <div class="home">
    <MusicList></MusicList>
    <MySwiper :imgList="imgs"/>
    <MusicTabs></MusicTabs>
  </div>
</template>
<script>
import MusicList from './MusicList'
import MySwiper from '@/components/MySwiper'
import MusicTabs from './MusicTabs'

export default {
  name: "Home",
  components: {
    MusicList,
    MySwiper,
    MusicTabs
  },
  data() {
    return {
      imgs: [
        require('@/assets/img/1.jpg'),
        require('@/assets/img/2.jpg'),
        require('@/assets/img/3.jpg'),
        require('@/assets/img/4.jpg'),
      ]
    }
  },
  methods:{
    
  }
}
</script>
