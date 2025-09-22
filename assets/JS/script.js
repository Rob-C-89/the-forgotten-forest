// Game Scenarios data structure
const gameScenarios = {
  start: {
    title: "The Beginning",
    text: `After days of travelling, you look down at the tattered map that led you to where you now stand. 
    Looking up, you see a gloomy forest of twisted and towering trees. What do you do?`,
    choices: [
      {
        text: "Take a deep breath and walk into the trees",
        nextScenario: "theForest",
      },
      { text: "Shake your head and turn around", nextScenario: "giveUp" },
    ],
  },

    giveUp: {
    title: "The End",
    text: `You decide that this adventure is not for you. You turn around and head back home, where you live a quiet life. 
    Maybe adventure isn't your calling after all.`,
    isEnding: true,
  },

  theForest: {
    title: "The Forest",
    text: `The forest is dark and eerie. You are surrounded by creaking branches and rustling leaves, 
    as if the trees themselves are trying to warn you of something. 
    You grip the hilt of your sword and bravely press on into the woods. After some time, you seem to join a trodden path,
    made by some unknown feet. Following the path, you reach a tall willow standing by a bubbling brook. 
    The path splits - will you turn right, or left?`,
    choices: [
      { text: "Turn right", nextScenario: "rightPath" },
      { text: "Turn left", nextScenario: "leftPath" },
    ],
  },

  // Right path scenarios
    rightPath: {
    title: "Your first coin",
    text: `You follow the path to the right, your boots crunching on the twigs, leaves and the odd small animal bone. 
    After a while, you hear a metallic clink and look down. A glittering golden coin twinkles back at you. What do you do?`,
    choices: [
      { text: "Pick it up and continue on your way", nextScenario: "oldMan" },
      { text: "Pocket the coin and call it a day", nextScenario: "quidsIn" },
    ],
  },

    quidsIn: {
    title: "Quids In",
    text: `You decide that one coin is enough for you and, besides, the Forgotten Forest is kinda giving you the heebie jeebies. 
    You turn around and head back home, where you live a quiet life. 
    Decades later, as you lie in your bed for the last time, you look up at the dusty coin on your mantelpiece and smile.`,
    isEnding: true,
  },

  oldMan: {
    title: "The Old Man",
    text: `You pick up the coin and continue along the path, feeling a little more confident.
    "I think you've found my coin!" a voice suddenly calls out.
    You spin around to see an old man with a long white beard dressed in a shabby grey robe. What is your reply?`,
    choices: [
      { text: `"The gold is mine! Have at ye!"`, nextScenario: "oldManFight" },
      { text: `"Maybe it is, and maybe it isn't?"`, nextScenario: "riddle" },
      { text: `"Here, take it. I don't want it."`, nextScenario: "oldManThanks" },
    ],
  },

  oldManFight: {
    title: "The End",
    text: `You draw your sword and prepare to fight. The last thing you see is the old man pulling a wooden staff from beneath his cloak, 
    and a blinding flash of light. All goes dark..`,
    isEnding: true,
  },

  riddle: {
    title: "Riddles in the wood",
    text: `The old man chuckles. "A fair answer! Well, let's play for it, shall we? If you can answer my riddle, 
    the coin is yours. If not, I'll be taking it!"
    You nod and cross your arms, waiting for the riddle.
    "I have a mouth but never speak, I have a bed but never sleep, I run but never walk, and I have a head but never weep. 
    What am I?"`,
    choices: [
        { text: "A fish", nextScenario: "riddleWrong" },
        { text: "A river", nextScenario: "riddleCorrect" },
        { text: "A mountain", nextScenario: "riddleWrong" },
        ],
    },

    riddleWrong: {
        title: "Easy come, easy go",
        text: `The old man giggles. "Wrong! The answer was a river. You might want to sharpen your mind a little 
        if you're to get anywhere in this forest! Thanks for the treasure!"
        He pulls his hand out of his robe, revealing a glittering coin in his wizened fingers. 
        You put your hands in your pocket. The coin is gone! Before you can question his trickery, 
        the old man has vanished, as quickly as he appeared. You sigh and continue on your quest`,
        choices: [
            { text: "Continue", nextScenario: "theTunnel" },
        ],
    },

    riddleCorrect: {
        title: "A wise choice",
        text: `The old man smiles, although his right eye twitches with a hint of disappointment. 
        "Correct! A river indeed. You have a sharp mind, traveller. The coin is yours. I expect we'll meet again..."
        You nod, pocket the coin and continue on your quest.`,
        choices: [
            { text: "Continue", nextScenario: "theTunnel" },
        ],
    },

    oldManThanks: {
    title: "Kindness rewarded",
    text: `You hand over the coin. The frail old man in his rags looks like he needs it more than you do. "You have a kind and brave heart, adventurer.
    It will protect you against many of the dangers in this forest. For everything else, take this."
    He reaches into his robe and pulls out an ornate, horned helmet of brass and silver. Stunned by the princely gift, you 
    thank the old man, put on the helmet and continue on your quest.`,
    choices: [
        { text: "Continue", nextScenario: "theTunnel" },
    ],
  },

  // Left path scenarios
    leftPath: {
        title: "The river",
        text: `You follow the path to the left, leading you along the river, away from the willow tree. The forest thins out,
        and you see the sky above you is blue. Feeling a little more hopeful, you come to a bridge crossing the river. What do you do?`,
        choices: [
          { text: "Cross the bridge", nextScenario: "trollAmbush" },
          { text: "Sit down to enjoy a brief rest", nextScenario: "seeTroll" },
        ],
      },

    seeTroll: {
        title: "Troll! Uh oh...",
        text: `With your back to the trees, you take a seat on the grassy banks of the river and take your last piece of bread from your backpack.
        As you chew thoughtfully and look around, you notice the hairy, scaled back of a creature crouching beneath the bridge. A troll! What do you do?`,
        choices: [
            { text: "Sneak away back the way you came", nextScenario: "sneakAway" },
            { text: "Swim across the river upstream", nextScenario: "riverCross" },
            { text: "Draw your sword and approach the bridge", nextScenario: "trollFight" },
        ]
    },

    sneakAway: {
        title: "Sneaky does it!",
        text: `As quietly as you can, you stand up and tiptoe back the way you came, your heart pounding beneath your chainmail shirt.
        Once you think youre at a safe distance, you break into a run, past the willow tree, and up the path to the right.`,
        choices: [
            { text: "Continue", nextScenario: "rightPath" },
        ]
    },

    riverCross: {
        title: "Discretion and the better part of valour",
        text: `Remembering a lesson from your wise but perhaps not-so-heroic uncle, you decide not to risk a full frontal assault 
        on the river troll. Instead, you walk upstream a while, then lower yourself into the chilly waters. 
        To make yourself light enough to swim, you discard your chainmail shirt - a painful sacrifice, but surely less painful than
        death-by-troll. 
        You swim across the river, clamber up the opposite bank and onwards, deeper into the forest.`,
        choices: [
            { text: "Continue", nextScenario: "theTunnel" },
        ]
    },

    trollAmbush: {
        title: "Troll ambush!",
        text: `You boldly walk towards and over the stone bridge, whistling merrily. Halfway across, a giant, scaly hand grabs you by the boot.
        A troll was hiding under the bridge and is trying to pull you down into the river below! Roll a dice to determine your fate.`,
        rollDice: true,
    },

    trollFight: {
        title: "Surprise attack!",
        text: `With your sword drawn, you advance on the troll from behind. You catch the beast completely off guard, 
        and with almost no effort you slay the creature before it can draw its club. Wiping the green blood off your sword, you
        rifle throught a leather pouch hanging from it's neck. Inside you find five glittering gold coins and a small key.
        You pocket your loot and climb back onto the riverbank, crossing the bridge and on into the forest.`,
        choices: [
            { text: "Continue", nextScenario: "theTunnel" },
        ]
    },



};



