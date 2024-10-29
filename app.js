import { imagesArray } from "./images.js";


let clickedImageIndex; // Make clickedImage globally accessible

const image = document.querySelectorAll('.js-image');
image.forEach(picture => {
  picture.addEventListener('click', (event) => {
  lightbox(event.target);
  });
});

function lightbox(image) {
  const lightbox = document.querySelector('.lightbox');
  lightbox.style.display = 'flex';

  const close = document.querySelector('.close-button');
  close.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  imageClicked(image);
}

function imageClicked(image) {
  let lightBoxImage = document.querySelector('.lightbox-image');
  const imageId = image.dataset.imageId;

    clickedImageIndex = imagesArray.findIndex(img => img.id === parseInt(imageId));

    const clickedImageObject = imagesArray[clickedImageIndex];
    lightBoxImage.src = clickedImageObject.source;
  };



const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');

rightArrow.addEventListener('click', handleRightArrowClick);
leftArrow.addEventListener('click', handleLeftArrowClick);


function handleRightArrowClick() {
  let lightBoxImage = document.querySelector('.lightbox-image');

  const nextImageIndex = clickedImageIndex + 1;

  if (nextImageIndex < imagesArray.length) {
    const nextImageObject = imagesArray[nextImageIndex];
    lightBoxImage.src = nextImageObject.source;

    clickedImageIndex = nextImageIndex; // Update clickedImage index
  }
} 



function handleLeftArrowClick() {
  let lightBoxImage = document.querySelector('.lightbox-image');

  const previousImageIndex = clickedImageIndex - 1;

  if (previousImageIndex >= 0) {
    const previousImageObject = imagesArray[previousImageIndex];
    lightBoxImage.src = previousImageObject.source;

    clickedImageIndex = previousImageIndex;
  }
}

const menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('click', () => {
  const menu = document.querySelector('.gallery-menu');
  menu.style.display = 'flex';
})

const arrowBackElement = document.querySelector('.arrow-back');
arrowBackElement.addEventListener('click', () => {
  const menu = document.querySelector('.gallery-menu');
  menu.style.display = 'none';
})