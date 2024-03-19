const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', function (){
    if(window.scrollY > 400) {
        navEl.classList.add('navbar-scrolled');
    } else {
        navEl.classList.remove('navbar-scrolled');
    }
});

