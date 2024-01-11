const reviews = [ //array
    {
      img: "testimonial images/allef-vinicius-C_1jjFJioWg-unsplash.jpg",
      name: "John Doe",
      job: "UX Designer",
      text: "Attending HCI Hub events has been instrumental in shaping my UX design skills. The insightful talks and networking opportunities have opened new doors for my career.",
    },
    {
      img: "testimonial images/lau-keith-dcZsxUAAJXs-unsplash.jpg",
      name: "Jane Smith",
      job: "Software Engineer",
      text: "I've attended multiple events organized by Tallinn University HCI Hub, and each one has been a valuable learning experience. The diverse topics covered and engaging speakers make it a must-attend for anyone in the field.",
    },
    {
      img: "testimonial images/vinicius-wiesehofer-UOavP_Z38lE-unsplash.jpg",
      name: "Alice Johnson",
      job: "Interaction Designer",
      text: "The mentoring program at HCI Hub has provided me with valuable guidance in my journey as an interaction designer. The personalized mentorship has greatly contributed to my professional growth.",
    },
    {
      img: "testimonial images/mohammad-faruque-SpIKPT8zeAs-unsplash.jpg",
      name: "Bob Anderson",
      job: "Front-end Developer",
      text: "HCI Hub's networking opportunities have allowed me to connect with industry professionals and fellow developers. The collaborative environment fosters innovation and knowledge sharing.",
    },
    {
      img: "testimonial images/taylor-grote-UiVe5QvOhao-unsplash.jpg",
      name: "Eva Rodriguez",
      job: "User Researcher",
      text: "As a user researcher, the featured speakers at HCI Hub have provided valuable insights into the latest trends and methodologies. It's a great platform to stay updated and connected with the UX community.",
    },
  ];



const img = document.getElementById("person-img"); //declare variable
const reviewAuthor = document.getElementById("reviewAuthor");
const job = document.getElementById("job");
const comment = document.getElementById("comment");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let index = 0; //determine the testimonial in the array to be displayed

//updates the displayed 
function showInformation() { 
    img.src = reviews[index].img; 
    reviewAuthor.textContent = reviews[index].name;
    job.textContent = reviews[index].job;
    comment.textContent = reviews[index].text;
}
//when page is ready show initial testimonial
window.addEventListener("DOMContentLoaded", function () {
    showInformation();
});

prevBtn.addEventListener("click", function () {
    index--; //decreases value of the index by 1
    if (index < 0) {
        index = reviews.length - 1; //looping effect resets to last testimonial
    }
    showInformation();
});

nextBtn.addEventListener("click", function () {
    index++; //increases value of the index by 1
    if (index >= reviews.length) {
        index = 0;
    }
    showInformation();
});

//random index displays testimonial associated with the index
randomBtn.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    index = randomIndex;
    showInformation();
});


//hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))
