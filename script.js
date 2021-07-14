const indexBody = document.querySelector('body');
indexBody.innerHTML = '<h1> Funny Haha Dad Jokes! </h1>'

document.addEventListener("DOMContentLoaded", () =>  {
    fetch("http://localhost:3000/jokes")
        .then(function (res) {
            return res.json();
        }) 
        .then(function (jokes) {
            allJokes = jokes;
            indexBody.innerHTML=""
            allJokes.forEach((joke) =>{
                console.log(joke)
                const h2 = document.createElement("h2");
                h2.innerText = joke.text;
                indexBody.append(h2)
            });
        })
        })

        
