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

/*----- app's state (variables) -----*/
var board, winner, common, uncommon, rare, epic, weightedArray, weightVar
let totalPoints = [];
/*----- cached element references -----*/

var squares = document.querySelectorAll('div span');

/*----- event listeners -----*/

$(".roll").click(function () {
    $('.square').css('background-image', 'url(https://i.imgur.com/bpc6jlg.png?1)');
    $('.square').css('border', 'none');
    $('.square').addClass('transform-active');
    $('.square').one('webkitAnimationEndoanimationend msAnimationEnd animationend', function (event) {
        $('.square').removeClass('transform-active')
        $('.square').css('border', '2px solid #651248');



        render();



        // var idx = parseInt(evt.target.id.replace('pic', ''));
        // if (board[idx] || winner) return;
        // // update state (board, turn, winner)
        // board[idx] = ;
        // turn *= -1;
        // winner = getWinner();
        // // call render

    });
});

console.log(totalPoints);
/*----- functions -----*/



function render() {
    let shuffledArray = weightedArray.shuffle();
    board.forEach(function (sq, idx) {
        squares[idx].style.backgroundImage = shuffledArray[idx];

    });
}


function initialize() {
    board = new Array(9).fill(null);
    winner = null;
}

initialize();

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

weightVar = 0;
common = weightCommon(weightVar * 100+9);
uncommon = weightUncommon(weightVar * 50);
rare = weightRare(weightVar * 25);
epic = weightEpic(weightVar * 10);

weightedArray = common.concat(uncommon, rare, epic);
console.log(weightedArray);

/*----- Win Logic -----*/

function checkWinner(sq) {
    let arrayBImages = [];
    let sum1 = sum2 = sum3 = sum4 = sum5 = sum6 = sum7 = sum8 = sum9 = 0
    for (let i = 0; i < sq.length; i++) {
        arrayBImages.push(sq[i].style.backgroundImage);
    }
    for (let i = 0; i < arrayBImages.length; i++) {
        arrayBImages[0] === arrayBImages[i] ? sum1++ :
            arrayBImages[1] === arrayBImages[i] ? sum2++ :
                arrayBImages[2] === arrayBImages[i] ? sum3++ :
                    arrayBImages[3] === arrayBImages[i] ? sum4++ :
                        arrayBImages[4] === arrayBImages[i] ? sum5++ :
                            arrayBImages[5] === arrayBImages[i] ? sum6++ :
                                arrayBImages[6] === arrayBImages[i] ? sum7++ :
                                    arrayBImages[7] === arrayBImages[i] ? sum8++ :
                                        arrayBImages[8] === arrayBImages[i] ? sum9++ : "";
    }
    sum1 > 3 ? checkLocation(arrayBImages) : "";
    sum2 > 3 ? checkLocation(arrayBImages) : "";
    sum3 > 3 ? checkLocation(arrayBImages) : "";
    sum4 > 3 ? checkLocation(arrayBImages) : "";
    sum5 > 3 ? checkLocation(arrayBImages) : "";
    sum6 > 3 ? checkLocation(arrayBImages) : "";
    sum7 > 3 ? checkLocation(arrayBImages) : "";
    sum8 > 3 ? checkLocation(arrayBImages) : "";
    sum9 > 3 ? checkLocation(arrayBImages) : "";
    // for (let i = 1; i < arrayBImages.length; i++) {
    //         arrayBImages[1] === arrayBImages[i] ? sum2++ : "";
    // }
    // return arrayBImages;
    return console.log(sum1, sum2, sum3, sum4, sum5, sum6, sum7, sum8, sum9);
    // div1.style.backgroundImage === div2.style.backgroundImage;
}

function checkLocation(arr) {
    var totalTempPoints = null;
    var pointVal = null;
    // console.log(arr[0]);
    // console.log(lookUp[0]);

    // console.log(arr[0].toString());

    for (let i = 0; i < arr.length; i++) {
        arr[0] === lookUp[i] ? pointVal = 3 :
            arr[1] === lookUp[i] ? pointVal = 10 :
                arr[2] === lookUp[i] ? pointVal = 10 :
                    arr[3] === lookUp[i] ? pointVal = 10 :
                        arr[4] === lookUp[i] ? pointVal = 10 :
                            arr[5] === lookUp[i] ? pointVal = 10 :
                                arr[6] === lookUp[i] ? pointVal = 10 :
                                    arr[7] === lookUp[i] ? pointVal = 10 :
                                        arr[8] === lookUp[i] ? pointVal = 10 : console.log('test');
    }



    arr[0] === arr[1] && arr[1] === arr[2] ? totalTempPoints += pointVal : console.log('lose');
    arr[3] === arr[4] && arr[4] === arr[5] ? totalTempPoints += pointVal : console.log('lose');
    arr[6] === arr[7] && arr[7] === arr[8] ? totalTempPoints += pointVal : console.log('lose');
    arr[0] === arr[4] && arr[4] === arr[8] ? totalTempPoints += pointVal : console.log('lose');
    arr[6] === arr[4] && arr[4] === arr[2] ? totalTempPoints += pointVal : console.log('lose');
    arr[0] === arr[3] && arr[3] === arr[6] ? totalTempPoints += pointVal : console.log('lose');
    arr[1] === arr[4] && arr[4] === arr[7] ? totalTempPoints += pointVal : console.log('lose');
    arr[2] === arr[5] && arr[5] === arr[8] ? totalTempPoints += pointVal : console.log('lose');

    return totalPoints.push(totalTempPoints);
}
// console.log(squares[0].style.backgroundImage);
// console.log(squares[1].style.backgroundImage);

// console.log(checkWinner(squares));



/*----- app's state (variables) -----*/