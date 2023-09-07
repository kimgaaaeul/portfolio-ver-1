// Home section
// Navigation bar effects scroll
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", this.window.scrollY > 0);
}); 

//Typing the title
const $txt = document.querySelector(".txt-title"); //html의 p태그
const content = "Hello❤️"; //타이핑 될 내용 
let contentIndex = 0; // content 첫번째 글자부터 사용하기 위해 0으로 초기화

let typing = function() {
  $txt.innerHTML += content[contentIndex];
  contentIndex++;
  if(content[contentIndex] === "\n") {
    $txt.innerHTML += "<br />";
    contentIndex++;
  }
  if(contentIndex > content.length) {
    $txt.textContent = "";
    contentIndex = 0; 
  }
};

setInterval(typing, 500);



//About section
// 이미지 슬라이드
let imgIndex = 0;
let position = 0;
const IMG_WIDTH = 300;
const $btnPrev = document.querySelector(".btn-prev");
const $btnNext = document.querySelector(".btn-next");
const $slideImgs = document.querySelector(".slide-images");

let prev = function () {
  if (imgIndex > 0) {
    $btnNext.removeAttribute("disabled");
    position += IMG_WIDTH;
    $slideImgs.style.transform = `translateX(${position}px)`;
    imgIndex = imgIndex - 1;
  }
  if (imgIndex == 0) {
    $btnPrev.setAttribute("disabled", "true");
  }
};

let next = function () {
  if (imgIndex < 5) {
    $btnPrev.removeAttribute("disabled");
    position -= IMG_WIDTH;
    $slideImgs.style.transform = `translateX(${position}px)`;
    $slideImgs.style.transition = "transform .5s ease-out";
    imgIndex = imgIndex + 1;
  }
  if (imgIndex == 4) {
    $btnNext.setAttribute("disabled", "true");
  }
};

let init = function () {
  $btnPrev.setAttribute("disabled", "true");
  $btnPrev.addEventListener("click", prev);
  $btnNext.addEventListener("click", next);
};

init();

// Skills section
// let tl = anime.timeline({
//   easing  : 'linear', 
//   duration : 1000
// })
// tl.add ({
//   targets : '.line.html', 
//   height : '50%'
// })
// .add({
//   targets : '.line.css',
//   height : '40%'
// })
// .add({
//   targets : '.line.javascript',
//   height : '20%'
// })
// .add({
//   targets : '.line.jquery',
//   height : '10%'
// })
// .add({
//   targets : '.line.react',
//   height : '0%'
// })



// Portfolio Section - Modal
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

let portfolioModal = function(modalClick) {
  portfolioModals[modalClick].classList.add("active");
} 

imgCards.forEach((imgCard, i) => {
  imgCard.addEventListener("click", () => {
    portfolioModal(i);
  });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
  portfolioCloseBtn.addEventListener("click", () => {
    portfolioModals.forEach((portfolioModalView) => {
      portfolioModalView.classList.remove("active");
    });
  });
})



//Else
//scroll top button 
const scrollTopBtn = document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll", () => {
  scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; //문서의 document 요소 ((html 요소)반환)
});

// Dark & light mode

const themeBtn = document.querySelector(".themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeBtn.classList.toggle("sun");

  localStorage.setItem("saved-theme", getCurrentTheme());
  localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-mode") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme) {
  document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-mode");
  themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}