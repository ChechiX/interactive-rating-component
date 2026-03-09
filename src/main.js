const ratingForm = document.getElementById('ratingForm');
const ratingOptions = document.getElementById('ratingOptions');
const ratingOptionButtons = ratingOptions.querySelectorAll('button');
const submitBtn = document.getElementById('submitBtn');
const selectedRating = document.getElementById('selectedRating');
const messageCard = document.getElementById('messageCard');

ratingForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (selectedRating.textContent === '0') return;

  setTimeout(() => {
    ratingForm.classList.add('rating-card__disabled');

    messageCard.classList.add('message-card--enabled');
  }, 1000);
});

ratingOptionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    ratingOptionButtons.forEach((btn) => {
      btn.classList.remove('rating-card__option--active');
    });

    button.classList.toggle('rating-card__option--active');

    selectedRating.textContent = button.textContent;
  });
});
