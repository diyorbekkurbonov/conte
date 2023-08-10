const accessKey ="S5Fa1eWkcfu1giq7bxj5LcG6_b1MWRGUZOQhustIkU0"

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search__input");
const searchResults = document.querySelector('.search__results');
const showMore = document.getElementById("show__more-button");
const footer = document.querySelector(".footer")
let inputData = "";
let page = 1;

async function searchImages(){
inputData=inputEl.value;
const url= `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`

const response = await fetch(url)
// if(response==404){
// footer.style.margin= "700px 0 0 0"

// }else{


// }
const data = await response.json()
const results = data.results;

if(page=== 1){
    searchResults.innerHTML = "";
}


results.map((result)=>{
    const imageWrapper = document.createElement('div')
    imageWrapper.classList.add("search__result");
    const image = document.createElement('img');
    image.src=result.urls.small;
    image.alt=result.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href=result.links.html;
    imageLink.target= "_blank"
    imageLink.textContent=result.alt_description


    imageWrapper.appendChild(image)
    imageWrapper.appendChild(imageLink)
    searchResults.appendChild(imageWrapper)

});
page++;

if(page > 1){
    showMore.style.display="block"

}
}



formEl.addEventListener("submit", (event)=>{
event.preventDefault()
page=1;
searchImages()


})

showMore.addEventListener("click", ()=>{
    searchImages()
    
    
    })


