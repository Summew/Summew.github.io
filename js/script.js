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
