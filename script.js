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
  technologies: ["Css", "html", "Javascript", "Ruby"],
  linkLiveVersion: "https://elsonotake.github.io/Portfolio/",
  linkSource: "https://github.com/ElsonOtake/Portfolio",
},{
  name: "Multi-Post Stories 2",
  description: "A daily selection of privately personalized reads; " + 
  "no accounts or sign-ups required. has been the industry's " +
  "standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  featuredImage: "images/depositphotos-105666254.jpeg",
  technologies: ["Css", "html", "Javascript", "Ruby"],
  linkLiveVersion: "https://elsonotake.github.io/Portfolio/",
  linkSource: "https://github.com/ElsonOtake/Portfolio",
},{
  name: "Multi-Post Stories 3",
  description: "A daily selection of privately personalized reads; " + 
  "no accounts or sign-ups required. has been the industry's " +
  "standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  featuredImage: "images/istockphoto-1068113694.jpeg",
  technologies: ["Css", "html", "Javascript", "Ruby"],
  linkLiveVersion: "https://elsonotake.github.io/Portfolio/",
  linkSource: "https://github.com/ElsonOtake/Portfolio",
},{
  name: "Multi-Post Stories 4",
  description: "A daily selection of privately personalized reads; " + 
  "no accounts or sign-ups required. has been the industry's " +
  "standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  featuredImage: "images/hobbies-187729558.jpeg",
  technologies: ["Css", "html", "Javascript", "Ruby"],
  linkLiveVersion: "https://elsonotake.github.io/Portfolio/",
  linkSource: "https://github.com/ElsonOtake/Portfolio",
},
]
for (let i = 0; i < projects.length; i++) {
  console.log(projects[i].name);
}