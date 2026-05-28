function showImages() {
  console.log('Click event triggered');
  const bookImage = document.querySelector('.book-image');
  const geeseImage = document.querySelector('.geese-image');
  const textMessageImage = document.querySelector('.text-message-image');
  const marshmallowImage = document.querySelector('.burnt-marshmallow');
  const newJellyfishImage = document.querySelector('.jellyfish-image-bottom');
  const contact = document.querySelector('.contact');
  const byeTinyImage = document.querySelector('.tiny-image');
  const reviewText = document.querySelector('.section2');
  const bigJellyfishLink = document.querySelector('.large-jellyfish-link');


  bookImage.classList.remove('hidden');
  geeseImage.classList.remove('hidden');
  textMessageImage.classList.remove('hidden');
  marshmallowImage.classList.remove('hidden');
  newJellyfishImage.classList.remove('hidden');
  contact.classList.remove('hidden');
  byeTinyImage.classList.add('hidden');
  reviewText.classList.remove('hidden');
  if (bigJellyfishLink) bigJellyfishLink.classList.remove('hidden');
}

const tinyImage = document.querySelector('.tiny-image');
tinyImage.addEventListener('click', showImages);
console.log('Click event triggered');

// Toggle the new book (Aardige Vrouwen) details on click
const newBookLink = document.querySelector('.new-book-link');
const newBookDetails = document.querySelector('.new-book-details');
if (newBookLink && newBookDetails) {
  newBookLink.addEventListener('click', function () {
    newBookDetails.classList.toggle('hidden');
  });
}

// Show the big jellyfish overlay on click; click overlay to dismiss
const largeJellyfishLink = document.querySelector('.large-jellyfish-link');
const jellyfishOverlay = document.querySelector('.jellyfish-overlay');
if (largeJellyfishLink && jellyfishOverlay) {
  largeJellyfishLink.addEventListener('click', function () {
    jellyfishOverlay.classList.remove('hidden');
  });
  jellyfishOverlay.addEventListener('click', function () {
    jellyfishOverlay.classList.add('hidden');
  });
}

// const bookImage = document.querySelector('.book-image img');
// const kopenText = document.createElement('div');
// kopenText.classList.add('kopen-text');
// kopenText.innerText = 'KOPEN';
// document.body.appendChild(kopenText);

// bookImage.addEventListener('mouseover', () => {
//   kopenText.classList.add('move-down');
// });

// bookImage.addEventListener('mouseleave', () => {
//   kopenText.classList.remove('move-down');
// });

