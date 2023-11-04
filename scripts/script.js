const iconWrap = document.getElementById("iconWrap");
const iconOpen = document.getElementById("iconOpen");
const iconClose = document.getElementById("iconClose");
const mainMenu = document.getElementById("mainMenu");
const logo = document.querySelector(".logo");
const fronts = document.querySelectorAll(".front");
const backs = document.querySelectorAll(".back");
const cards = document.querySelectorAll(".card");
const carousel = document.querySelector(".carousel");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const slider = document.querySelector(".slider");
const sliderItems = document.querySelectorAll(".slider-item");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const slideNumber = document.querySelector(".slide-number");
const sliderContent = document.querySelectorAll(".slider-content");

// Заміна ікойнки меню
window.addEventListener("resize", () => {
  if (window.innerWidth > 800) {
    mainMenu.classList.remove("hide-menu");
  }
  mainMenu.classList.add("hide-menu");
});

iconWrap.addEventListener("click", () => {
  mainMenu.classList.toggle("open");
  iconOpen.classList.toggle("hide");
  iconClose.classList.toggle("hide");
  logo.classList.toggle("hidden-logo");
});

for (let i = 0; i < fronts.length; i++) {
  fronts[i].addEventListener("click", () => {
    cards[i].classList.add("card-rotate");
    fronts[i].classList.add("front-rotate");
    backs[i].classList.add("back-rotate");
  });

  backs[i].addEventListener("click", () => {
    cards[i].classList.remove("card-rotate");
    fronts[i].classList.remove("front-rotate");
    backs[i].classList.remove("back-rotate");
  });
}
// Зміна номеру карточки
let currentCardIndex = 0;

function showCard(index) {
  cards.forEach((card, i) => {
    if (i === index) {
      card.classList.add("show");
    } else {
      card.classList.remove("show");
    }
  });
}

// Слайдер
let currentIndex = 0;

function updateSliderSize() {
  const windowWidth = window.innerWidth;
  const sliderWidth = windowWidth <= 800 ? 250 : 600;

  slider.style.width = `${sliderWidth}px`;

  currentIndex =
    currentIndex >= sliderItems.length ? sliderItems.length - 1 : currentIndex;
  showSlide(currentIndex);
}

window.addEventListener("load", updateSliderSize);
window.addEventListener("resize", updateSliderSize);

prevBtn.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : 0;
  showSlide(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = currentIndex < sliderItems.length - 1 ? currentIndex + 1 : 0;
  showSlide(currentIndex);
});
// Слайд між карточками
function showSlide(index) {
  const sliderWidth = parseInt(getComputedStyle(slider).width, 10);
  slider.style.transform = `translateX(-${index * sliderWidth}px)`;
  slideNumber.textContent = index + 1;
}

document.addEventListener("DOMContentLoaded", function () {
  var buttonPageUp = document.querySelector(".button-page-up");
  const mediaQuery = window.matchMedia("(min-width: 800px)");
  function handleMediaChange(event) {
    if (event.matches) {
      window.addEventListener("scroll", function () {
        if (document.documentElement.scrollTop > 300) {
          buttonPageUp.style.display = "block";
        } else {
          buttonPageUp.style.display = "none";
        }
      });
    } else {
      window.addEventListener("scroll", function () {
        if (document.documentElement.scrollTop > 100) {
          buttonPageUp.style.display = "block";
        } else {
          buttonPageUp.style.display = "none";
        }
      });
    }
  }
  mediaQuery.addListener(handleMediaChange);
  handleMediaChange(mediaQuery);
  buttonPageUp.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});



// Скрол сторінки до потрібних абзаців
var aboutButton = document.getElementById("aboutButton");
var aboutSection = document.getElementById("aboutSection");
  aboutButton.addEventListener("click", function () {
  aboutSection.scrollIntoView({ behavior: "smooth" });
});
var skillButton = document.getElementById("skillButton");
var skillSection = document.getElementById("skillSection");
skillButton.addEventListener("click", function () {
  skillSection.scrollIntoView({ behavior: "smooth" });
});
var portfolioButton = document.getElementById("portfolioButton");
var portfolioSection = document.getElementById("portfolioSection");
portfolioButton.addEventListener("click", function () {
  portfolioSection.scrollIntoView({ behavior: "smooth" });
});
var contactButton = document.getElementById("contactButton");
var contactSelection = document.getElementById("contactSelection");
contactButton.addEventListener("click", function () {
  contactSelection.scrollIntoView({ behavior: "smooth" });
});
const smoothScrollLink = document.querySelector('.smooth-scroll');
const targetElement = document.querySelector('#latest_works');

var last_button = document.getElementById("last_button");
var portfolioSection = document.getElementById("portfolioSection");
last_button.addEventListener("click", function () {
  portfolioSection.scrollIntoView({ behavior: "smooth" });
});