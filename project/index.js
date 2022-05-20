const URL = "https://www.omdbapi.com/?t=Forrest+Gump&apikey=821e1418"
const trailer = "https://www.youtube.com/watch?v=6hDkhw5Wkas"

fetch(trailer)
.then(resp => resp.json())
.then( (data) => console.log(data.title) );