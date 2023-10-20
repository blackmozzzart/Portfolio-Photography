// change nav style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})

//  contact buttons (circular text buttons)
const textButtons = document.querySelectorAll('.contact__btn');

textButtons.forEach(textButtons => {
    let text = textButtons.querySelector('p');
    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style='transform: rotate(${index * 12}deg)'>${character}</span>`).join('')
})

// SWIPER JS
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        599: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1023: {
            slidesPerView: 3,
            spaceBetween: 60
        }
    }
});

// ZOOM JS
function toggleFullScreen() {
    var overlay = document.getElementById('overlay');
    var fullscreenImage = document.getElementById('fullscreenImage');

    if (overlay.style.display === 'block') {
        overlay.style.display = 'none';
    } else {
        overlay.style.display = 'block';
        fullscreenImage.src = this.getAttribute('data-image');
    }
}

var thumbnails = document.querySelectorAll(".thumbnail");
thumbnails.forEach(function (thumbnail) {
    thumbnail.addEventListener('click', function () {
        var overlay = document.getElementById('overlay');
        var fullscreenImage = document.getElementById('fullscreenImage');

        overlay.style.display = 'block';
        fullscreenImage.src = this.getAttribute('data-image');
    });
});

overlay.addEventListener('click', function () {
    overlay.style.display = 'none';
});

// NAV_BURGER
const nav = document.querySelector('.nav__links');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');

const openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

openNavBtn.addEventListener('click', openNav);

const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

closeNavBtn.addEventListener('click', closeNav);

// close nav menu on click of menu link
if (document.body.clientWidth < 1024) {
    nav.querySelectorAll('li a').forEach(navLink => {
        navLink.addEventListener('click', closeNav);
    })
}