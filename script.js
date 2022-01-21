const slideContainer = document.querySelector(".slider-container");
const leftSlide = document.querySelector(".left-slide");
const rightSlide = document.querySelector(".right-slide");
const downBtn = document.querySelector(".down-button");
const upBtn = document.querySelector(".up-button");
const slidesLength = rightSlide.querySelectorAll("div").length;

let activeSlideindex = 0;
leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`;

upBtn.addEventListener("click", () => changeSlide("up"));
downBtn.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = slideContainer.clientHeight;
  if (direction === "up") {
    activeSlideindex++;
    if (activeSlideindex > slidesLength - 1) {
      activeSlideindex = 0;
    }
  }
  if (direction === "down") {
    activeSlideindex--;
    if (activeSlideindex < 0) {
      activeSlideindex = slidesLength - 1;
    }
  }
  rightSlide.style.transform = `translateY(-${
    activeSlideindex * sliderHeight
  }px)`;
  leftSlide.style.transform = `translateY(${
    activeSlideindex * sliderHeight
  }px)`;
};
