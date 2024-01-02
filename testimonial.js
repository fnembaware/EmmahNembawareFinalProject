const reviews = [
    {
      img: "images/attendee1.jpg",
      name: "John Doe",
      job: "UX Designer",
      text: "Attending HCI Hub events has been instrumental in shaping my UX design skills. The insightful talks and networking opportunities have opened new doors for my career.",
    },
    {
      img: "images/attendee2.jpg",
      name: "Jane Smith",
      job: "Software Engineer",
      text: "I've attended multiple events organized by Tallinn University HCI Hub, and each one has been a valuable learning experience. The diverse topics covered and engaging speakers make it a must-attend for anyone in the field.",
    },
    {
      img: "images/attendee3.jpg",
      name: "Alice Johnson",
      job: "Interaction Designer",
      text: "The mentoring program at HCI Hub has provided me with valuable guidance in my journey as an interaction designer. The personalized mentorship has greatly contributed to my professional growth.",
    },
    {
      img: "images/attendee4.jpg",
      name: "Bob Anderson",
      job: "Front-end Developer",
      text: "HCI Hub's networking opportunities have allowed me to connect with industry professionals and fellow developers. The collaborative environment fosters innovation and knowledge sharing.",
    },
    {
      img: "images/attendee5.jpg",
      name: "Eva Rodriguez",
      job: "User Researcher",
      text: "As a user researcher, the featured speakers at HCI Hub have provided valuable insights into the latest trends and methodologies. It's a great platform to stay updated and connected with the UX community.",
    },
  ];



const img = document.getElementById("person-img");
const reviewAuthor = document.getElementById("reviewAuthor");
const job = document.getElementById("job");
const comment = document.getElementById("comment");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let index = 0;

function showInformation() {
    img.src = reviews[index].img;
    reviewAuthor.textContent = reviews[index].name;
    job.textContent = reviews[index].job;
    comment.textContent = reviews[index].text;
}

window.addEventListener("DOMContentLoaded", function () {
    showInformation();
});

prevBtn.addEventListener("click", function () {
    index--;
    if (index < 0) {
        index = reviews.length - 1;
    }
    showInformation();
});

nextBtn.addEventListener("click", function () {
    index++;
    if (index >= reviews.length) {
        index = 0;
    }
    showInformation();
});

randomBtn.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    index = randomIndex;
    showInformation();
});