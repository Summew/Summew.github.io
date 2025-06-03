  const buttons = document.querySelectorAll('.decor__button');
  const image = document.getElementById('decorImage');

  const decorImages = {
    red: 'img/decor-red.jpg',
    yellow: 'img/decor-yellow.jpg',
    green: 'img/decor-green.jpg',
    blue: 'img/decor-blue.jpg',
    purple: 'img/decor-purple.jpg'
  };

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const color = button.getAttribute('data-color');
      image.src = decorImages[color];
    });
  });

  const burgerBtn = document.getElementById('burgerBtn');
  const nav = document.querySelector('.header__nav');

  burgerBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    burgerBtn.classList.toggle('burger--active');
  });

  document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      burgerBtn.classList.remove('burger--active');
    });
  });

  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !burgerBtn.contains(e.target)) {
      nav.classList.remove('open');
      burgerBtn.classList.remove('burger--active');
    }
  });
