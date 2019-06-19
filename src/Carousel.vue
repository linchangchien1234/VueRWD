<template>
  <div class="wrapper">
    <div class="owl-carousel owl-theme">
      <div class="item"><img src="image/01.jpg"></div>
      <div class="item"><img src="image/02.jpg"></div>
      <div class="item"><img src="image/03.jpg"></div>
      <div class="item"><img src="image/04.jpg"></div>
      <div class="item"><img src="image/05.jpg"></div>
      <div class="item"><img src="image/06.jpg"></div>
      <div class="item"><img src="image/07.jpg"></div>
      <div class="item"><img src="image/08.jpg"></div>
      <div class="item"><img src="image/09.jpg"></div>
      <div class="item"><img src="image/10.jpg"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {

  },
  components: {

  }
}

</script>
<style>
main .wrapper {
  width: 100%;
  height: auto;
  overflow: hidden;
}


main .wrapper .owl-theme .owl-dots .owl-dot span {
  background: #262626;
}

main .wrapper .owl-theme .owl-dots .owl-dot.active span,
.owl-theme .owl-dots .owl-dot:hover span {
  background: gray;
}

@media screen and (min-width: 1200px) {
  .owl-carousel .owl-stage-outer {
    height: 850px;
  }
}

@media screen and (max-width: 768px) and (min-width: 576px) {
  .owl-carousel .owl-stage-outer {
    margin-top: 80px;
  }
}

@media screen and (max-width: 576px) and (min-width: 320px) {
  .owl-carousel .owl-stage-outer {
    margin-top: 80px;
  }
}

</style>
