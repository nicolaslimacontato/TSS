//menu
const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        navEl.classList.add('navbar-scrolled');
    } else {
        navEl.classList.remove('navbar-scrolled');
    }
});

// init Isotope
var $grid = $('#product-list').isotope({});

// filter items on button click
$('.filter-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});

// AOS
AOS.init({
    duration: 1800,
});


var swiper = new Swiper(".aboutInner", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

function initSwiper() {
    if ($(window).width() < 769) {
        swiper.params.slidesPerView = 1;
        swiper.params.slidesPerGroup = 1;
    } else {
        swiper.params.slidesPerView = 3;
        swiper.params.slidesPerGroup = 3;
    }
    swiper.update();
}

$(window).on('resize', function() {
    initSwiper();
});

initSwiper();

//about
//reload
window.addEventListener('resize', function (event) {
    recarrega();
});

function recarrega() {
    document.location.reload();
};

