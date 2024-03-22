// cerAnimation
let paths = document.querySelectorAll(".carEdge .st0");
let carInsideElements = document.querySelectorAll(
  ".carInside path, .carInside line, .carInside circle, carInside rect"
);

function resetElements() {
  carInsideElements.forEach((element) => {
    // carInside 내부 요소 초기화
    element.style.opacity = 0; // 투명도 초기화
    element.style.width = 0; // 너비 초기화
    element.style.strokeDasharray = element.getTotalLength(); // strokeDasharray 초기화
    element.style.strokeDashoffset = element.getTotalLength(); // strokeDashoffset 초기화
  });

  paths.forEach((path) => {
    let length = path.getTotalLength(); // 각 경로의 총 길이
    path.style.strokeDasharray = length; // 선의 길이로 stroke-dasharray 설정
    path.style.strokeDashoffset = length; // stroke-dashoffset을 총 길이로 초기화
    path.style.animation = "none"; // 애니메이션 초기화
  });
}

function animatePaths() {
  resetElements(); // 요소 초기화 함수 호출

  paths.forEach((path, index) => {
    path.style.animation = `draw 1s forwards ${index * 0.2}s`; // draw 애니메이션 설정
  });

  let delay = paths.length * 10; // carEdge 애니메이션이 끝날 때까지 대기 시간 설정

  carInsideElements.forEach((element, index) => {
    setTimeout(() => {
      element.style.opacity = 1; // 투명도를 1로 설정하여 나타나도록 함
      element.style.width = "100%"; // 너비를 100%로 설정하여 나타나도록 함
      element.style.strokeDashoffset = 0; // strokeDashoffset을 0으로 설정하여 나타나도록 함
    }, delay);
    delay += 10; // 각 요소가 나타나는 간격 조절
  });
}

function startAnimation() {
  animatePaths(); // 애니메이션 시작 함수 호출

  // 일정 시간이 지난 후에 애니메이션을 다시 시작
  setInterval(() => {
    animatePaths();
  }, (paths.length + carInsideElements.length) * 100 + 3500); // 각 애니메이션이 끝난 후 1초 대기
}

// 애니메이션 실행
startAnimation();
