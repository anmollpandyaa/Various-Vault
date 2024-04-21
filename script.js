const accessKey = "";

const searchForm = document.querySelector("#search")
const searchBox = document.querySelector("#field")
const searchResult = document.querySelector("#results")
const moreButton = document.querySelector("#more")

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url)
    const data = await response.json();

    if (page === 1) {
        searchResult.innerHTML = "";
    }

    const results = data.results;
    console.log(data)
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.regular;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})

moreButton.addEventListener("click", () => {
    page++;
    searchImages();
})

