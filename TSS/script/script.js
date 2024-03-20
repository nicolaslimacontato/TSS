//menu
const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', function (){
    if(window.scrollY > 300) {
        navEl.classList.add('navbar-scrolled');
    } else {
        navEl.classList.remove('navbar-scrolled');
    }
});

// init Isotope
var $grid = $('#product-list').isotope({});
        
// filter items on button click
$('.filter-button-group').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});

// AOS
AOS.init({
    duration: 1800,
});