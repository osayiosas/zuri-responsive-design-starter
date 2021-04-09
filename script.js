const btnToggler = document.getElementById('btn');
const navLink = document.querySelector('.nav-links');

btnToggler.addEventListener('click', function () {
 navLink.classList.toggle('active');
});