let currentScenario = "start";

// Function to display scenario

function displayScenario(scenarioKey) {
  const scenario = gameScenarios[scenarioKey];
  const gameContent = document.getElementById("gameContent");

  gameContent.innerHTML = `<h2>${scenario.title}</h2><p>${scenario.text}</p>`;
  // If scenario calls for roll dice, display dice button. Else, if scenario is an ending, show restart button. Else, create buttons for choices
  if (scenario.rollDice) {
    // roll dice placeholder text to be replaced with dice image
    gameContent.innerHTML += 
    `<div class="dice-container">
        <p class="dice-instructions">Click the dice to reveal your fate!</p>
        <button class="dice-button" onclick="rollDice()"> Roll Dice</button>
        <div id="diceResult"></div>
    </div>`
  } else if (scenario.isEnding) {
    gameContent.innerHTML += `<button onclick="restartGame()">Restart Game</button>`;
  } else {
    scenario.choices.forEach((choice, index) => {
      gameContent.innerHTML += `<button onclick="makeChoice('${choice.nextScenario}')">${choice.text}</button>`;
    });
  }
}

// Roll dice function
function rollDice() {
  let diceButton = document.querySelector(".dice-button");
  // Remove previous disabled state if present
  diceButton.disabled = false;  
  const diceResult = Math.floor(Math.random() * 6) + 1;
  const resultText = document.getElementById("diceResult");
  resultText.innerHTML += `<p>You rolled a ${diceResult}!</p>`;
  // Disable button to prevent multiple rolls
  diceButton.disabled = true;

}

// Function to make user choices and move to next scenario
function makeChoice(nextScenarioChoice) {
  currentScenario = nextScenarioChoice;
  displayScenario(currentScenario);
}

// Function to restart game by resetting to the starting scenario
function restartGame() {
  currentScenario = "start";
  displayScenario(currentScenario);
}

// Initialize game by displaying the starting scenario
displayScenario(currentScenario);
