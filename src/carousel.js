$('.owl-carousel').owlCarousel({
  responsive: true,
  responsiveRefreshRate: 200,
  //每200毫秒檢測視窗寬度並做相對應的调整，主要用于響應式
  loop: true,
  autoplayHoverPause: true, // 滑鼠經過時暫停
  margin: 50,
  autoplay: true,
  autoplayTimeout: 3000,
  /*nav: true, //導航
  navText: ["<<", ">>"], // 導航文字*/
  scrollPerPage: true, //每頁滾動而不是每個項目
  slideSpeed: 3000, //滑動速度
  rewindSpeed: 1000, //重回的速度
  animateIn: 'rolln',
  animateOut: 'rolOut',
  stagePadding: 30,
  smartSpeed: 450,
  //autoWidth: true,
  //響應式張數
  responsive: {
    0: {
      items: 1,
      nav: false,
      //autoWidth: false,
      margin: 50,
    },
    600: {
      items: 1,
      //autoWidth: false
    },
    1000: {
      items: 1,

    }
  }

})
