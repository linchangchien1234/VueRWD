<template>
  <footer>
    <p>文章來源: <a v-bind:href="urlContent" :target="Target">佳文共賞</a></p>
    <p>圖片來源: <a v-bind:href="urlImg" :target="Target">精品桌布站</a></p>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      urlContent: "https://www.wagor.tc.edu.tw/doc/articles/articles.htm",
      urlImg: "https://hk.best-wallpaper.net/",
      Target: "_blank"
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
<style scoped>
footer {
  margin-top: 5px;
  color: #BBB;
}

footer p {
  font-size: 10px;
  margin-left: 10px;
  margin-bottom: 2px;
}

footer a {
  font-size: 8px;
}

@media screen and (max-width: 767px) {
  /*#mobileNav ul li {
    width: 100%;
  }*/

  footer {
    margin-top: 50px;
  }
}

</style>
