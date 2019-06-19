<template>
  <div>
    <appHeader></appHeader>
    <appCarousel></appCarousel>
    <hr id="contentLink">
    <appContent></appContent>
    <hr id="imageLink"><br>
    <appImages></appImages>
    <hr id="about_me"><br>
    <appAboutMe></appAboutMe>
    <hr id="callusLink"><br>
    <appCallUs></appCallUs>
    <hr id="logninLink"><br>
    <appLognIn></appLognIn>
    <hr><br>
    <appFooter></appFooter>
  </div>
</template>
<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Carousel from './Carousel.vue'
import Content from './Content.vue'
import Images from './Images.vue'
import AboutMe from './AboutMe.vue'
import CallUs from './CallUs.vue'
import LognIn from './LognIn.vue'
export default {
  data() {
    return {
      message: "Hello World!"
    }
  },
  methods: {

  },
  computed: {

  },
  components: {
    'appHeader': Header,
    'appFooter': Footer,
    'appCarousel': Carousel,
    'appContent': Content,
    'appImages': Images,
    'appAboutMe': AboutMe,
    'appCallUs': CallUs,
    'appLognIn': LognIn
  }
}

</script>
<style>
header nav {
  background: #343a40;
}

</style>
