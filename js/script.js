const nav_posisition = document.getElementById('nav');

window.addEventListener('scroll', function() {
    scrollPosition = window.scrollY;

    if (scrollPosition >= 100) {
        nav_posisition.classList.add('nav-dark');
        
    }else if (scrollPosition <= 100) {
        nav_posisition.classList.remove('nav-dark')
    }
})

