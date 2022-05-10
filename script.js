const body = document.querySelector('body');
const header = document.querySelector('header');
const classNames = ['fa-solid', 'menu_link'];
header.addEventListener('click', (event) => {
  const clickedElementClassName = event.target.classList[0];
  const shouldToggle = classNames.some((className) => className === clickedElementClassName);
  if (shouldToggle) {
    header.classList.toggle('active');
    if (header.classList.contains('active')) {
      body.classList.add('noscroll');
    } else {
      body.classList.remove('noscroll');
    }
  }
});