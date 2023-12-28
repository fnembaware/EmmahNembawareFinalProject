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

    const response = await fetch(url)
    const data = await response.json()

    const results = data.speakerResults

    if (page === 1){
        speakerResults.innerHTML = ""
    }

    results.map(results) =>{
        const imageWrapper = document.createElement('div')
        imageWrapper.classList.add("searchResult")
        const image =document.createElement('img')
    }
}


