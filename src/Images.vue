<template>
  <main>
    <div class="container" id="cuteimg">
      <div class="card-deck">
        <div class="card">
          <img class="card-img-top" src="image/cuet1.jpg" alt="Card image" style="width: 100%">
          <div class="card-body">
            <h4 class="card-title">John Doe</h4>
            <p class="card-text">Some example text.</p>
            <a href="#" class="btn btn-primary">See Profile</a>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="image/cuet2.jpg" alt="Card image" style="width: 100%">
          <div class="card-body">
            <h4 class="card-title">John Doe</h4>
            <p class="card-text">Some example text.</p>
            <a href="#" class="btn btn-primary">See Profile</a>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="image/cuet3.jpg" alt="Card image" style="width: 100%">
          <div class="card-body">
            <h4 class="card-title">John Doe</h4>
            <p class="card-text">Some example text.</p>
            <a href="#" class="btn btn-primary">See Profile</a>
          </div>
        </div>
      </div>
      <div class="card-deck">
        <div class="card">
          <img class="card-img-top" src="image/cuet4.jpg" alt="Card image" style="width: 100%">
          <div class="card-body">
            <h4 class="card-title">John Doe</h4>
            <p class="card-text">Some example text.</p>
            <a href="#" class="btn btn-primary">See Profile</a>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="image/cuet5.jpg" alt="Card image" style="width: 100%">
          <div class="card-body">
            <h4 class="card-title">John Doe</h4>
            <p class="card-text">Some example text.</p>
            <a href="#" class="btn btn-primary">See Profile</a>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="image/cuet6.jpg" alt="Card image" style="width: 100%">
          <div class="card-body">
            <h4 class="card-title">John Doe</h4>
            <p class="card-text">Some example text.</p>
            <a href="#" class="btn btn-primary">See Profile</a>
          </div>
        </div>
      </div>
    </div>
  </main>
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
<style scoped>
@media screen and (max-width: 1200px) and (min-width: 768px) {
  #cuteimg {
    margin-top: 150px;
  }
}

@media screen and (max-width: 767px) and (min-width: 320px) {
  #cuteimg {
    margin-top: 80px;
  }
}

main div div:nth-of-type(1) {
  margin-bottom: 15px;
}

main div div.card {
  width: 300px;
}

@media screen and (min-width: 576px) {
  main div div.card {
    width: 400px;
  }
}

</style>
