<template>
  <main>
    <div class="container formbox">
      <form action="" method="">
        <h3><strong>會員登入</strong></h3>
        <p>
          <label for="username"></label>
          <input type="text" name="username" placeholder="username">
        </p>
        <p>
          <label for="password"></label>
          <input type="password" name="password" placeholder="password">
        </p>
        <p>
          <input type="submit" name="" id="" value="送出" class="btn btn-info">
          <input type="button" name="" id="" value="註冊" class="btn btn-info">
        </p>
      </form>
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
  componets: {

  }
}

</script>
<style scoped>
main div.formbox {
  display: flex;
  justify-content: center;
  align-items: center;
}

main div.formbox form {
  background: gray;
  position: relative;
}

main div.formbox form h3 {
  margin-bottom: 15px;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
}

main div.formbox form p:nth-of-type(1) {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
}

main div.formbox form p:nth-of-type(2) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

main div.formbox form p:nth-of-type(3) {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%,
    -50%);
}

main div.formbox form p:nth-of-type(1) input,
main div.formbox form p:nth-of-type(2) input {
  border-radius: 15px;
  padding: 8px;
}


@media screen and (max-width: 768px) {
  main div.formbox {
    height: 500px;
  }

  main div.formbox form {
    width: 80%;
    height: 80%;
  }

  main div.formbox form p:nth-of-type(3) {
    display: flex;
  }

  main div.formbox form p:nth-of-type(3) input {
    margin: 0 5px;
  }

}

@media screen and (min-width: 767px) {
  main div.formbox {
    height: 700px;
  }

  main div.formbox form {
    width: 80%;
    height: 80%;
  }


}

@media screen and (min-width: 1200px) {
  main div.formbox {
    height: 700px;
  }

  main div.formbox form {
    width: 30%;
    height: 50%;
  }
}

</style>
