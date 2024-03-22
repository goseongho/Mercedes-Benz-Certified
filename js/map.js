let tirgger = document.querySelector(".trigger"),
  site_map = document.querySelector(".site_map"),
  header_img = document.querySelector(".header_logo>img"),
  header_logo = document.querySelector(".header_logo>p");
Header = document.querySelector(".header");
line = document.querySelector(".line");
logoText = document.querySelector(".logo_text");

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

//헤더
const top_bar = document.querySelector(".header");

function scrollEvent() {
  document.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 50) {
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

// 모달 시작
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

// var bDisplay = document.querySelector('.impo_name>h3');
function hello() {
  const img = document.querySelector(".impo_img>.img1");
  if (img.style.display === "block") {
    img.style.display = "none";
  } else {
    img.style.display = "block";
  }
}

function hello2() {
  const img = document.querySelector(".impo_img>.img2");
  if (img.style.display === "block") {
    img.style.display = "none";
  } else {
    img.style.display = "block";
  }
}
function hello3() {
  const img = document.querySelector(".impo_img>.img3");
  if (img.style.display === "block") {
    img.style.display = "none";
  } else {
    img.style.display = "block";
  }
}
function hello4() {
  const img = document.querySelector(".impo_img>.img4");
  if (img.style.display === "block") {
    img.style.display = "none";
  } else {
    img.style.display = "block";
  }
}
function hello5() {
  const img = document.querySelector(".impo_img>.img5");
  if (img.style.display === "block") {
    img.style.display = "none";
  } else {
    img.style.display = "block";
  }
}
function hello6() {
  const img = document.querySelector(".impo_img>.img6");
  if (img.style.display === "block") {
    img.style.display = "none";
  } else {
    img.style.display = "block";
  }
}
function hello7() {
  const img = document.querySelector(".impo_img>.img7");
  if (img.style.display === "block") {
    img.style.display = "none";
  } else {
    img.style.display = "block";
  }
}
function hello8() {
  const img = document.querySelector(".impo_img>.img8");
  if (img.style.display === "block") {
    img.style.display = "none";
  } else {
    img.style.display = "block";
  }
}
function hello9() {
  const img = document.querySelector(".impo_img>.img9");
  if (img.style.display === "block") {
    img.style.display = "none";
  } else {
    img.style.display = "block";
  }
}
function hello10() {
  const img = document.querySelector(".impo_img>.img10");
  if (img.style.display === "block") {
    img.style.display = "none";
  } else {
    img.style.display = "block";
  }
}
function hello11() {
  const img = document.querySelector(".impo_img>.img11");
  if (img.style.display === "block") {
    img.style.display = "none";
  } else {
    img.style.display = "block";
  }
}
function hello12() {
  const img = document.querySelector(".impo_img>.img12");
  if (img.style.display === "block") {
    img.style.display = "none";
  } else {
    img.style.display = "block";
  }
}
function hello13() {
  const img = document.querySelector(".impo_img>.img13");
  if (img.style.display === "block") {
    img.style.display = "none";
  } else {
    img.style.display = "block";
  }
}
function hello14() {
  const img = document.querySelector(".impo_img>.img14");
  if (img.style.display === "block") {
    img.style.display = "none";
  } else {
    img.style.display = "block";
  }
}
function hello15() {
  const img = document.querySelector(".impo_img>.img15");
  if (img.style.display === "block") {
    img.style.display = "none";
  } else {
    img.style.display = "block";
  }
}
function hello16() {
  const img = document.querySelector(".impo_img>.img16");
  if (img.style.display === "block") {
    img.style.display = "none";
  } else {
    img.style.display = "block";
  }
}
function hello17() {
  const img = document.querySelector(".impo_img>.img17");
  if (img.style.display === "block") {
    img.style.display = "none";
  } else {
    img.style.display = "block";
  }
}
function hello18() {
  const img = document.querySelector(".impo_img>.img18");
  if (img.style.display === "block") {
    img.style.display = "none";
  } else {
    img.style.display = "block";
  }
}
function hello19() {
  const img = document.querySelector(".impo_img>.img19");
  if (img.style.display === "block") {
    img.style.display = "none";
  } else {
    img.style.display = "block";
  }
}
function hello20() {
  const img = document.querySelector(".impo_img>.img20");
  if (img.style.display === "block") {
    img.style.display = "none";
  } else {
    img.style.display = "block";
  }
}
function hello21() {
  const img = document.querySelector(".impo_img>.img21");
  if (img.style.display === "block") {
    img.style.display = "none";
  } else {
    img.style.display = "block";
  }
}
function hello22() {
  const img = document.querySelector(".impo_img>.img22");
  if (img.style.display === "block") {
    img.style.display = "none";
  } else {
    img.style.display = "block";
  }
}
function hello23() {
  const img = document.querySelector(".impo_img>.img23");
  if (img.style.display === "block") {
    img.style.display = "none";
  } else {
    img.style.display = "block";
  }
}
function hello24() {
  const img = document.querySelector(".impo_img>.img24");
  if (img.style.display === "block") {
    img.style.display = "none";
  } else {
    img.style.display = "block";
  }
}

function Show_hidden(e) {
  var menu = new Array(
    "test_1",
    "test_2",
    "test_3",
    "test_4",
    "test_5",
    "test_6",
    "test_7",
    "test_8",
    "test_9",
    "test_10"
  );
  // 객체 배열로 지정
  for (var i = 0; i < menu.length; i++) {
    if ("test_" + e == menu[i]) {
      document.all[menu[i]].style.display = "block";
    } else {
      document.all[menu[i]].style.display = "none";
    }
  }
}

var HOME_PATH = window.HOME_PATH || ".";

map = new naver.maps.Map("map", {
  center: new naver.maps.LatLng(36.3684, 127.3881),
  zoom: 8,
});

//대전
var daejeon1 = new naver.maps.LatLng(36.35928, 127.344);
var daejeon2 = new naver.maps.LatLng(36.36179, 127.4265);
// 서울
var seoul = new naver.maps.LatLng(37.53335, 126.9606);
// 부산
var busan1 = new naver.maps.LatLng(35.17491, 129.131);
var busan2 = new naver.maps.LatLng(35.25888, 129.0939);
// 대구
var daegu = new naver.maps.LatLng(35.84456, 128.6297);
// 인천
var inchen1 = new naver.maps.LatLng(37.45054, 126.7087);
var inchen2 = new naver.maps.LatLng(37.3823, 126.6424);
// 광주
var gwangju1 = new naver.maps.LatLng(35.15319, 126.8749);
var gwangju2 = new naver.maps.LatLng(35.21137, 126.8293);
//울산
var ulsan = new naver.maps.LatLng(35.53667, 129.3161);
//경기
var gyeonggi1 = new naver.maps.LatLng(37.38153, 127.1354);
var gyeonggi2 = new naver.maps.LatLng(37.25774, 126.9857);
var gyeonggi3 = new naver.maps.LatLng(37.44809, 127.1299);
//강원
var Gangwon1 = new naver.maps.LatLng(37.86278, 127.7176);
var Gangwon2 = new naver.maps.LatLng(37.77746, 128.8856);

var markers = [];
var infowindows = [];

// 대전1
markers.push(
  new naver.maps.Marker({
    map: map,
    position: daejeon1,
    icon: {
      url: "../img/map/location-pin.png",
      size: new naver.maps.Size(29, 40),
    },
  })
);
infowindows.push(
  new naver.maps.InfoWindow({
    content: [
      '<div class="iw_bubble">',
      '   <h3 style="">대전 유성 전시장</h3>',
      "</div>",
    ].join(""),
  })
);

// 대전2
markers.push(
  new naver.maps.Marker({
    map: map,
    position: daejeon2,
    icon: {
      url: "../img/map/location-pin.png",
      size: new naver.maps.Size(29, 40),
    },
  })
);
infowindows.push(
  new naver.maps.InfoWindow({
    content: [
      '<div class="iw_bubble">',
      "   <h3>대전 전시장</h3>",
      "</div>",
    ].join(""),
  })
);

// 서울
markers.push(
  new naver.maps.Marker({
    map: map,
    position: seoul,
    icon: {
      url: "../img/map/location-pin.png",
      size: new naver.maps.Size(29, 40),
    },
  })
);
infowindows.push(
  new naver.maps.InfoWindow({
    content: [
      '<div class="iw_bubble">',
      "   <h3>서울 전시장</h3>",
      "</div>",
    ].join(""),
  })
);

// 부산1
markers.push(
  new naver.maps.Marker({
    map: map,
    position: busan1,
    icon: {
      url: "../img/map/location-pin.png",
      size: new naver.maps.Size(29, 40),
    },
  })
);
infowindows.push(
  new naver.maps.InfoWindow({
    content: [
      '<div class="iw_bubble">',
      "   <h3>해운대 전시장</h3>",
      "</div>",
    ].join(""),
  })
);
// 부산2
markers.push(
  new naver.maps.Marker({
    map: map,
    position: busan2,
    icon: {
      url: "../img/map/location-pin.png",
      size: new naver.maps.Size(29, 40),
    },
  })
);
infowindows.push(
  new naver.maps.InfoWindow({
    content: [
      '<div class="iw_bubble">',
      "   <h3>금정 전시장</h3>",
      "</div>",
    ].join(""),
  })
);
// 대구
markers.push(
  new naver.maps.Marker({
    map: map,
    position: daegu,
    icon: {
      url: "../img/map/location-pin.png",
      size: new naver.maps.Size(29, 40),
    },
  })
);
infowindows.push(
  new naver.maps.InfoWindow({
    content: [
      '<div class="iw_bubble">',
      "   <h3>대구 전시장</h3>",
      "</div>",
    ].join(""),
  })
);
// 인천1
markers.push(
  new naver.maps.Marker({
    map: map,
    position: inchen1,
    icon: {
      url: "../img/map/location-pin.png",
      size: new naver.maps.Size(29, 40),
    },
  })
);
infowindows.push(
  new naver.maps.InfoWindow({
    content: [
      '<div class="iw_bubble">',
      "   <h3>인천 전시장</h3>",
      "</div>",
    ].join(""),
  })
);
// 인천2
markers.push(
  new naver.maps.Marker({
    map: map,
    position: inchen2,
    icon: {
      url: "../img/map/location-pin.png",
      size: new naver.maps.Size(29, 40),
    },
  })
);
infowindows.push(
  new naver.maps.InfoWindow({
    content: [
      '<div class="iw_bubble">',
      "   <h3>인천 송도 전시장</h3>",
      "</div>",
    ].join(""),
  })
);
// 광주1
markers.push(
  new naver.maps.Marker({
    map: map,
    position: gwangju1,
    icon: {
      url: "../img/map/location-pin.png",
      size: new naver.maps.Size(29, 40),
    },
  })
);
infowindows.push(
  new naver.maps.InfoWindow({
    content: [
      '<div class="iw_bubble">',
      "   <h3>광주 전시장</h3>",
      "</div>",
    ].join(""),
  })
);
// 광주2
markers.push(
  new naver.maps.Marker({
    map: map,
    position: gwangju2,
    icon: {
      url: "../img/map/location-pin.png",
      size: new naver.maps.Size(29, 40),
    },
  })
);
infowindows.push(
  new naver.maps.InfoWindow({
    content: [
      '<div class="iw_bubble">',
      "   <h3>광주 수완 전시장</h3>",
      "</div>",
    ].join(""),
  })
);
// 울산
markers.push(
  new naver.maps.Marker({
    map: map,
    position: ulsan,
    icon: {
      url: "../img/map/location-pin.png",
      size: new naver.maps.Size(29, 40),
    },
  })
);
infowindows.push(
  new naver.maps.InfoWindow({
    content: [
      '<div class="iw_bubble">',
      "   <h3>울산 전시장</h3>",
      "</div>",
    ].join(""),
  })
);
// 경기1
markers.push(
  new naver.maps.Marker({
    map: map,
    position: gyeonggi1,
    icon: {
      url: "../img/map/location-pin.png",
      size: new naver.maps.Size(29, 40),
    },
  })
);
infowindows.push(
  new naver.maps.InfoWindow({
    content: [
      '<div class="iw_bubble">',
      "   <h3>분당 서현 전시장</h3>",
      "</div>",
    ].join(""),
  })
);
// 경기2
markers.push(
  new naver.maps.Marker({
    map: map,
    position: gyeonggi2,
    icon: {
      url: "../img/map/location-pin.png",
      size: new naver.maps.Size(29, 40),
    },
  })
);
infowindows.push(
  new naver.maps.InfoWindow({
    content: [
      '<div class="iw_bubble">',
      "   <h3>수원 전시장</h3>",
      "</div>",
    ].join(""),
  })
);
// 경기3
markers.push(
  new naver.maps.Marker({
    map: map,
    position: gyeonggi3,
    icon: {
      url: "../img/map/location-pin.png",
      size: new naver.maps.Size(29, 40),
    },
  })
);
infowindows.push(
  new naver.maps.InfoWindow({
    content: [
      '<div class="iw_bubble">',
      "   <h3>성남 전시장</h3>",
      "</div>",
    ].join(""),
  })
);
// 강원1
markers.push(
  new naver.maps.Marker({
    map: map,
    position: Gangwon1,
    icon: {
      url: "../img/map/location-pin.png",
      size: new naver.maps.Size(29, 40),
    },
  })
);
infowindows.push(
  new naver.maps.InfoWindow({
    content: [
      '<div class="iw_bubble">',
      "   <h3>춘천 전시장</h3>",
      "</div>",
    ].join(""),
  })
);
// 강원2
markers.push(
  new naver.maps.Marker({
    map: map,
    position: Gangwon2,
    icon: {
      url: "../img/map/location-pin.png",
      size: new naver.maps.Size(29, 40),
    },
  })
);
infowindows.push(
  new naver.maps.InfoWindow({
    content: [
      '<div class="iw_bubble">',
      "   <h3>강릉 전시장</h3>",
      "</div>",
    ].join(""),
  })
);

for (let i = 0; i < markers.length; i++) {
  naver.maps.Event.addListener(markers[i], "click", function (e) {
    if (infowindows[i].getMap()) {
      infowindows[i].close();
    } else {
      infowindows[i].open(map, markers[i]);
    }
  });
}

infowindows[0].open(map, markers[0]);
