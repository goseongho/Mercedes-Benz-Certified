//두번째 화면: 체크 
document.addEventListener("DOMContentLoaded", function () {
  // SVG와 path 요소 가져오기
  var path = document.getElementById('check');
  // 애니메이션 지속 시간 (밀리초)
  var duration = 800;
  // path의 총 길이 가져오기
  var pathLength = path.getTotalLength();
  // stroke-dasharray와 stroke-dashoffset 설정
  path.style.strokeDasharray = pathLength;
  path.style.strokeDashoffset = pathLength;
  // 애니메이션 설정
  function animate() {
    path.style.transition = 'stroke-dashoffset ' + duration + 'ms ease-in-out';
    path.style.strokeDashoffset = 0;
  }
  // 로드 이벤트 발생 시 애니메이션 시작 
  window.addEventListener('load', function () {
    animate();
  });
});



window.addEventListener('DOMContentLoaded', function()
{sell_hover.style.display='block';
});