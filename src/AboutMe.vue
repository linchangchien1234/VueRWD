<template>
  <main class="container" id="about_me">
    <div v-for="(about,index) in aboutMe" class="col-lg-3 about_card" :id="'about_card'+(index+1)">
      <input type="checkbox">
      <div class="toggle">+</div>
      <div class="card_img">
        <img :src="'image/me'+(index+1)+'.jpg'" alt="my_pic" style="width: 100%">
      </div>
      <div class="card_text">
        <h3>{{ about.title}}</h3>
        <p>{{ about.content}}</p>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      aboutMe: [
        { title: "介紹自己", content: "我叫林璋謙，住在台中市大甲區，大學就讀南台科技大學-資訊工程學系，高中就讀致用高級中學-電子資訊，參加過職訓中心（ＲＷＤ跨載具）介面設計與前端框架實務班）的職前訓練結訓，結合所學的技能做出了一個專題實作。" },
        { title: "工作經歷", content: "在前一份工作是在傳統製造產業當技術員，負責的工作是天車（固定式起重機）的操作、產品的化學表面處理、廢水處理，讓我在工作上學習到細心與謹慎，在工作上一個不小心都會出現公安問題，導致身體的傷害，若在於工作上出現了一個問題，學會與相關人員討論如何解決問題，加強自我學習專業技能與工作實務上的應用。" },
        { title: "未來發展", content: "在之前的工作有思考自己的職涯發展，在前份工作時，就有自己在網路上自學網頁的前後端技術，離職後基於想要把網頁這方面的興趣結合至工作上，所以來參加職前訓練全心學習，藉由職前訓練讓我把自學不懂的地方做結合，在網頁專題上挖掘技術，來達到甜美的果實，也讓我確定了自己對於網頁開發的發展方向。" },
        { title: "自我期許", content: "期許自己能夠做到製作一個專案，先在不足的地方精進自己的能力與技術，在工作上貢獻自己的能力，然後工作中成長，在實務上求表現。" },
      ],
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
@media screen and (min-width: 1201px) {
  #about_me {
    display: flex;
    justify-content: center;
    align-content: space-between;
    margin-top: 150px;
    height: 600px;
  }
}

@media screen and (max-width: 1200px) and (min-width: 768px) {
  #about_me {
    position: relative;
    margin-top: 100px;
  }

  #about_card3 {
    margin-top: 50px;
  }

  #about_card2,
  #about_card4 {
    position: absolute;
  }

  #about_card2 {
    left: 50%;
    top: 0%;
  }

  #about_card3 {
    top: 55%;
  }

  #about_card4 {
    left: 50%;
    top: 52%;
  }
}

@media screen and (max-width: 576px) {}

@media screen and (max-width: 768px) and (min-width: 320px) {
  #about_me {
    margin-top: 80px;
    position: relative;
  }

  .about_card {
    margin-bottom: 20px;
  }
}

.about_card {
  position: relative;
  width: 300px;
  height: 500px;
  overflow: hidden;
  margin-right: 10px;
}

.about_card input,
.toggle {
  position: absolute;
  width: 50px;
  height: 50px;
  bottom: 20px;
  right: 30px;
  outline: none;
  z-index: 11;
}

.about_card input {
  opacity: 0;
}

.toggle {
  pointer-events: none;
  border-radius: 50%;
  background: #fff;
  transition: 0.5s;
  text-align: center;
  line-height: 40px;
  font-size: 36px;

}

.about_card input:checked~.toggle {
  transform: rotate(225deg);
}

#about_card1 .toggle {
  box-shadow: 0 0 0 0px #9c27b0;
}

#about_card2 .toggle {
  box-shadow: 0 0 0 0px #6A5ACD;
}

#about_card3 .toggle {
  box-shadow: 0 0 0 0px #5F9EA0;
}

#about_card4 .toggle {
  box-shadow: 0 0 0 0px #006400;
}

#about_card1 input:checked~.toggle {
  box-shadow: 0 0 0 500px #9c27b0;
}

#about_card2 input:checked~.toggle {
  box-shadow: 0 0 0 500px #6A5ACD;
}

#about_card3 input:checked~.toggle {
  box-shadow: 0 0 0 500px #5F9EA0;
}

#about_card4 input:checked~.toggle {
  box-shadow: 0 0 0 500px #006400;
}

.card_img,
.card_text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.card_text {
  padding: 20px;
  box-sizing: border-box;
  z-index: 11;
  pointer-events: none;
  transition: 0.5s;
  opacity: 0;
}

.about_card input:checked~.card_text {
  opacity: 1;
  transition-delay: 0.5s;
}

.card_text h3 {
  margin-bottom: 5px;
  color: #fff;
}

.card_text p {
  margin: 0;
  padding: 0;
  color: #fff;
}

</style>
