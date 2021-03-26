let open_menu = document.querySelector('#open');
let menu = document.querySelector('.menu')
let close_menu = document.querySelector('#close')
let close_ = document.querySelector('.close_')
let section = document.querySelector('section')
let info = document.querySelector('#info')

let widthDum = () => document.body.clientWidth;
let sectTop = () => section.offsetTop;
let scrollMain = () => {
    let page = window.pageYOffset;
    page += 52;
    return page;
}

open_menu.onclick = () => {
    menu.style.display = 'block';
    close_menu.style.display = 'block';
    close_.style.display = 'block';
    open_menu.style.display = 'none'
}

close_.onclick = () => {
    menu.style.display = 'none';
    close_menu.style.display = 'none';
    close_.style.display = 'none';
    open_menu.style.display = 'block'
}

close_menu.onclick = () => {
    menu.style.display = 'none';
    close_menu.style.display = 'none';
    close_.style.display = 'none';
    open_menu.style.display = 'block'
}

let colorBlock = () => {
    if (scrollMain() >= sectTop()) {
        open_menu.style.color = "#474747"
    } else if (scrollMain() <= sectTop()) {
        open_menu.style.color = "#ffffff"
    }
}

let resizeDum = () => {
    if (widthDum() >= 980) {
        document.querySelector('span').style.display = 'none';
        document.querySelector('.menu').style.display = 'flex'
    } else {
        document.querySelector('span').style.display = 'block';
        document.querySelector('.menu').style.display = 'none';
    }
}

window.addEventListener('scroll', colorBlock)
window.addEventListener('resize', resizeDum)

/*Слайдер*/

/* Устанавливаем индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    /* Проходим по каждому слайду в цикле for */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}