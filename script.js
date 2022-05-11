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

const projects = [{
  name: "Multi-Post Stories 1",
  description: "A daily selection of privately personalized reads; " + 
  "no accounts or sign-ups required. has been the industry's " +
  "standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  featuredImage: "images/projects-79906734.jpeg",
  altTextImage: "Office desk with the word 'Project' written with chalk in the middle. Source: iStock",
  technologies: ["Css", "html", "Javascript", "Ruby"],
  linkLiveVersion: "https://elsonotake.github.io/Portfolio/",
  linkSource: "https://github.com/ElsonOtake/Portfolio",
},{
  name: "Multi-Post Stories 2",
  description: "A daily selection of privately personalized reads; " + 
  "no accounts or sign-ups required. has been the industry's " +
  "standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  featuredImage: "images/depositphotos-105666254.jpeg",
  altTextImage: "Worktable stamped with 'About us' in the middle and 'Creative thinking' on the top and bottom edges. Source: iStock",
  technologies: ["Css", "html", "Javascript", "Ruby"],
  linkLiveVersion: "https://elsonotake.github.io/Portfolio/",
  linkSource: "https://github.com/ElsonOtake/Portfolio",
},{
  name: "Multi-Post Stories 3",
  description: "A daily selection of privately personalized reads; " + 
  "no accounts or sign-ups required. has been the industry's " +
  "standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  featuredImage: "images/hobbies-187729558.jpeg",
  altTextImage: "Worktable with the word 'Hobbies' in the middle surronded by drawings of bicycle, microphone, joystick, film projector, and paint palette. Source: iStock",
  technologies: ["Css", "html", "Javascript", "Ruby"],
  linkLiveVersion: "https://elsonotake.github.io/Portfolio/",
  linkSource: "https://github.com/ElsonOtake/Portfolio",
},{
  name: "Multi-Post Stories 4",
  description: "A daily selection of privately personalized reads; " + 
  "no accounts or sign-ups required. has been the industry's " +
  "standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  featuredImage: "images/istockphoto-1068113694.jpeg",
  altTextImage: "Computer table with dices with letters on top forming the word 'webinar'. Source: iStock",
  technologies: ["Css", "html", "Javascript", "Ruby"],
  linkLiveVersion: "https://elsonotake.github.io/Portfolio/",
  linkSource: "https://github.com/ElsonOtake/Portfolio",
}]

const portfolio = document.getElementById("portfolio");
for (let i = projects.length - 1; i >= 0 ; i--) {
  const section = document.createElement("section");
  section.className = "proj";
  const img = document.createElement("img");
  img.src = projects[i].featuredImage;
  img.alt = projects[i].altTextImage;
  section.appendChild(img);
  const h3 = document.createElement("h3");
  h3.className = "themefff fw500";
  h3.innerText = projects[i].name;
  section.appendChild(h3);
  const p = document.createElement("p");
  p.className = "ffinter fw400";
  p.innerText = projects[i].description;
  section.appendChild(p);
  const ul = document.createElement("ul");
  for (let k = 0; k < projects[i].technologies.length; k++) {
    const li = document.createElement("li");
    li.className = "themefff ffinter fw500";
    li.innerText = projects[i].technologies[k];
    ul.appendChild(li);
  }
  section.appendChild(ul);
  const button = document.createElement("button");
  button.type = "button";
  /* create a class with the object number after underline */
  button.className = "_" + i + " theme44";
  button.innerText = "See project";
  section.appendChild(button);
  portfolio.insertAdjacentElement("afterend", section);
}

const seeProjectButtons = document.querySelectorAll(".proj button");
seeProjectButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    // console.log(e.target.classList[0].substring(1))
    let i = parseInt(e.target.classList[0].substring(1));
    if (popupWrapper) {
      popupWrapper.remove();
    }
    const popupWrapper = document.createElement("div");
    popupWrapper.className = "popup_wrapper";
    popupWrapper.id = "popup_container";
    const article = document.createElement("article");
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.className = "themefff fw500";
    h1.innerText = projects[i].name;
    const p1 = document.createElement("p");
    p1.className = "popup_close themefff fw500";
    p1.innerText = "X";
    div.appendChild(h1);
    div.appendChild(p1);
    article.appendChild(div);
    const img1 = document.createElement("img");
    img1.src = projects[i].featuredImage;
    img1.alt = projects[i].altTextImage;
    article.appendChild(img1);
    const p2 = document.createElement("p");
    p2.className = "themefff fw400";
    p2.innerText = projects[i].description;
    article.appendChild(p2);
    const ul1 = document.createElement("ul");
    for (let k = 0; k < projects[i].technologies.length; k++) {
      const li = document.createElement("li");
      li.className = "themefff ffinter fw500";
      li.innerText = projects[i].technologies[k];
      ul.appendChild(li);
    }
    article.appendChild(ul);
    const div1 = document.createElement("div");
    const button1 = document.createElement("button");
    button1.className = "themefff fw500";
    button1.innerHTML = "See Live <i class='fa-brands fa-github'></i>";
    div1.appendChild(button1);
    const button2 = document.createElement("button");
    button2.className = "themefff fw500";
    button2.innerHTML = "See Source <i class='fa-solid fa-screencast'></i>";
    div1.appendChild(button2);
    body.insertAdjacentElement("afterend", article);
  })
})

