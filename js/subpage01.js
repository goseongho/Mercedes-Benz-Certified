// let count = 5;

// window.addEventListener("scroll", (e) => {
//   const isScrollEnd = window.innerHeight + window.scrollY + 200 > document.body.offsetHeight;

//   if (isScrollEnd && count < 15) {
//     for (let i = 0; i < 5; i++) {
//       const $newBox = document.createElement(".sub01_list_item");
//       $newBox.className = ".sub01_list_item";
//       $newBox.textContent = ++count;
//       document.querySelector("#container").appendChild($newBox);
//     }
//   }
// });
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


// header
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
