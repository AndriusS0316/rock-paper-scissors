
let pc = 0;
let randomm = 0;

let pcNumberr = 0;      // pcNumberr = pcNumberr + 1; pcNumber.InnerText = pcNumberr;
let yourNumberr = 0;    // yourNumberr = yourNumberr + 1; yourNumber.InnerText = yourNumberr;
let drawNumberr = 0;    // drawNumberr = drawNumberr + 1; drawNumber.InnerText = drawNumberr;


// 1 - rock; 2 - paper; 3 - scissors


const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const rezultatas = document.querySelector('.rezultatas');

const random = document.querySelector('.random');

const pcNumber = document.querySelector('.pcNumber');
const yourNumber = document.querySelector('.yourNumber');
const drawNumber = document.querySelector('.drawNumber');



pcNumber.InnerText = pcNumberr; 
yourNumber.InnerText = yourNumberr; 
drawNumber.InnerText = drawNumberr; 


{ document.querySelector(".pc").style.display = "none"; }
{ document.querySelector(".you").style.display = "none"; }
{ document.querySelector(".loading").style.display = "none"; }



var imgPC = document.querySelector(".pc");
var imgYOU = document.querySelector(".you");


// pcNumber.InnerText = 


function rockClick() {
    randomm = 1;
    pc = (Math.floor(Math.random() * 3) + 1);

    rezultatas.innerText = '';
    { document.querySelector(".loading").style.display = "block"; }
    { document.querySelector(".pc").style.display = "none"; }
    { document.querySelector(".you").style.display = "none"; }

    setTimeout(function () {
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

        { document.querySelector(".loading").style.display = "none"; }
    }, 500);
}

function paperClick() {
    randomm = 2;
    pc = (Math.floor(Math.random() * 3) + 1);

    rezultatas.innerText = '';
    { document.querySelector(".loading").style.display = "block"; }
    { document.querySelector(".pc").style.display = "none"; }
    { document.querySelector(".you").style.display = "none"; }

    setTimeout(function () {
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

        { document.querySelector(".loading").style.display = "none"; }
    }, 500);
}

function scissorsClick() {
    randomm = 3;
    pc = (Math.floor(Math.random() * 3) + 1);

    rezultatas.innerText = '';
    { document.querySelector(".loading").style.display = "block"; }
    { document.querySelector(".pc").style.display = "none"; }
    { document.querySelector(".you").style.display = "none"; }

    setTimeout(function () {
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

        { document.querySelector(".loading").style.display = "none"; }
    }, 500);
}

function randomClick() {
    randomm = (Math.floor(Math.random() * 3) + 1);
    pc = (Math.floor(Math.random() * 3) + 1);

    rezultatas.innerText = '';
    { document.querySelector(".loading").style.display = "block"; }
    { document.querySelector(".pc").style.display = "none"; }
    { document.querySelector(".you").style.display = "none"; }

    setTimeout(function () {
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
            drawNumberr = drawNumberr + 1; 
            drawNumber.InnerText = drawNumberr;
        } else if (pc === 1 && randomm === 2) {
            rezultatas.innerText = "you win";
            yourNumberr = yourNumberr + 1; 
            yourNumber.InnerText = yourNumberr;
        } else if (pc === 1 && randomm === 3) {
            rezultatas.innerText = "pc win";
            pcNumberr = pcNumberr + 1; 
            pcNumber.InnerText = pcNumberr;
        } else if (pc === 2 && randomm === 1) {
            rezultatas.innerText = "pc win";
            pcNumberr = pcNumberr + 1; 
            pcNumber.InnerText = pcNumberr;
        } else if (pc === 2 && randomm === 2) {
            rezultatas.innerText = "draw";
            drawNumberr = drawNumberr + 1; 
            drawNumber.InnerText = drawNumberr;
        } else if (pc === 2 && randomm === 3) {
            rezultatas.innerText = "you win";
            yourNumberr = yourNumberr + 1; 
            yourNumber.InnerText = yourNumberr;
        } else if (pc === 3 && randomm === 1) {
            rezultatas.innerText = "you win";
            yourNumberr = yourNumberr + 1; 
            yourNumber.InnerText = yourNumberr;
        } else if (pc === 3 && randomm === 2) {
            rezultatas.innerText = "pc win";
            pcNumberr = pcNumberr + 1; 
            pcNumber.InnerText = pcNumberr;
        } else if (pc === 3 && randomm === 3) {
            rezultatas.innerText = "draw";
            drawNumberr = drawNumberr + 1; 
            drawNumber.InnerText = drawNumberr;
            console.log("draw");
        }

        { document.querySelector(".pc").style.display = "block"; }
        { document.querySelector(".you").style.display = "block"; }

        { document.querySelector(".loading").style.display = "none"; }
    }, 500);


}

// 1 - rock; 2 - paper; 3 - scissors


rock.addEventListener('click', rockClick);

paper.addEventListener('click', paperClick);

scissors.addEventListener('click', scissorsClick);

random.addEventListener('click', randomClick);