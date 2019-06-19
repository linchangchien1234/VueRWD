<template>
  <header class="container">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top">
      <!-- Brand -->
      <a class="navbar-brand" href="index.html">{{ IconMessage }}</a>
      <!-- Toggler/collapsibe Button -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="col-sm-1 col-md-1 col-lg-2"></div>
      <!-- Navbar links -->
      <div class="col-sm-5 col-md-7 col-lg-10">
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <div class="col-lg-8">
            <ul class="navbar-nav">
              <li v-for="navItem in navItems" class="nav-item">
                <a @click="linkChange($event)" class="nav-link" :href="navLinks">{{ navItem }}</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-4">
            <ul class="navbar-nav justify-content-center">
              <li class="navbar-text">
                Hello!
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#logninLink">登入</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      IconMessage: "歡迎光臨~My WebSite",
      navItems: ["文章分享", "Cute Baby", "關於我", "聯絡我們"],
      navLinks: ""
    }
  },
  methods: {
    linkChange: function(event) {
      if (event.target.tagName === "A") {
        switch (event.target.text) {
          case this.navItems[0]:
            this.navLinks = "#contentLink";
            console.log(this.navLinks);
            console.log(event.target.text);
            break;
          case this.navItems[1]:
            this.navLinks = "#imageLink";
            console.log(event.target.text);
            break;
          case this.navItems[2]:
            this.navLinks = "#about_me";
            console.log(event.target.text);
            break;
          case this.navItems[3]:
            this.navLinks = "#callusLink";
            console.log(event.target.text);
            break;
        }
      }
    }
  },
  computed: {

  },
  componets: {

  }
}

</script>
<style scoped>
header {
  box-sizing: border-box;
  font-size: 1.5em;
}

header nav div:nth-of-type(1) a h4 {
  margin-top: 5px;
  margin-bottom: 0;
}

.navbar {
  padding: 0 3rem;
}

.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, .8);
}

@media screen and (max-width: 1200px) and (min-width: 768px) {
  header nav {
    font-size: 0.5em;
  }
}

@media screen and (max-width: 768px) and (min-width: 576px) {
  header nav {
    background: #343a40;
  }
}

@media screen and (max-width: 576px) and (min-width: 320px) {
  header nav {
    background: #343a40;
  }

  .owl-carousel .owl-stage-outer {
    margin-top: 80px;
  }

  header nav .navbar-brand {
    font-size: 0.6em;
  }
}

</style>
