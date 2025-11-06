const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg"
];

let currentIndex = 0;

const sliderImage = document.getElementById("slider-image");
const counter = document.getElementById("counter");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const sliderContainer = document.querySelector(".slider-container");

let autoSlideInterval;

// Функция обновления слайда с fade
function updateSlider() {
    sliderImage.classList.remove("show");
    setTimeout(() => {
        sliderImage.src = images[currentIndex];
        sliderImage.classList.add("show");
        counter.textContent = `Изображение ${currentIndex + 1} из ${images.length}`;
    }, 100);
}

// Кнопки
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
});

// Авто-слайд
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    }, 4000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

sliderContainer.addEventListener("mouseenter", stopAutoSlide);
sliderContainer.addEventListener("mouseleave", startAutoSlide);

// Инициализация
updateSlider();
startAutoSlide();
sliderImage.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});