
let pc = 0;
let randomm = 0;


// 1 - rock; 2 - paper; 3 - scissors


const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const rezultatas = document.querySelector('.rezultatas');

const random = document.querySelector('.random');



// rezultatas.innerText 


{ document.querySelector(".pc").style.display = "none"; }
{ document.querySelector(".you").style.display = "none"; }
{ document.querySelector(".loading").style.display = "none"; }



var imgPC = document.querySelector(".pc");
var imgYOU = document.querySelector(".you");



function rockClick() {

}

function paperClick() {

}

function scissorsClick() {

}

function randomClick() {
    randomm = (Math.floor(Math.random() * 3) + 1);
    pc = (Math.floor(Math.random() * 3) + 1);

    if (randomm === 1) {
        imgYOU = document.querySelector(".you");
        imgYOU.src = "./pic/rock.png";
        imgYOU.height = 200;
    } else if (randomm === 2) {
        imgYOU = document.querySelector(".you");
        imgYOU.src = "./pic/paper.png";
        imgYOU.height = 200;
    } else if (randomm === 3) {
        imgYOU = document.querySelector(".you");
        imgYOU.src = "./pic/scissors.png";
        imgYOU.height = 200;
    }

    if (pc === 1) {
        imgPC = document.querySelector(".pc");
        imgPC.src = "./pic/pc/rockPC.png";
        imgPC.height = 200;
    } else if (pc === 2) {
        imgPC = document.querySelector(".pc");
        imgPC.src = "./pic/pc/paperPC.png";
        imgPC.height = 200;
    } else if (pc === 3) {
        imgPC = document.querySelector(".pc");
        imgPC.src = "./pic/pc/scissorsPC.png";
        imgPC.height = 200;
    }

    if (pc === 1 && randomm === 1) {
        rezultatas.innerText = "draw";
    } else if (pc === 1 && randomm === 2) {
        rezultatas.innerText = "you win";
    } else if (pc === 1 && randomm === 3) {
        rezultatas.innerText = "pc win";
    } else if (pc === 2 && randomm === 1) {
        rezultatas.innerText = "pc win";
    } else if (pc === 2 && randomm === 2) {
        rezultatas.innerText = "draw";
    } else if (pc === 2 && randomm === 3) {
        rezultatas.innerText = "you win";
    } else if (pc === 3 && randomm === 1) {
        rezultatas.innerText = "you win";
    } else if (pc === 3 && randomm === 2) {
        rezultatas.innerText = "pc win";
    } else if (pc === 3 && randomm === 3) {
        rezultatas.innerText = "draw";
    }

    { document.querySelector(".pc").style.display = "block"; }
    { document.querySelector(".you").style.display = "block"; }
}

// 1 - rock; 2 - paper; 3 - scissors


rock.addEventListener('click', rockClick);

paper.addEventListener('click', paperClick);

scissors.addEventListener('click', scissorsClick);

random.addEventListener('click', randomClick);