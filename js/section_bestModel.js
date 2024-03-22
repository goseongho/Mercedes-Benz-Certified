/*Initialize Swiper */
var swiper = new Swiper(".best_swiper_bottom", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".best_swiper_top", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

/* accordian */
document.addEventListener("DOMContentLoaded", function () {
  // dt 선택
  let dtElements = document.querySelectorAll("dt");
  dtElements.forEach(function (dtElement) {
    //  dt에 클릭 이벤트 추가
    dtElement.addEventListener("click", function () {
      // open클래스 토글
      this.classList.toggle("open");
      // 클릭된 dt 요소를 제외한 다른 dt' 요소들의 open 클래스 제거
      dtElements.forEach(function (otherDtElement) {
        if (otherDtElement !== dtElement) {
          otherDtElement.classList.remove("open");
        }
      });
    });
  });
});
