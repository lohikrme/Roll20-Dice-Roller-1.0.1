# Roll20-Dice-Roller-1.0.1
To automatize rolling dice in roll20.net.


Hello! This is my Roll20 Dice Roller version 1.0.1.

I am lohikrme from github, here is my account: https://github.com/lohikrme

All rights reserved. For personal use only.



How to use it?:

So, this program requires user to copy the javascript code, open F12 browser inspector, and there create a snippet. Paste all content into the snipper, and give it a descriptive name, and end the name with the tag ".js". After that open the roll20.net website, there gaming area, and after that simply press the "run" button for the snipper. The snippet will therefore be saved inside your browser, you do not need to create the snipper but once. But always when u reopen roll20.net you need to again activate it by pressing F12 and there button "run". This is an automatic system where browser turns off all snippets after session is over.


What does it do?:

This snippet replaces the "move mouse to right down and click the chatting area -> write /roll 2d6 -> press enter -> move mouse back to map" process, and allows user to simply press a number key between 1 and 9, and the pc will do all that for you! 


Is it safe?:

There is only about 100 lines of code. The snippet does not modify the website anyhow. Everyone can see what the code does. It does not share data to anywhere or even collect data. It simply creates a macro for keyboard keys that works only on that specific website by reading the website html code's classes and ids. There is maybe 0.000000001% chance that some other website would have a chatting area with exact same class and id, but in that case worst what would happen is you would write to that chat box "/roll 4d6". The snippet can be easily deactivated or deleted, and it will also deactivate itself everytime the browser is turned off from X.
