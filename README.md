<img width="3225" height="2946" alt="image" src="https://github.com/user-attachments/assets/b9db61ba-eac4-4480-ac65-3bfcf8210775" />﻿﻿
# The Forgotten Forest - an Interactive Fantasy Adventure

![screenshot](https://github.com/Rob-C-89/the-forgotten-forest/blob/main/documentation/forgotten-forest-fullscreen.webp)

The Forgotten Forest is a game website, based on the classic fantasy gamebooks popular in the 1970’s.

“A gamebook is a work of printed fiction that allows the reader to participate in the story by making choices. The narrative branches along various paths, typically through the use of numbered paragraphs or pages. Each narrative typically does not follow paragraphs in a linear or ordered fashion. Gamebooks are sometimes called choose your own adventure books” - wikipedia.com

During my research, I encountered some gamebook website and templates online, which created a separate HTML page for each different step of the adventure, much like a physical book. I have built my website using javaScript objects for the different ‘book pages’, which I have called ‘scenarios’.

## Project Planning and Deployment

### Wireframe

![screenshot](https://github.com/Rob-C-89/the-forgotten-forest/blob/main/documentation/wireframe.png)

The website will have a very simple layout:

-a header with title, logo and description.
-a main game content container, with HTML to be loaded with JavaScript
-an audio player
-background image on the body

### User Stories and Project Planning

The user stories and project planning have been outlined in the projects folder of the repository. They can be found here:

https://github.com/users/Rob-C-89/projects/5



### Deployment

The website has been deployed to GitHub. The link to the website is as follows:

https://rob-c-89.github.io/the-forgotten-forest/




## User Experience

The target audience for this site is enthusiasts of classic gamebooks or associated genres i.e. fans of fantasy adventure, role-playing games, Dungeons and Dragons, etc.

The site is valuable to a user looking to play The Forgotten Forest game for entertainment.

At the core of the website is user interaction with text-based prompts and answers. The selection the user makes will take them to the next scenario. The flow of scenarios alters depending on these selections.






## Dice Roll

![screenshot](https://github.com/Rob-C-89/the-forgotten-forest/blob/main/documentation/dice-shot.webp)

Typical of the RPG genre is the use of dice. The player encounters some scenarios where clicking on a button will initiate a dice roll - a random number between one and six is returned. The success parameter is set by the scenario object. If the number is equal to or above this parameter, the ‘success’ scenario is returned. If the dice roll is less than the parameter, a ‘fail’ scenario is encountered. 

![screenshot](https://github.com/Rob-C-89/the-forgotten-forest/blob/main/documentation/dice-roll-shot.webp)


## Other Possible Game Mechanics

This project was built on a time limit of circa 32 hours, which includes research, debugging, documentation, etc. The writing of the scenario descriptions could be very time-consuming - some gamebooks have hundreds of pages. I decided to focus on creating the first ‘Chapter’ of the adventure.

If time had allowed, I would have liked to include:

- a health point (HP) system, where the game is lost once HP reaches zero
- an inventory, where ‘quest items’ accumulated affect future scenarios
- a ‘coin’ counter, where coins are accumulated and can be used in future scenarios
- character creation/customisation before beginning the adventure. These could include:
- creating a username
- selecting an avatar
- generating player stats which influence outcomes of scenarios i.e. affecting dice rolls, increasing default health, luck points to avoid negative outcomes, etc.

These are included in the GitHub project planner as ‘could-have’. Based on the time restrictions, inclusion of these mechanics was outside the scope of the project.


## Colour and Graphics Scheme

I chose to use a simple colour scheme of black and off-white for the text and container background. The gamebook websites I encountered during my research where all very minimalistic, with the focus instead on the game content.

Physical books might have illustrations for many or all of the pages, but I chose to focus on the JavaScript aspect of the project rather than spend too much time tracking down suitable open source images. 

I did however use a simple, cartoon-style forest background for the body of the website, to engage the user and reinforce the identity of the site. The wizard logo, generated with Google Gemini, also makes the nature of the site clearer to the user.

A dice image was used for the button to ‘roll dice’.


## Typography and Contrast

For the header, I used Libre Baskerville for it’s literary appearance. I used Roboto for the paragraph text. Since the user is reading reasonably large amounts of text, I chose ease of readability over anything too artistic - a calligraphy style might have given a striking appearance but been harder on the eyes.

Black text on off-white background returns an excellent contrast, chosen again for ease of readability.


## Features


### Homepage

The Forgotten Forest is a single page website, where javascript is used to load content in the DOM.


### Header

A header is displayed, with the name, description of the website, and a wizard logo to reinforce the fantasy identity of the site.


### Audio Player

An audio player is set to auto-play, on mute. It can be controlled by the user. The audio is an ambient forest background track taken from free-to-use website Epidemic Sound according to their terms of use.

![screenshot](https://github.com/Rob-C-89/the-forgotten-forest/blob/main/documentation/audio-shot.webp)


## Javascript

### Data Centre

An object titles gameScenarios holds a collection of objects, known as ‘scenarios’. All scenarios have a title and text to be loaded into the ‘scenario content’ div.

Most contain a ‘choices’ array. These are displayed as buttons with text, and contain the information on which will be the next scenario depending on the user’s selection.

Some scenarios have the “isEnding: true” property. This is utilised when the user has reached the end of the game.

Some have the “rollDice: true” property, which will return the roll dice function. A ‘successValue’ is contained for information on the integer needed to return a successful dice roll.
 

## Functions

### Display Scenario

The ‘displayScenario’ function declares the constant ‘scenario’, fetching the key (‘scenarioKey’) from the objects nested in ‘gameScenarios’.

The ‘scenarioContent’ div is targeted by it’s id, and it’s innerHTML is set to contain the ‘scenario title’ and the ‘scenario text’. This is constant across all scenario objects.

An else statement is included in the function to run different code if the scenario contains rollDice, isEnding, or isChapterEnding.

On rollDice: true, a ‘dice-container’ div is created, containing text and a dice button, with an on-click call to the ‘rollDice’ function.

On isEnding: true, an ‘ending-container’ div is created, containing text and a button with an on-click call to the ‘restartGame’ function.

On isChapterEnding: true, the ending container contains a ‘restartGame’ button.

If none of the above are true, then for each ‘choice’ in the ‘choices’ array, a button is created, containing text and an onclick ‘makeChoice’ function, which returns the ‘nextScenario’.


### Roll Dice

The ‘rollDice’ function:

 fetches the dice button by its class using a query selector

un-disables so that if it was previously disabled it will function properly.

creates a ‘diceResult’ constant with a value between one and six, using the Math.floor(Math.random() *6)+1 function

creates innerHTML to display text, the diceResult, and a ‘continue-button’

disables the button to prevent “re-rolling” the dice

adds an event-listener to the ‘continue-button’, which upon click will call the ‘continueAfterRoll’ function.


### Continue After Roll

The ‘continueAfterRoll’ function contains an else statement which returns the ‘winScenario’ as the ‘currentScenario’ if the ‘diceRoll’ is equal to or above the ‘successValue’.

If the ‘diceRoll’ is less than the ‘successValue’, the ‘currentScenario’ is set to the ‘failScenario’.

The function ends with calling the ‘displayScenario’ function.


### Make Choice

The ‘makeChoice’ function sets the ‘currentScenario’ to the ‘nextScenarioChoice’, set by the choice button selected:
<button onclick = “makeChoice(‘ ${choice.nextScenario}’)”> … <button>


### Restart Game

This function simply sets the current scenario to the ‘start’ scenario.

![screenshot](https://github.com/Rob-C-89/the-forgotten-forest/blob/main/documentation/end-chapter-shot.webp)



## Testing

| Test Label         | Test Action                                                              | Expected Outcome                                                                                 | Test Outcome |
| ------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------ |
| Website setup      | Navigate to the homepage                                                 | HTML elements are loaded, with the starting scenario presented                                   | PASS         |
| Game functionality | Click on choices buttons, following all possible variations of the game  | Choices lead to the correct scenario outcomes, with roll dice function performing correctly      | PASS         |
| Responsivity       | Load website on range of sreensizes from 300px to 3000px                 | Website is attractive and functional on all screen sizes. Media queries are performing correctly | PASS         |
| Validation         | Run code through external codde validators, for HTML, CSS and Javascript | Code passes validation tests                                                                     | PASS         |

## Responsivity

The website has been tested on 300px to 3000px screen sizes for responsivity.

**300px Screens:**

![screenshot](https://github.com/Rob-C-89/the-forgotten-forest/blob/main/documentation/screenshot-300px.png)

**576px Screens:**

A media query was created to make the header smaller on 576px and below. The audio player is also shrunk on this breakpoint for better alignment.

![screenshot](https://github.com/Rob-C-89/the-forgotten-forest/blob/main/documentation/screenshot-576px.png)

**768px Screens:**

![screenshot](https://github.com/Rob-C-89/the-forgotten-forest/blob/main/documentation/screenshot-768px.png)

**1200px Screens:**

![screenshot](https://github.com/Rob-C-89/the-forgotten-forest/blob/main/documentation/screenshot-1200px.png)

**3000px Screens and larger:**

A max-width of 1500px is set on the body to avoid overstretching the text on very large screens.

![screenshot](https://github.com/Rob-C-89/the-forgotten-forest/blob/main/documentation/screenshot-3000px.png)

## Validation

### HTML validation

![screenshot](https://github.com/Rob-C-89/the-forgotten-forest/blob/main/documentation/html-validation.png)

Code passed successfully through W3 HTML validation.

### CSS validation

![screenshot](https://github.com/Rob-C-89/the-forgotten-forest/blob/main/documentation/css-validation.png)

Code passed successfully through W3 CSS validation.

### Javascript validation

![screenshot](https://github.com/Rob-C-89/the-forgotten-forest/blob/main/documentation/js-validation.png)

No errors returned on Jshint validation. 


## Using the Repository

### Cloning

Cloning a repository pulls down a full copy of all the repository data that GitHub.com has at that point in time, including all versions of every file and folder for the project. You can push your changes to the remote repository on GitHub.com, or pull other people's changes from GitHub.com. 

You can clone the repository from using the following steps:

1. On GitHub, navigate to the main page of the repository
2. Above the list of files, click  <> Code.
3. Select whether you prefer HTTPS, SSH or CLI, then copy the URL with the clipboard icon
4. Open Git Bash or Terminal
5. Change the current working directory to the location where you want the cloned directory.
6. Type git clone, and then paste the URL. It will look like this:
    * git clone https://github.com/Rob-C-89/lorna-rose-artist
7. Press Enter to create your local clone.


### Forking 

As an alternative to cloning the repo, you may fork it to your account. This will keep your version free from source updates, allowing you to work on the repository without code or content being altered.

You can fork the repository using the following stepsL

1. Log into your account then navigate to the repository:
    * https://github.com/Rob-C-89/lorna-rose-artist
2. In the top-right corner of the window, you'll see a "Fork" button. 
3. Click the Fork button to begin the forking process.


## Credits and Acknowledgment 

### Code and Content Research and Development

The majority of the code was written referencing Code Institute’s Diploma in Full Stack Software Development.

https://codeinstitute.net/

For further research for the purpose of writing code, I primarily used W3 Schools, Stack Overflow and Medium. These are excellent free online resources. 

https://www.w3schools.com/

https://stackoverflow.com/questions

https://medium.com/


I visited a number of websites for research and inspiration. These include:

**How I made a dice game with HTML CSS and Javascript**

https://medium.com/@abdussalampopsy/how-i-made-a-dice-game-with-html-css-javascript-dom-javascript-diaries-c4d5eb7d9b6c

**Mind Maze Code Institute Hackathon**

https://nicolae-cristoloveanu.github.io/mind-maze-hackathon-ci/

**Fighting Fantasy Project**

http://www.ffproject.com/


### Media Credits

Forest Image - an open-source image taken from Pixabay.com:

https://pixabay.com/illustrations/path-trail-paved-woods-forest-9261477

Dice Image - an open-source image taken from Freepik.com:

https://www.freepik.com/free-vector/cartoon-dice_59539182.htm#fromView=keyword&page=1&position=1&uuid=7c293acc-421e-42f1-969e-e7fbff872f62&query=Dice

Forest Audio:

https://www.epidemicsound.com/

Fonts:

https://fonts.google.com/

Dice Favicon:

https://fontawesome.com/



