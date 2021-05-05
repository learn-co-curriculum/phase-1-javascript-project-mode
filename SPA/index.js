
const url = 'http://brianeno.needsyourhelp.org/draw'

const cardText = document.getElementById('card-text'),
        genCardBtn = document.getElementById('card-btn'),
        userBtn = document.getElementById('user-btn');

async function randomCard(){
    fetch(url)
    .then(r => r.json())
    .then(data => {
        cardText.textContent = data.strategy;
    });
}

randomCard();
genCardBtn.addEventListener('click', () => {
    randomCard();
});

newDilemma();
userBtn.addEventListener('click'), () => {
    randomCard();
}

 
function newDilemma() {
    let user  = document.getElementById("text-box").value;
    if (user != null) {
       randomCard()
       clearInput()
    }
}

function clearText() {
    document.getElementById('user-text').value = "";
} 
  
function learnMore() {
    window.open('http://music.hyperreal.org/artists/brian_eno/osfaq2.html', '_blank')
}