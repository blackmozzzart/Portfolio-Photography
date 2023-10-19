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

// function openFullScreen(imageId) {
//     var image = document.getElementById(imageId);
//     var overlay = document.getElementById('overlay');
//     var fullscreenImage = document.getElementById('fullscreenImage');

//     overlay.style.display = 'block';
//     fullscreenImage.src = image.src;
// }

// function closeFullScreen() {
//     var overlay = document.getElementById('overlay');
//     overlay.style.display = 'none';
// }

// function toggleFullScreen(imageId) {
//     var overlay = document.getElementById('overlay');
//     var fullscreenImage = document.getElementById('fullscreenImage');
//     var image = document.querySelector(".thumbnail[data-image='" + imageId + "']");

//     if (overlay.style.display === 'block') {
//         overlay.style.display = 'none';
//     } else {
//         overlay.style.display = 'block';
//         fullscreenImage.src = image.getAttribute('data-image');
//     }
// }

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