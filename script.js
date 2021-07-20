const indexBody = document.querySelector('body');

document.addEventListener("DOMContentLoaded", () =>  {
    
    const reloadButton = document.querySelector('#reload-joke-button')
    reloadButton.addEventListener('click', (e) => {
        e.preventDefault()
        getDadJoke()
    } )

    const getDadJoke = ()=> {
        let allJokes = []

        fetch("http://localhost:3000/jokes")
        .then(data => data.json())
        .then(response => displayData(response))


    }
})

       // const jokePTag = document.querySelector(`#joke`)

const newJoke = document.querySelector('#New-Joke')
const likedJokes = document.querySelector('#Number-of-Likes')
const likeButton = document.querySelector('#like-joke-button')

function displayData(allJokes){
    let dynamicJokes = Math.floor(Math.random() * 5);
        
        newJoke.innerHTML=allJokes[dynamicJokes].text
        likedJokes.innerHTML=allJokes[dynamicJokes].likes

        likeButton.addEventListener('click', (e) => {
            e.preventDefault()
            likeButtonFunction(allJokes[dynamicJokes])
        } )
}


function likeButtonFunction(joke){
  console.log(joke.likes+=1 )
  likedJokes.innerHTML=joke.likes+1
}

// function createNewUser(userName){
//     console.log('dont exist so we here')
//     let newUser = {
//         name: userName,
//         // image: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cGljdHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
//     }
//     let reqPackage = {
//         headers: {'content-type': 'application/json'},
//         method: 'POST',
//         body: JSON.stringify(newUser)
//     }
//     console.log('we are about to create you')
//     fetch(BASE_URL, reqPackage)
//     .then(res => res.json())
//     .then(res => renderUser(res))
// }

// function saveJoke() {
//     if (!likedJokes.includes(currentJoke)) {
//       likedJokes.push(currentJoke)
//       const li = document.createElement('li')
//       li.innerText = currentJoke.joke
//       likedJokesContainer.append(li)
//       li.addEventListener('click', event => unlikeJoke(event))
//     } else {
//       alert('You already have that joke!')
//     }
//   }