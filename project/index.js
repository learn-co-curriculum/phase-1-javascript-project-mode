// const URL = 'https://www.omdbapi.com/?t=Forrest+Gump&apikey=821e1418'

const searchForm = document.getElementById('searchForm');
const reviewForm = document.getElementById('reviewForm');
const h1 = document.querySelector('h1');
const h4 = document.querySelector('h4');
const img = document.querySelector('img');
const p = document.querySelector('p');
const input = document.querySelector('input');
const modalTitle = document.querySelector('.modal-title');

const reviewsDiv = document.querySelector(".reviews-div")
const textArea = document.getElementById('floatingTextarea2');
const ratingSelect = document.getElementById('floatingSelectGrid');
const author = document.getElementById('username');

const API_KEY = "AIzaSyAFox-WBucqYGBy0kgxWCQVu_wTN0wTk8c";
let video = "";

const server = "http://localhost:3000/reviews";

searchForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    let title = input.value.split(" ").join('+');
    let URL = `https://www.omdbapi.com/?t=${title}&apikey=821e1418`;

    document.querySelector('.info-div').classList.remove('hidden');

    getData(URL);
    videoSearch(API_KEY, title, 1);
    while (reviewsDiv.firstChild) {
        reviewsDiv.removeChild(reviewsDiv.firstChild);
    }
    getReviews(server);
}

function getData(URL) {
    fetch(URL)
    .then(data => data.json())
    .then(res => {
        h1.textContent = res.Title;
        modalTitle.textContent = `${res.Title} (${res.Year})`;
        img.src = res.Poster;
        h4.textContent = `Metascore: ${res.Metascore}`;
        p.textContent = res.Plot;
    })
}

function videoSearch(key, search, maxResults) {
    $.get("https://www.googleapis.com/youtube/v3/search?key=" + key
    + "&type=video&part=snippet&maxResults=" + maxResults + `&q=original+${search}+trailer`,function(data) {

        video = `<iframe width="420" height="315" src="http://www.youtube.com/embed/${data.items[0].id.videoId}" frameborder="0" allowfullscreen></iframe>`;

        let trailerDiv = document.getElementById("trailer");
        while (trailerDiv.firstChild) {
            trailerDiv.removeChild(trailerDiv.firstChild);
        }
        $("#trailer").append(video);
    })
}

function generateReview(author, comment, rating) {
    let p = document.createElement("p");
    let i = document.createElement("i");
    let ratingScore = document.createElement("p");
    p.textContent = `"${comment}"`;
    i.textContent = `-${author}`;
    ratingScore.textContent = `Rating: ${rating}`;
    reviewsDiv.appendChild(p);
    p.appendChild(i);
    reviewsDiv.appendChild(ratingScore);
}

function getReviews(server) {
    fetch(server)
    .then(data => data.json())
    .then(res => {
        res.forEach(element => {
            generateReview(element.author, element.comment, element.rating);
        });
        
    })
}



reviewForm.addEventListener("submit", submitReview);

function submitReview(event) {
    event.preventDefault();

    generateReview(author.value, textArea.value, ratingSelect.value);

}