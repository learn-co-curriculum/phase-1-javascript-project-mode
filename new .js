document.addEventListener("DOMContentLoaded", function () {
    getCharacters()
  });
   function getCharacters(){
      fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        displayCharacters(data)
      });
  };
  function displayCharacters(data){
    const characterList = document.querySelector("#characters");
    characterList.innerHTML ="";

    data.forEach((character, index) => {
      const characterEl = document.createElement("div");
      characterEl.innerHTML =`
        <h4><span id="number">${index + 1}</span>. Name: ${character.name}</h4>
        <img src="${character.image}">
        <p>Status: ${character.status}</p>
        <p>Species: ${character.species}</p>
        <p>Gender: ${character.gender}</p>
        <p>Location: ${character.location.name}</p>
        <p>Origin: ${character.origin.name}</p>
        `;
    characterList.appendChild(characterEl);
    })
  }
  document.addEventListener("click", function (){
    addComment() 
  })


  document.addEventListener("click", function (){
    addComment() 
  });
function addComment(){
    const commentInput = document.getElementById("commentSection");
    const commentText = commentInput.value.trim();
    commentInput.value = "";
  
  if (commentText !== ""){
  const commentContainer = document.querySelector("#commentContainer");

  const commentElement = document.createElement("p");
    commentElement.textContent = commentText;
    commentContainer.appendChild(commentElement);
    
  }};

const likeButton = document.querySelector(".material-symbols-outlined");
const likeCount = document.querySelector(".likeCount");
let count = 0;

likeButton.addEventListener("click", () => {
  count++;
  likeCount.innerText = count;
});

document.querySelector(".material-symbols-outlined").addEventListener("click", function (){
  const loveButton = document.querySelector(".material-symbols-outlined");
  loveButton.classList.toggle("liked");
});