const accessKey = "ZL1Q9ppn9DkL4zM5GqVpq6SjJxdAG9VGhkfjxu0u57I";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const searchMoreBtn =document.getElementById("show-more-btn");


let keyword = "";
let page = 1,

async function searchImages() {
	keyword = searchBox.value;
	const url = "https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}";

	const response = await fetch(url);
	const data = await response.json();

	const results = data.results;

	results.map((results) =>{

	})
}

searchForm.addEventListener("submit", (e) =>{
	e.preventDefault();
	page = 1;
	searchImages();
})