const url = 'http://brianeno.needsyourhelp.org/draw'

const cardText = document.getElementById('card-text'),
        userText = document.getElementById('user-text'),
        userData = document.getElementById('user-data'),
        genCardBtn = document.getElementById('card-btn'),
        clearBtn = document.getElementById('clear-user'),
        userBtn = document.getElementById('user-btn'),
        saveBtn = document.getElementById('save-btn');

let dataStore = []

function randomCard() {
    fetch(url)
    .then(r => r.json())
    .then(data => {
        cardText.textContent = data.strategy;
    });
}

genCardBtn.addEventListener('click', randomCard)
clearBtn.addEventListener('click', clearUser)
saveBtn.addEventListener('click', saveData, false);


function clearText() {
    userText.value = "";
    cardText.innerText = "";
}

function clearUser() {
    userData.innerHTML = "";
    sessionStorage.clear();
}

function learnMore() {
    window.open('http://music.hyperreal.org/artists/brian_eno/osfaq2.html', '_blank')
}

function checkInput() {
    if (userText.value === "" )
    {
        userText.value = errorMessage()
    }
    else randomCard()
}

function errorMessage() {
    window.alert("A dilemma must be entered. Try again.")
    return userText.value
}

let user = new Array();
    strategy = new Array();

function saveData() {
    let userDilemma = userText.value;
    let userStrategy = cardText.innerText;
    user[user.length] = userDilemma;
    strategy[strategy.length] = userStrategy;
    displayData();
}
    
function displayData(){
    let data = ("<b>Dilemma : Strategy</b></br>");
    for(let i = 0; i < user.length; i++) {
        data +=user[i]+"&nbsp<b>:</b>&nbsp";
    }
    for(let i = 0; i < strategy.length; i++) {
        data += strategy[i]+"<br>";
    }
    userData.innerHTML = data;
}

/*function saveData() {
    newPair = {dilemma: userText.value, strategy: cardText.innerText};
    dataStore = [...dataStore, newPair];
    console.log(newPair);
    displayData();
}

/*function displayData() {
    userData.innerHTML = (console.log(dataStore));
}*/

/*function saveData() {
    let dilemmaDilemma = userText.value;
    let userStrategy = cardText.innerText;
    dilemma[dilemma.length] = dilemmaDilemma;
    strategy[strategy.length] = userStrategy;
    displayData();
}

function displayData(){
    let data = ("<b>Dilemma : Strategy</b></br>");
    for(let i = 0; i < dilemma.length; i++) {
        data +=dilemma[i]+"&nbsp<b>:</b>&nbsp";
    }
    for(let i = 0; i < strategy.length; i++) {
        data += strategy[i]+"<br>";
    }
    userData.innerHTML = data
}*/