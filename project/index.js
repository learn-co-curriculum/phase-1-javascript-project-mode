// const URL = 'https://www.omdbapi.com/?t=Forrest+Gump&apikey=821e1418'
const form = document.querySelector('form');
const h1 = document.querySelector('h1');
const h4 = document.querySelector('h4');
const img = document.querySelector('img');
const p = document.querySelector('p');
const input = document.querySelector('input');

const API_KEY = "AIzaSyBm7sixhbthLt-WlpG_XLY4X9CYwQ63tQc";
let video = "";

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    let title = input.value.split(" ").join('+');
    let URL = `https://www.omdbapi.com/?t=${title}&apikey=821e1418`;

    document.querySelector('.image-div').classList.remove('hidden');

    getData(URL);
    videoSearch(API_KEY, title, 1);
}

function getData(URL) {
    fetch(URL)
    .then(data => data.json())
    .then(res => {
        h1.textContent = res.Title;
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