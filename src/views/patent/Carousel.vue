<template>
  <swiper :options="swiperOptions">
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <img :src="slide.image" alt="Slide" />
    </swiper-slide>

    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </swiper>
</template>
  
  <script>
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      slides: [
        { image: "src/static/img/ipr1.jpg" },
        { image: "src/static/img/ipr2.jpg" },
        { image: "src/static/img/ipr3.jpg" },
        // 添加更多轮播项
      ],
    };
  },
};
</script>
  
  <style scoped>
/* 添加任何必要的自定义样式 */
</style>
  