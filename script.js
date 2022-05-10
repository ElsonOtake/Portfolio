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
  featuredImage: "images/istockphoto-1068113694.jpeg",
  altTextImage: "Computer table with dices with letters on top forming the word 'webinar'. Source: iStock",
  technologies: ["Css", "html", "Javascript", "Ruby"],
  linkLiveVersion: "https://elsonotake.github.io/Portfolio/",
  linkSource: "https://github.com/ElsonOtake/Portfolio",
},{
  name: "Multi-Post Stories 4",
  description: "A daily selection of privately personalized reads; " + 
  "no accounts or sign-ups required. has been the industry's " +
  "standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  featuredImage: "images/hobbies-187729558.jpeg",
  altTextImage: "Worktable with the word 'Hobbies' in the middle surronded by drawings of bicycle, microphone, joystick, film projector, and paint palette. Source: iStock",
  technologies: ["Css", "html", "Javascript", "Ruby"],
  linkLiveVersion: "https://elsonotake.github.io/Portfolio/",
  linkSource: "https://github.com/ElsonOtake/Portfolio",
},
]
// for (let i = 0; i < projects.length; i++) {
//   console.log(projects[i].name);
// }
let i = 0;
const portfolioId = document.getElementById("portfolio");
// const section = document.getElementById("myH2");
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
button.className = "theme44";
button.innerText = "See project";
section.appendChild(button);
portfolio.insertAdjacentElement("afterend", section);