header = document.querySelector('header');
header.addEventListener('click', event => {
  const clickedElementClassName = event.target.classList[0];
  const classNames = ['fa-solid', 'menu_link'];
  const shouldToggle = classNames.some(className => className === clickedElementClassName);
  if (shouldToggle) {
    header.classList.toggle('active');
  }
});