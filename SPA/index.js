const url = 'http://brianeno.needsyourhelp.org/draw'

const cardText = document.getElementById('card-text'),
        userData = document.getElementById('user-data'),
        genCardBtn = document.getElementById('card-btn'),
        userBtn = document.getElementById('user-btn'),
        saveBtn = document.getElementById('save-btn');

function randomCard() {
    fetch(url)
    .then(r => r.json())
    .then(data => {
        cardText.textContent = data.strategy;
    });
}

//RandomCard();
genCardBtn.addEventListener('click', randomCard)

function newDilemma() {
    let user  = document.getElementById("text-box").value;
    if (user != null) {
       randomCard()
       clearText()
    }
}

function clearText() {
    document.getElementById('user-text').value = "";
    document.getElementById('card-text').innerText = "";
}


function learnMore() {
    window.open('http://music.hyperreal.org/artists/brian_eno/osfaq2.html', '_blank')
}

//next to "draw card", save dilemma & strategy response
//error if no input

function checkInput() {
    if (document.getElementById("user-text").value === "" )
    {
        document.getElementById("user-text").value = errorMessage()
    }
    else randomCard()
}

function errorMessage() {
    window.alert("A dilemma must be entered. Try again.")
    return document.getElementById("user-text").value
}

function getInput() {
    let userInput = document.getElementById('user-text').value
    let cardStrategy = document.getElementById('card-text').innerText
    return (`DILEMMA: ${userInput} \n
    STRATEGY: ${cardStrategy}`)
}  

saveBtn.addEventListener('click', getInput, false);

function displayData() {
    Array.prototype.forEach.call
    let data = []
    userData.innerHTML = getInput()
    return data
}