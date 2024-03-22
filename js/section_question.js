//1. 슬라이드 스와이퍼
var swiper = new Swiper(".mySwiper_question", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 8,
  slidesPerView: 4,
  slidesPerGroup: 4, //몇장을 한번에 움직이나
  grid: {
    fill: "column",
    row: 2, //몇 행으로
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
      grid: {
        rows: 2,
      },
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
      grid: {
        rows: 1,
      },
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  },
});

//스와이퍼에 마우스오버 시 스와이퍼 멈춤
let slides = document.querySelectorAll(".swiper-slide");
for (let i of slides) {
  i.addEventListener("mouseover", function () {
    swiper.autoplay.stop();
  });
  i.addEventListener("mouseout", function () {
    swiper.autoplay.start();
  });
}

// 2.서비스 모달창 열고 닫기
let modal = document.querySelector(".modal");
let closeModalBtn = document.querySelector(".modal_close");
let openModalBtn = document.querySelector(".open_madal");
console.log(modal, closeModalBtn, openModalBtn);

// 모달열기
openModalBtn.addEventListener("click", function () {
  modal.style.display = "block";
  modal.style.opacity = "0";
  fadeIn(modal, 1000);
  console.log("모달이 열렸다.");
});
//모달닫기
closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
  console.log("모달이 닫혔다.");
});

//페이드인 함수 : 없었다가 서서히 나타나는값
function fadeIn(element, duration) {
  let opacity = 0;
  let interval = 80; //80밀리초 간격으로 투명도 조절
  let gap = interval / duration;
  function fadeInInterval() {
    opacity += gap;
    element.style.opacity = String(opacity);
    if (opacity >= 1) {
      element.style.display = "block";
      clearInterval(fading); // 페이드 인이 완료되면 clearInterval 호출
    }
  }
  let fading = setInterval(fadeInInterval, interval);
}

// 3. gotop 버튼
/*https://velog.io/@shinju4n/JS-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%9D%B4%EB%B2%A4%ED%8A%B8%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EA%B8%B0%EB%8A%A5-%EA%B0%9C%EB%B0%9C*/
goToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.addEventListener("scroll", function () {
  var height = document.documentElement.scrollTop;
  if (height > 110) {
    this.document.querySelector(".gototop_Btn").style.opacity = 1;
  } else {
    this.document.querySelector(".gototop_Btn").style.opacity = 0;
  }
});
