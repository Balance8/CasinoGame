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
// let lookUp = {
//     img : 'url(https://i.imgur.com/kaplStJ.png?1)',
//     img :'url(https://i.imgur.com/RhzsyjQ.png?1)',
//     img :'url(https://i.imgur.com/CqE49go.png?1)',
//     img :'url(https://i.imgur.com/XMa4iXa.png?1)',
//     img :'url(https://i.imgur.com/TI5SSsk.png?1)',
//     img :'url(https://i.imgur.com/rBNop6u.png?1)',
//     img :'url(https://i.imgur.com/LKeUpuS.png?1)',
//     img :'url(https://i.imgur.com/PpypyvQ.png?1)',
//     img :'url(https://i.imgur.com/qeywvYS.png?1)'

// }
let lookUp = [
    'url(https://i.imgur.com/kaplStJ.png?1)',
    'url(https://i.imgur.com/RhzsyjQ.png?1)',
    'url(https://i.imgur.com/CqE49go.png?1)',
    'url(https://i.imgur.com/XMa4iXa.png?1)',
    'url(https://i.imgur.com/TI5SSsk.png?1)',
    'url(https://i.imgur.com/rBNop6u.png?1)',
    'url(https://i.imgur.com/LKeUpuS.png?1)',
    'url(https://i.imgur.com/PpypyvQ.png?1)',
    'url(https://i.imgur.com/qeywvYS.png?1)'

]

/*----- app's state (variables) -----*/
var board, winner

/*----- cached element references -----*/
var squares = document.querySelectorAll('div span');
/*----- event listeners -----*/
/*----- functions -----*/

$(".roll").click(function () {
    $('.square').css('background-image', 'url(https://i.imgur.com/D4jPibd.png?1)');
    $('.square').addClass('transform-active');
    $('.square').one('webkitAnimationEndoanimationend msAnimationEnd animationend', function (event) {
        $('.square').removeClass('transform-active')


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

function render() {
    let shuffledLookUp = lookUp.shuffle();
    board.forEach(function (sq, idx) {
        squares[idx].style.backgroundImage = shuffledLookUp[idx];

    });
}


function initialize() {
    board = new Array(9).fill(null);
    winner = null;
}

initialize();

function weight() {
    let weightA = [];
    for (let i = 0; i < n; i++) {
        weightA.push(lookUp[0])
    }
    return [...lookUp, ...weightA]
}


/* Rarity 
----------------


*/
