const accessKey = "PwYO_lHIYAHEHFxcaI3HjKJrdgYwOUfrCPmN8x7EtDg"


const formEle = document.querySelector("form")
const inputEle = document.getElementById("search-input")
const speakerResults = document.querySelector(".speaker-results")
const showMore = document.getElementById("show-more-button")

let inputData = ""
let page = 1;

async function searchImages(){

    inputData = inputEle.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`
  
    // const response = await fetch(url);
            const response = await axios.get(url);

    const data = response.data;

        const results = data.results;

    if (page === 1){
        speakerResults.innerHTML = ""
    }

    results.map((result) =>{
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("speaker-result");
        const image =document.createElement('img');
        image.src = result.urls.small
        image.alt = result.alt_description
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html 
        imageLink.target = "_blank"
        imageLink.textContent = result.alt_deescription

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        speakerResults.appendChild(imageWrapper);
    });

    page++
    if(page > 1){
        showMore.style.display = "block"
    }
}

formEle.addEventListener("submit", (event) => {
    event.preventDefault()
    page = 1;
    searchImages()
})

showMore.addEventListener("click", () => {
    searchImages()
})

//testimonial page







//networking(Meme) page  
const generateMemeBtn = document.querySelector(
    ".meme-generator .generate-meme-btn"
    );
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
};

const generateMeme = (url,title,author) => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then(data => {
        updateDetails(data.url, data.title, data.author);
    });
};

generateMemeBtn.addEventListener("click", generateMeme);


//shop page 
const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
     const storeitems = document.getElementById("product-list")
     const product = document.querySelectorAll(".product")
     const pname = storeitems.getElementsByTagName("h2")


for(var i=0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName('h2')[0];

    if (match) {
        let textvalue = match.textContent || match.innerHTML

        if (textvalue.toUpperCase().indexOf(searchbox) > -1){
            product[i].style.display = "";
        } else {
            product[i].style.display = "none";

        }
      }
   }
 }