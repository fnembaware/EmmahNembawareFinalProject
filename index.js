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

//speakers page 

//access key to Unsplash API 
const accessKey = "PwYO_lHIYAHEHFxcaI3HjKJrdgYwOUfrCPmN8x7EtDg"


const formEle = document.querySelector("form") //declaring variable
const inputEle = document.getElementById("search-input") //declaring variable
const speakerResults = document.querySelector(".speaker-results") //declaring variable
const showMore = document.getElementById("show-more-button") //declaring variable

let inputData = "" //creating a variable that holds a string
let page = 1; //initialise variable named page

async function searchImages(){

    inputData = inputEle.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`
  
    // const response = await fetch(url); 

            const response = await axios.get(url); 
            // response - stores the data from the url request
            //Axios - JS library for making HTTP requests
            // await - used with asyc f(x) to wait for the url request to be made and then prosecc the function
            

    const data = response.data;

        const results = data.results;

        //if on page 1 then it clears the previous content before adding new info
    if (page === 1){
        speakerResults.innerHTML = ""
    }

    //creating HTML elements dynamically for each speaker adn adds them to the page
    //It will display list if speakers images and titles
    results.map((result) =>{
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("speaker-result");
        const image =document.createElement('img');
        image.src = result.urls.small
        image.alt = result.alt_description
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html 
        imageLink.target = "_blank"
        imageLink.textContent = result.alt_description

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        speakerResults.appendChild(imageWrapper);
    });

    page++
    if(page > 1){
        showMore.style.display = "block"
    }
}

//loads more pages 
formEle.addEventListener("submit", (event) => {
    event.preventDefault()
    page = 1;
    searchImages()
})

showMore.addEventListener("click", () => {
    searchImages()
})








