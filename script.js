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

  // also reveal the social links + long scroll section
  const substackEl = document.querySelector('.substack-link');
  const scrollHintEl = document.querySelector('.scroll-hint');
  const longScrollEl = document.querySelector('.long-scroll');
  if (substackEl) substackEl.classList.remove('hidden');
  if (scrollHintEl) scrollHintEl.classList.remove('hidden');
  if (longScrollEl) longScrollEl.classList.remove('hidden');
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

// Toggle the Info / contact dropdown on click
const contact = document.querySelector('.contact');
if (contact) {
  contact.addEventListener('click', function (e) {
    // ignore clicks on links inside the info box so they still navigate
    if (e.target.closest('a')) return;
    contact.classList.toggle('open');
  });
}

// Random dog: flashes for 250ms at a random spot, then schedules the next flash
const randomDog = document.querySelector('.random-dog');
if (randomDog) {
  function flashDog() {
    const w = randomDog.offsetWidth || 220;
    const h = randomDog.offsetHeight || 180;
    const maxX = Math.max(0, window.innerWidth - w);
    const maxY = Math.max(0, window.innerHeight - h);
    randomDog.style.left = Math.floor(Math.random() * maxX) + 'px';
    randomDog.style.top = Math.floor(Math.random() * maxY) + 'px';
    randomDog.classList.remove('hidden');
    setTimeout(function () {
      randomDog.classList.add('hidden');
      // wait between 2 and 10 seconds before showing again
      setTimeout(flashDog, 2000 + Math.random() * 8000);
    }, 250);
  }
  // first appearance after a short random delay
  setTimeout(flashDog, 1500 + Math.random() * 3000);
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

