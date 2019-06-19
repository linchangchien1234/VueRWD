<template>
  <main id="callusLink">
    <div id="formmsg">
      <form action="" method="" class="">
        <h3><strong>聯絡我們</strong></h3>
        <p>
          <label for="username">帳號:</label>
          <input type="text" name="username">
        </p>
        <p>
          <label for="password">密碼:</label>
          <input type="password" name="password">
        </p>
        <p>
          <label for="email">信箱:</label>
          <input type="email" name="email">
        </p>
        <p>
          <span>性別:</span>
          <label for="sex">男</label>
          <input type="radio" name="sex">
          <label for="sex">女</label>
          <input type="radio" name="sex">
        </p>
        <div id="checkbox">
          <label>喜好動物:</label>
          <p>
            <label for="dog">狗</label>
            <input type="checkbox" name="dog">
            <label for="cat">貓</label>
            <input type="checkbox" name="cat">
            <label for="mouse">鼠</label>
            <input type="checkbox" name="mouse">
            <label for="pig">豬</label>
            <input type="checkbox" name="pig">
            <label for="bird">鳥</label>
            <input type="checkbox" name="bird">
          </p>
        </div>
        <p>
          <label for="birthday">生日:</label>
          <input type="date" name="birthday">
        </p>
        <label for="country">國家:</label>
        <select name="country" id="country">
          <option value="tw">台灣</option>
          <option value="us">美國</option>
          <option value="jp">日本</option>
          <option value="kr">韓國</option>
          <option value="cn">中國</option>
        </select>
        <p>
          <input type="submit" name="submit" value="送出" id="submit" class="btn btn-danger">
          <input type="reset" name="reset" value="重填" id="reset" class="btn btn-danger">
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
main div#formmsg {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 700px;
}

main div#formmsg form {
  box-sizing: border-box;
  background: gray;
  width: 30%;
  height: 100%;
  position: relative;
}

@media screen and (max-width: 400px) {
  main div#formmsg form {
    width: 70%;
    margin-top: 80px;
  }

  main div#formmsg form h3 {
    font-size: 1.5em;
    margin-bottom: 15px;
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form p:nth-of-type(1) {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form p:nth-of-type(2) {
    position: absolute;
    top: 28%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form p:nth-of-type(3) {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form p:nth-of-type(4) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form div#checkbox>label {
    position: absolute;
    top: 55%;
    left: 33%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form div#checkbox p {
    width: 100%;
    height: 24px;
    position: absolute;
    top: 60%;
    left: 60%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form p:nth-of-type(5) {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form>label {
    position: absolute;
    top: 80%;
    left: 32%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form select {
    position: absolute;
    top: 80%;
    left: 55%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form p:nth-of-type(6) {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;

  }

  main div#formmsg form p:nth-of-type(6) input {
    margin: 0 15px;
  }
}

@media screen and (max-width: 480px) and (min-width: 401px) {
  main div#formmsg form {
    width: 70%;
    margin-top: 80px;
  }

  main div#formmsg form h3 {
    font-size: 1.5em;
    margin-bottom: 15px;
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form p:nth-of-type(1) {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form p:nth-of-type(2) {
    position: absolute;
    top: 28%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form p:nth-of-type(3) {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form p:nth-of-type(4) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form div#checkbox>label {
    position: absolute;
    top: 55%;
    left: 33%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form div#checkbox p {
    width: 100%;
    height: 24px;
    position: absolute;
    top: 60%;
    left: 70%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form p:nth-of-type(5) {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form>label {
    position: absolute;
    top: 80%;
    left: 32%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form select {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form p:nth-of-type(6) {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

@media screen and (max-width: 603px) and (min-width: 481px) {
  main div#formmsg form {
    width: 70%;
    margin-top: 80px;
  }

  main div#formmsg form h3 {
    font-size: 1.5em;
    margin-bottom: 15px;
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form p:nth-of-type(1) {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form p:nth-of-type(2) {
    position: absolute;
    top: 28%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form p:nth-of-type(3) {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form p:nth-of-type(4) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form div#checkbox>label {
    position: absolute;
    top: 55%;
    left: 33%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form div#checkbox p {
    width: 100%;
    height: 24px;
    position: absolute;
    top: 60%;
    left: 70%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form p:nth-of-type(5) {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form>label {
    position: absolute;
    top: 80%;
    left: 32%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form select {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form p:nth-of-type(6) {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

@media screen and (max-width: 768px) and (min-width: 603px) {

  main div#formmsg form {
    width: 100%;
    margin-top: 110px;
  }

  main div#formmsg form div#checkbox>label {
    position: absolute;
    top: 55%;
    left: 38%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form div#checkbox p {
    width: 100%;
    height: 24px;
    position: absolute;
    top: 60%;
    left: 85%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form>label {
    position: absolute;
    top: 80%;
    left: 40%;
    transform: translate(-50%, -50%);
  }
}


@media screen and (max-width: 1200px) and (min-width: 768px) {
  main div#formmsg form {
    width: 80%;
    height: 80%;
  }

  main div#formmsg form h3 {
    margin-bottom: 15px;
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form p:nth-of-type(1) {
    position: absolute;
    top: 23%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form p:nth-of-type(2) {
    position: absolute;
    top: 31%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form p:nth-of-type(3) {
    position: absolute;
    top: 37%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form p:nth-of-type(4) {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form div#checkbox>label {
    position: absolute;
    top: 49%;
    left: 39%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form div#checkbox p {
    height: 24px;
    position: absolute;
    top: 53%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form p:nth-of-type(5) {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form>label {
    position: absolute;
    top: 68%;
    left: 40%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form select {
    position: absolute;
    top: 68%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form p:nth-of-type(6) {
    position: absolute;
    top: 76%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

@media screen and (min-width: 1200px) {
  main div#formmsg form {
    width: 30%;
    height: 85%;
    margin-top: 0px;
  }

  main div#formmsg form h3 {
    margin-bottom: 15px;
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form p:nth-of-type(1) {
    position: absolute;
    top: 23%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form p:nth-of-type(2) {
    position: absolute;
    top: 31%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form p:nth-of-type(3) {
    position: absolute;
    top: 37%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form p:nth-of-type(4) {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form div#checkbox>label {
    position: absolute;
    top: 49%;
    left: 39%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form div#checkbox p {
    height: 24px;
    position: absolute;
    top: 53%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form p:nth-of-type(5) {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form>label {
    position: absolute;
    top: 68%;
    left: 40%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form select {
    position: absolute;
    top: 68%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  main div#formmsg form p:nth-of-type(6) {
    position: absolute;
    top: 76%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

</style>
