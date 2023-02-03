
/* ----------Roll20 Dice Roller 1.0.1---------- */
/* Hello! I hope  you will enjoy this script I wrote for roll20.net to automatize rolling dices.
So, whenever an user presses a number between 1-9 in his keyboard, this script will automatically do next:
first left-clicks the chat in roll20 gaming website, then writes "/roll xd6" and then presses enter. 
Imagine rolling the dice 300 times in a single game - this script will save u about 300 clicks and 2700 keys.

I wrote this script 25.12.2022 - 5.1.2023. 

For personal use only. All rights reserved. 





/* ----------The Structure of This Code---------- */
/* First this code creates variables using roll20.net chatbox' ID and class, which allows making inputs with code. 
Second, the code also creates an EventListener, which reads user keyboard, and sends forward to KeyUpHandler function
information about pressed keys (the information is in form of keyCodes). KeyUpHandler function compares pressed keys to
keyCode values 49 to 57, and if there is a match, it activates a suitable Rollxd6 function. (Note that in keyCodes 1 = 49, 2 = 50, etc).
Rollxd6 functions will write the input (such as /roll 2d6) into the chatbox and then click the send-button. */



/* ----------Basic Variables and the EventListener---------- */
/* querySelector creates a variable of html classes and identities. var textarea and var send_button are 
the html elements found in the chatbox - the writing area and the send-button. 
There is also an EventListener, which sends information about keyboard activity for KeyUpHandler function. 
Note that it is "keyup", which means that it works only on release of a key. */

var textarea = document.querySelector("#textchat-input .ui-autocomplete-input")
var send_button = document.querySelector("#textchat-input .btn")
window.addEventListener("keyup", KeyUpHandler, false)



/* ----------KeyUpHandler function---------- */
/* KeyUpHandler function reads the event from window.addEventListener method. This EventListener allows this function to know 
when an user has pressed a key between 1 and 9, by comparing received keyCodes. All keyboards have the same keyCodes, 
so when an user presses 1, he actually presses keyCode 49, and so on, until keyCode 57 / key 9. 
So, this function receives information from the event from EventListener, and then when keyCode is between 49 and 57,
this function will activate a suitable Rollxd6 function matching with the pressed key. */

function KeyUpHandler (event) {

    console.log(event)

    /* User presses key 1 */
    if (event.keyCode === 49) {
        Roll1D6()
    }

    /* User presses key 2 */
    else if (event.keyCode === 50) {
        Roll2D6()
    }

    /* User presses key 3 */
    else if (event.keyCode === 51) {
        Roll3D6()
    }

    /* User presses key 4 */
    else if (event.keyCode === 52) {
        Roll4D6()
    }

    /* User presses key 5 */
    else if (event.keyCode === 53) {
        Roll5D6()
    }

    /* User presses key 6 */
    else if (event.keyCode === 54) {
        Roll6D6()
    }

    /* User presses key 7 */
    else if (event.keyCode === 55) {
        Roll7D6()
    }

    /* User presses key 8 */
    else if (event.keyCode === 56) {
        Roll8D6()
    }

    /* User presses key 9 */
    else if (event.keyCode === 57) {
        Roll9D6()
    }

}



/* ----------RollxD6 functions---------- */
/* These functions are activated if an user presses a keyboard number between 1 and 9. After activation, this function
will first click the textarea, then write "/roll xd6", and then clicks the sending-button. */

/* roll 1d6 */
function Roll1D6() {
    textarea.value = "/roll 1d6"
    send_button.click()
}

/* roll 2d6 */
function Roll2D6() {
    textarea.value = "/roll 2d6"
    send_button.click()
}

/* roll 3d6 */
function Roll3D6() {
    textarea.value = "/roll 3d6"
    send_button.click()
}

/* roll 4d6 */
function Roll4D6() {
    textarea.value = "/roll 4d6"
    send_button.click()
}

/* roll 5d6 */
function Roll5D6() {
    textarea.value = "/roll 5d6"
    send_button.click()
}

/* roll 6d6 */
function Roll6D6() {
    textarea.value = "/roll 6d6"
    send_button.click()
}

/* roll 7d6 */
function Roll7D6() {
    textarea.value = "/roll 7d6"
    send_button.click()
}

/* roll 8d6 */
function Roll8D6() {
    textarea.value = "/roll 8d6"
    send_button.click()
}

/* roll 9d6 */
function Roll9D6() {
    textarea.value = "/roll 9d6"
    send_button.click()
}
