//
// Menu mobile toggle active
//

const body = document.querySelector('body');
const header = document.querySelector('header');

// Classes for close menu

const classNames = ['fa-solid', 'menu_link'];

header.addEventListener('click', (event) => {
  const clickedElementClassName = event.target.classList[0];
  const shouldToggle = classNames.some((className) => className === clickedElementClassName);

  if (shouldToggle) {
    header.classList.toggle('active');

    // Vertical scroll disabled

    if (header.classList.contains('active')) {
      body.classList.add('noscroll');
    } else {
      body.classList.remove('noscroll');
    }
  }
});

//
// Array of projects objects
//

const projects = [{
  name: 'Portfolio Elson Otake',
  description: 'A daily selection of privately personalized reads; '
  + "no accounts or sign-ups required. has been the industry's "
  + 'standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  featuredImage: 'images/projects-79906734.jpeg',
  altTextImage: "Office desk with the word 'Project' written with chalk in the middle. Source: iStock",
  technologies: ['Css', 'html', 'JCL', 'Ruby', 'Java'],
  linkLiveVersion: 'https://elsonotake.github.io/Portfolio/',
  linkSource: 'https://github.com/ElsonOtake/Portfolio',
}, {
  name: 'Portfolio Bootstrap',
  description: 'A daily selection of privately personalized reads; '
  + "no accounts or sign-ups required. has been the industry's "
  + 'standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  featuredImage: 'images/depositphotos-105666254.jpeg',
  altTextImage: "Worktable stamped with 'About us' in the middle and 'Creative thinking' on the top and bottom edges. Source: iStock",
  technologies: ['Css', 'html', 'Javascript'],
  linkLiveVersion: 'https://elsonotake.github.io/Bootstrap_Portfolio/',
  linkSource: 'https://github.com/ElsonOtake/Bootstrap_Portfolio',
}, {
  name: 'Multi-Post Trials',
  description: 'A daily selection of privately personalized reads; '
  + "no accounts or sign-ups required. has been the industry's "
  + 'standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  featuredImage: 'images/hobbies-187729558.jpeg',
  altTextImage: "Worktable with the word 'Hobbies' in the middle surronded by drawings of bicycle, microphone, joystick, film projector, and paint palette. Source: iStock",
  technologies: ['Css', 'html', 'Javascript', 'Bootstrap'],
  linkLiveVersion: 'https://elsonotake.github.io/elson-nico/',
  linkSource: 'https://github.com/ElsonOtake/elson-nico',
}, {
  name: 'Multi-Post Recipes',
  description: 'A daily selection of privately personalized reads; '
  + "no accounts or sign-ups required. has been the industry's "
  + 'standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  featuredImage: 'images/istockphoto-1068113694.jpeg',
  altTextImage: "Computer table with dices with letters on top forming the word 'webinar'. Source: iStock",
  technologies: ['Java', 'Css', 'html', 'Javascript'],
  linkLiveVersion: 'https://elsonotake.github.io/odin-recipes/',
  linkSource: 'https://github.com/ElsonOtake/odin-recipes',
}];

//
// Project sections created when page loads
//

const portfolio = document.getElementById('portfolio');

for (let i = projects.length - 1; i >= 0; i -= 1) {
  const section = document.createElement('section');
  section.className = 'proj';

  const img = document.createElement('img');
  img.src = projects[i].featuredImage;
  img.alt = projects[i].altTextImage;
  section.appendChild(img);

  const h3 = document.createElement('h3');
  h3.className = 'colorfff fw500';
  h3.innerText = projects[i].name;
  section.appendChild(h3);

  const p = document.createElement('p');
  p.className = 'ff_inter fw400';
  p.innerText = projects[i].description;
  section.appendChild(p);

  const ul = document.createElement('ul');

  for (let k = 0; k < projects[i].technologies.length; k += 1) {
    const li = document.createElement('li');
    li.className = 'colorfff ff_inter fw500';
    li.innerText = projects[i].technologies[k];
    ul.appendChild(li);
  }

  section.appendChild(ul);

  const button = document.createElement('button');
  button.type = 'button';
  /* create a class with the object id number after underline */
  button.className = `_${i} color44`;
  button.innerText = 'See project';
  section.appendChild(button);
  portfolio.insertAdjacentElement('afterend', section);
}

//
// Project popup window
//

const seeProjectButtons = document.querySelectorAll('.proj button');

seeProjectButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const i = parseInt(e.target.classList[0].substring(1), 10);
    const popupWrapper = document.createElement('div');
    popupWrapper.className = 'popup_wrapper';
    popupWrapper.id = 'popup_container';

    // Close popup window click on "X" or outside the popup

    popupWrapper.addEventListener('click', (e) => {
      if (e.target.id === 'popup_container' || e.target.classList[0] === 'popup_close') {
        popupWrapper.remove();
      }
    });

    const article = document.createElement('article');
    const div = document.createElement('div');

    const h1 = document.createElement('h1');
    h1.className = 'colorfff fw500';
    h1.innerText = projects[i].name;
    div.appendChild(h1);

    const i0 = document.createElement('i');
    i0.className = 'popup_close colorfff fa-solid fa-x';
    div.appendChild(i0);
    article.appendChild(div);

    const img1 = document.createElement('img');
    img1.src = projects[i].featuredImage;
    img1.alt = projects[i].altTextImage;
    article.appendChild(img1);

    const p2 = document.createElement('p');
    p2.className = 'colorfff fw400';
    p2.innerText = projects[i].description;
    article.appendChild(p2);

    const ul1 = document.createElement('ul');

    for (let k = 0; k < projects[i].technologies.length; k += 1) {
      const li = document.createElement('li');
      li.className = 'colorfff ff_inter fw500';
      li.innerText = projects[i].technologies[k];
      ul1.appendChild(li);
    }

    article.appendChild(ul1);

    const div1 = document.createElement('div');

    const button1 = document.createElement('button');
    button1.className = 'colorfff fw500';

    const a1 = document.createElement('a');
    a1.href = projects[i].linkLiveVersion;

    const span = document.createElement('span');
    span.innerText = 'See Live';
    a1.appendChild(span);

    const img = document.createElement('img');
    img.src = 'images/icons-live.svg';
    a1.appendChild(img);
    button1.appendChild(a1);
    div1.appendChild(button1);

    const button2 = document.createElement('button');
    button2.className = 'colorfff fw500';

    const a2 = document.createElement('a');
    a2.href = projects[i].linkSource;

    const span1 = document.createElement('span');
    span1.innerText = 'See Source';
    a2.appendChild(span1);

    const i1 = document.createElement('i');
    i1.className = 'fa-brands fa-github';
    a2.appendChild(i1);
    button2.appendChild(a2);
    div1.appendChild(button2);
    article.appendChild(div1);
    popupWrapper.appendChild(article);
    portfolio.insertAdjacentElement('afterend', popupWrapper);
  });
});

//
// Validate contact form
//
// forms mobile and desktop
const formMob = document.querySelector('.form_mob');
const formDsk = document.querySelector('.form_dsk');
// Full name input mobile and desktop
const titleMob = document.getElementById('title_mob');
const titleDsk = document.getElementById('title_dsk');
// email input mobile and desktop
const emailMob = document.getElementById('email_mob');
const emailDsk = document.getElementById('email_dsk');
// message input mobile and desktop
const msgMob = document.getElementById('msg_mob');
const msgDsk = document.getElementById('msg_dsk');
// message input mobile and desktop
const errorMob = document.querySelector('.form_mob p');
const errorDsk = document.querySelector('.form_dsk p');

const emailRegex = /^[a-z]+@[a-z]+(?:\.[a-z]+)*$/;
const EMAIL_INVALID = 'Please, no capital letters in the email address';

function showMessage(message, type) {
  // get the small element and set the message
  errorMob.innerText = message;
  errorDsk.innerText = message;

  return type;
}

function validateEmail(input, invalidMsg) {
  const email = input.value.trim();

  if (!emailRegex.test(email)) {
    return showMessage(invalidMsg, false);
  }

  return true;
}

formMob.addEventListener('submit', (event) => {
  // stop form submission
  event.preventDefault();

  // validate the form
  const emailValid = validateEmail(formMob.elements.email, EMAIL_INVALID);

  // if valid, submit the form.
  if (emailValid) {
    formMob.submit();
  }
});

formDsk.addEventListener('submit', (event) => {
  // stop form submission
  event.preventDefault();

  // validate the form
  const emailValid = validateEmail(formDsk.elements.email, EMAIL_INVALID);

  // if valid, submit the form.
  if (emailValid) {
    formDsk.submit();
  }
});

//
// Use of local storage
// 
const contact = {
  name: "",
  email: "",
  msg: ""
}

if(!localStorage.getItem('data')) {
  populateStorage();
} else {
  populateContactForm();
}

function populateStorage() {
  contact["name"] = titleMob.value;
  contact["email"] = emailMob.value;
  contact["msg"] = msgMob.value;
  const storeData = JSON.stringify(contact);
  localStorage.setItem('data', storeData);

  populateContactForm();
}

function populateContactForm() {
  const currentContact = JSON.parse(localStorage.getItem('data'));
  titleMob.value = currentContact["name"];
  titleDsk.value = currentContact["name"];
  emailMob.value = currentContact["email"];
  emailDsk.value = currentContact["email"];
  msgMob.value = currentContact["msg"];
  msgDsk.value = currentContact["msg"];
}

titleMob.addEventListener('input', () => {
  // update the same field in desktop form
  titleDsk.value = titleMob.value;
  populateStorage()
});

titleDsk.addEventListener('input', () => {
  // update the same field in mobile form
  titleMob.value = titleDsk.value;
  populateStorage()
});

emailMob.addEventListener('input', () => {
  // clear the message field
  showMessage('', true);
  // update the same field in desktop form
  emailDsk.value = emailMob.value;
  populateStorage()
});

emailDsk.addEventListener('input', () => {
  // clear the message field
  showMessage('', true);
  // update the same field in mobile form
  emailMob.value = emailDsk.value;
  populateStorage()
});

msgMob.addEventListener('input', () => {
  // update the same field in desktop form
  msgDsk.value = msgMob.value;
  populateStorage()
});

msgDsk.addEventListener('input', () => {
  // update the same field in mobile form
  msgMob.value = msgDsk.value;
  populateStorage()
});
