//trendsection 스크롤
const trendSection = document.querySelectorAll(".section");
const observeOption = {
  root: null,
  rootMargin: "-20px",
  thresgold: 0.5,
};

const trendObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
}, observeOption);

trendSection.forEach((section) => {
  trendObserver.observe(section);
});
/* trend01 */
const trend01 = document.querySelectorAll(".trend01");
const trend01Option = {
  root: null,
  thresgold: 1,
};
const observer01 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
}, trend01Option);

trend01.forEach((section) => {
  observer01.observe(section);
});
/* trend02 */
// 원형 그래프
const graph01 = document.querySelector(".round01");
const graph02 = document.querySelector(".round02");
const graph03 = document.querySelector(".round03");

const options = {
  root: null,
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      graphPlay(60, graph01, "#57493e");
      graphPlay(75, graph02, "#06233a");
      graphPlay(80, graph03, "#a1a5a1");
      observer.unobserve(entry.target);
    }
  });
}, options);

observer.observe(graph01);

const graphPlay = (percent, element, color) => {
  let i = 1;

  const graphFn = () => {
    if (i <= percent) {
      colorFn(i, element, color);
      i++;
      requestAnimationFrame(graphFn);
    }
  };

  requestAnimationFrame(graphFn);
};

const colorFn = (i, element, color) => {
  element.style.background = `conic-gradient(${color} 0% ${i}%, #dedede ${i}% 100%)`;
};

//호버유도애니메이션
const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("bubble_ani");
        observer2.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

const elementsToObserve = document.querySelectorAll(".graph_info_bubble");
elementsToObserve.forEach((element) => {
  observer2.observe(element);
});

/* trend03 */
//대시보드
const observer3 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("pointer");
        observer3.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.8 }
);

const dashboard = document.querySelectorAll(".dashboard_pointer");
dashboard.forEach((element) => {
  observer3.observe(element);
});
