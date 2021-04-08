const navToggl = document.querySelector('.nav-toggl');

const navLink= document.querySelectorAll('.nav__link');

navToggl.addEventListener('click', () => {
    document.body.classList.toggle('active');
});

navLink.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('active');
    })
})