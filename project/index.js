// const URL = 'https://www.omdbapi.com/?t=Forrest+Gump&apikey=821e1418'
const form = document.querySelector('form');
const h1 = document.querySelector('h1');
const img = document.querySelector('img');
const input = document.querySelector('input');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    let title = input.value.split(" ").join('+');
    let URL = `https://www.omdbapi.com/?t=${title}&apikey=821e1418`;

    document.querySelector('.image-div').classList.remove('hidden');

    getData(URL);
}

function getData(URL) {
    fetch(URL)
    .then(data => data.json())
    .then(res => {
        h1.textContent = res.Title
        img.src = res.Poster;
    })
}