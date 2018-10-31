const carouselImages = document.querySelectorAll('carousel-image');

let currentImageIndex = 0;

setInterval(() =>{
    let img = carouselImages[currentImageIndex];
    img.classList.add('hidden');
    currentImageIndex++;
    if(currentImageIndex === carouselImages.length) currentImageIndex = 0;
    img = carouselImages[currentImageIndex];
    img.classList.remove('hidden');
}, 5000);