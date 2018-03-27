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
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/

$(".roll").click(function () {
    $('.square').toggleClass('transform-active');
});

var time = Math.random();
var red = document.querySelectorall('#red');
red.style.setProperty('--animation-time', time + 's');