/*
1. Code button to execute the run code
2. Run code will execute a random number generator on the array of key/pairs.
    a. Once random finishes, push into game board.
    b. The object key location will corrolate with a picture value.
3. Arrange the picture components in their correct locations.
4. Write logic that will understand all predetermined winning conditions and will out put whether those conditions have been met
5. if conditions have been met out put how much has been won, based on the pre determined value of the win conditions.
6. store that value in the money earned section
7. Keep stored value for the length of the window session
8. Restart game board when button is pressed again, re-execute code.

IceBox
-----------------------------------------
9. Write a bad luck protection segment
    a. This segment will count up +1 every time the user doesnt win
    b. will reset everytime there is a win
    c. if the counter reaches x value the next press will result in a winning condition
*/

/* 0 poro, 1 PENGU, 2 ahri , 3 jinx , 4 tahm, , 5 lux , 6 raka, 7 gnar, 8 teemo

/*----- constants -----*/
let lookUp = [
    'url("https://i.imgur.com/kaplStJ.png?1")',
    'url("https://i.imgur.com/RhzsyjQ.png?1")',
    'url("https://i.imgur.com/CqE49go.png?1")',
    'url("https://i.imgur.com/XMa4iXa.png?1")',
    'url("https://i.imgur.com/TI5SSsk.png?1")',
    'url("https://i.imgur.com/rBNop6u.png?1")',
    'url("https://i.imgur.com/LKeUpuS.png?1")',
    'url("https://i.imgur.com/PpypyvQ.png?1")',
    'url("https://i.imgur.com/qeywvYS.png?1")'
]

let pointLookup = {
    'url("https://i.imgur.com/kaplStJ.png?1")': 5,
    'url("https://i.imgur.com/RhzsyjQ.png?1")': 5,
    'url("https://i.imgur.com/CqE49go.png?1")': 20,
    'url("https://i.imgur.com/XMa4iXa.png?1")': 20,
    'url("https://i.imgur.com/TI5SSsk.png?1")': 20,
    'url("https://i.imgur.com/rBNop6u.png?1")': 30,
    'url("https://i.imgur.com/LKeUpuS.png?1")': 30,
    'url("https://i.imgur.com/PpypyvQ.png?1")': 100,
    'url("https://i.imgur.com/qeywvYS.png?1")': 100
};

/*----- app's state (variables) -----*/
var healthPoints, shuffledArray;
var board, winner, common, uncommon, rare, epic, weightedArray, weightVar
let totalPoints = [];
/*----- cached element references -----*/

var squares = document.querySelectorAll('div span');
var health = document.querySelector('header h3');

/*----- event listeners -----*/


$(".roll").click(function () {
    if (healthPoints <= 0) {
        health.innerHTML = 'You Died!';
        return;
    }
    healthPoints -= 5;
    $('.square').css('background-image', 'url(https://i.imgur.com/bpc6jlg.png?1)');
    $('.square').css('border', 'none');
    $('.square').addClass('transform-active');
    $('.square').one('webkitAnimationEndoanimationend msAnimationEnd animationend', function (event) {
        $('.square').removeClass('transform-active')
        $('.square').css('border', '2px solid #651248');
    });
    setTimeout(function () {
        shuffledArray = weightedArray.shuffle();
        board.forEach(function (sq, idx) {
            squares[idx].style.backgroundImage = shuffledArray[idx];
        });
        checkWinner(squares);
        render();
    }, 2100);
});

/*----- functions -----*/


function render() {
    health.innerHTML = healthPoints;
}

function initialize() {
    board = new Array(9).fill(null);
    winner = null;
    healthPoints = 100;
    render();
}

function weightCommon(n) {
    let weightA = [];
    for (let i = 0; i < n; i++) {
        weightA.push(lookUp[0])
        weightA.push(lookUp[1])

    }
    return weightA
}
function weightUncommon(n) {
    let weightA = [];
    for (let i = 0; i < n; i++) {

        weightA.push(lookUp[2])
        weightA.push(lookUp[3])
        weightA.push(lookUp[4])

    }
    return weightA
}
function weightRare(n) {
    let weightA = [];
    for (let i = 0; i < n; i++) {
        weightA.push(lookUp[5])
        weightA.push(lookUp[6])
    }
    return weightA
}
function weightEpic(n) {
    let weightA = [];
    for (let i = 0; i < n; i++) {
        weightA.push(lookUp[7])
        weightA.push(lookUp[8])
    }
    return weightA
}




/*----- Rarity -----*/

weightVar = 5;
common = weightCommon(weightVar * 100 + 9);
uncommon = weightUncommon(weightVar * 50);
rare = weightRare(weightVar * 25);
epic = weightEpic(weightVar * 10);

weightedArray = common.concat(uncommon, rare, epic);
console.log(weightedArray);

/*----- Win Logic -----*/

function checkWinner(sq) {
    let arrayBImages = [];
    for (let i = 0; i < sq.length; i++) {
        arrayBImages.push(sq[i].style.backgroundImage);
    }

    healthPoints += checkLocation(arrayBImages);
}

function checkLocation(arr) {
    var totalTempPoints = 0;
    var pointVal = 0;

   
    if (arr[0] === arr[1] && arr[1] === arr[2] && arr[0] === arr[2]) totalTempPoints += pointLookup[arr[0]];
    if (arr[3] === arr[4] && arr[4] === arr[5] && arr[3] === arr[5]) totalTempPoints += pointLookup[arr[3]];
    if (arr[6] === arr[7] && arr[7] === arr[8] && arr[6] === arr[8]) totalTempPoints += pointLookup[arr[6]];
    if (arr[0] === arr[4] && arr[4] === arr[8] && arr[0] === arr[8]) totalTempPoints += pointLookup[arr[0]];
    if (arr[6] === arr[4] && arr[4] === arr[2] && arr[6] === arr[2]) totalTempPoints += pointLookup[arr[6]];
    if (arr[0] === arr[3] && arr[3] === arr[6] && arr[0] === arr[6]) totalTempPoints += pointLookup[arr[0]];
    if (arr[1] === arr[4] && arr[4] === arr[7] && arr[1] === arr[7]) totalTempPoints += pointLookup[arr[1]];
    if (arr[2] === arr[5] && arr[5] === arr[8] && arr[2] === arr[8]) totalTempPoints += pointLookup[arr[2]];

    console.log(totalTempPoints);
    return totalTempPoints;
}

initialize();