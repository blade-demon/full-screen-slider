const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // get current class
  const current = document.querySelector(".current");
  // remove current class
  current.classList.remove("current");
  // check for next slide
  if (current.nextElementSibling) {
    // Add current to next slibing
    current.nextElementSibling.classList.add("current");
  } else {
    // Add current to first slibing
    slides[0].classList.add("current");
  }

  setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
  // get current class
  const current = document.querySelector(".current");
  // remove current class
  current.classList.remove("current");
  // check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev slibing
    current.previousElementSibling.classList.add("current");
  } else {
    // Add current to last slibing
    slides[slides.length - 1].classList.add("current");
  }

  setTimeout(() => current.classList.remove("current"));
};

next.addEventListener("click", e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener("click", e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

if (auto) {
  // run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
} else {
  slideInterval = undefined;
}
