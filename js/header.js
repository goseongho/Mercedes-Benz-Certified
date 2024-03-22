let tirgger = document.querySelector(".trigger"),
  site_map = document.querySelector(".site_map"),
  header_img = document.querySelector(".header_logo>img"),
  header_logo = document.querySelector(".header_logo>p");
  Header = document.querySelector(".header");
  line = document.querySelector(".line");
  logoText = document.querySelector(".logo_text")

tirgger.addEventListener("click", function () {
  this.classList.toggle("active");
  site_map.classList.toggle("active");
  line.classList.toggle("active");
  logoText.classList.toggle("active");
});

// 모바일 서브메뉴 눌렀을때 오른쪽 화살표 움직임
let submenu = document.querySelectorAll(".sub_menu");
let arrow = document.querySelectorAll("#arrow");

for (let i = 0; i < arrow.length; i++) {
  submenu[i].addEventListener("click", function () {
    arrow[i].classList.toggle("on");
  });
}

// header 반응형
const subMenus = document.querySelectorAll(".sub_menu");

console.log(subMenus, arrow);
subMenus.forEach(function (subMenu) {
  subMenu.addEventListener("click", function () {
    const mobileSubtab = subMenu.nextElementSibling;

    if (mobileSubtab.style.display === "block") {
      mobileSubtab.style.display = "none";
    } else {
      closeAllMobileSubtabs();
      mobileSubtab.style.display = "block";
    }
  });
});
function closeAllMobileSubtabs() {
  document.querySelectorAll(".mobile_subtab").forEach(function (subtab) {
    subtab.style.display = "none";
  });
}

// //윈도우 스크롤 내렸을 때 이벤트 감지
// window.addEventListener('scroll', scrollAction);

const top_bar = document.querySelector(".header");

function scrollEvent() {
  document.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 860) {
      top_bar.classList.add("active");
    } else {
      top_bar.classList.remove("active");
    }
  });
}

function init() {
  document.addEventListener("scroll", scrollEvent);
}

init();

//main_swiper
var swiper = new Swiper(".mainSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});
