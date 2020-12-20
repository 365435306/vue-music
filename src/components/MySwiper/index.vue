<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide
      class="img-slide"
      v-for="(item, index) in imgList"
      :key="index"
    >
      <img :src="item" alt="" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
  name: "MySwiper",
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    imgList: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true,
        autoplay: {
          disableOnInteraction: false
        },
        loop: true
      }
    }
  },
  mounted () {

  },
  methods: {}

}

</script>
<style lang="scss" scoped>
.img-slide {
  height: 150px;
  img {
    height: 100%;
    width: 100%;
  }
}
</style>
