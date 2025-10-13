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
    title: "Your First Coin",
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
    title: "Riddles in the Wood",
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
        title: "Easy Come, Easy Go",
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
        title: "A Wise Choice",
        text: `The old man smiles, although his right eye twitches with a hint of disappointment. 
        "Correct! A river indeed. You have a sharp mind, traveller. The coin is yours. I expect we'll meet again..."
        You nod, pocket the coin and continue on your quest.`,
        choices: [
            { text: "Continue", nextScenario: "theTunnel" },
        ],
    },

    oldManThanks: {
    title: "Kindness Rewarded",
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
        title: "The River",
        text: `You follow the path to the left, leading you along the river, away from the willow tree. The forest thins out,
        and you see the sky above you is blue. Feeling a little more hopeful, you come to a bridge crossing the river. What do you do?`,
        choices: [
          { text: "Cross the bridge", nextScenario: "trollAmbush" },
          { text: "Sit down to enjoy a brief rest", nextScenario: "seeTroll" },
        ],
      },

    trollAmbush: {
        title: "Troll Ambush!",
        text: `You boldly walk towards and over the stone bridge, whistling merrily. Halfway across, a giant, scaly hand grabs you by the boot.
        A troll was hiding under the bridge and is trying to pull you down into the river below! Roll a dice to determine your fate.`,
        rollDice: true,
        successValue: 4,
        choices: [
            {text: "Continue", winScenario: "trollWin", failScenario: "trollLose" },
        ]
        
    },

    trollWin: {
        title: "I Want to Break Free",
        text: `You struggle against the troll's grip, as it pulls you towards the water. It heaves you off the bridge, but you cling on with your 
        hands. Fighting for your very life, you kick wildly and by some chance of fate, land a powerful blow to the troll's crooked nose.
        It howls in pain and release you. You scramble back onto the bridge and flee across, once again plunging deeper into the forest`,
        choices: [
            { text: "Continue", nextScenario: "theTunnel" },
        ]
    },

    trollLose: {
        title: "Troll-food",
        text: `You struggle with all your might, but the troll is too strong. It drags you down into the river, and your adventure is at an end...`,
        isEnding: true,
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
        title: "Sneaky Does it!",
        text: `As quietly as you can, you stand up and tiptoe back the way you came, your heart pounding beneath your chainmail shirt.
        Once you think youre at a safe distance, you break into a run, past the willow tree, and up the path to the right.`,
        choices: [
            { text: "Continue", nextScenario: "rightPath" },
        ]
    },

    riverCross: {
        title: "Discretion and the Better Part of Valour",
        text: `Remembering a lesson from your wise but perhaps not-so-heroic uncle, you decide not to risk a full frontal assault 
        on the river troll. Instead, you walk upstream a while, then lower yourself into the chilly waters. 
        To make yourself light enough to swim, you discard your chainmail shirt - a painful sacrifice, but surely less painful than
        death-by-troll. 
        You swim across the river, clamber up the opposite bank and onwards, deeper into the forest.`,
        choices: [
            { text: "Continue", nextScenario: "theTunnel" },
        ]
    },


    trollFight: {
        title: "Surprise Attack!",
        text: `With your sword drawn, you advance on the troll from behind. You catch the beast completely off guard, 
        and with almost no effort you slay the creature before it can draw its club. Wiping the green blood off your sword, you
        rifle throught a leather pouch hanging from it's neck. Inside you find five glittering gold coins and a small key.
        You pocket your loot and climb back onto the riverbank, crossing the bridge and on into the forest.`,
        choices: [
            { text: "Continue", nextScenario: "theTunnel" },
        ]
    },

    // Scenarios starting from the tunnel
    theTunnel: {
    title: "The Tunnel",
    text: `After hours of walking, reflecting on your adventure's trials so far, the light is beginning to fade. Just as you
    start to consider making camp for the night, you see a faint glow ahead. Approching cautiously, you come to a stone cave
    amongst the trees, its entrance lit by flickering torches. You light your own torch on the flames, and gaze inside. There
    seems to be a tunnel leading deep into the earth. What do you do?`,
    choices: [
      { text: "Enter the tunnel", nextScenario: "theLongDark" },
      { text: "Decide it's too dangerous and turn back", nextScenario: "giveUp" },
    ],
  },

  theLongDark: {
    title: "The Long Dark",
    text: `You step into the tunnel, sword in one hand, blazing torch in the other. The orange light flickers in the dark, 
    revealing slimy stone walls, riddled with moss and dripping with water. The air is damp and earthy. As you venture deeper into the earth,
    the tunnel grows lower and more narrow, until you are forced to crouch. You come to a fork in the tunnel - a faint smell of smoke coming from one
    passage, and a cold draft from the other. Which way do you go?`,
    choices: [
      { text: "Follow the smell of smoke", nextScenario: "smoke" },
      { text: "Go towards the cold draft", nextScenario: "draft" },
    ],
  },

  // Draft tunnel scenarios

  draft: {
    title: "The Door",
    text: `You trudge along the subterranean path, for what seems like an age. Eventually, you come to a stone door. It is perhaps
    four feet tall, made with care and skill, inset with semi-precious stones and carved with what you recognise as Dwarven runes.
    After some inspection, you see it is ever so slightly ajar. Perhaps you could open it with your strength? Roll a dice 
    to determine the outcome!`,
    rollDice: true,
    successValue: 5,
    choices: [
      {text: "Continue", winScenario: "doorSuccess", failScenario: "doorFail" },
   ]

  },

  doorSuccess: {
    title: "The Way is Open",
    text: `You call on all your might, straining against the ancient Dwarven structure. Just as you are about to give up, the
    door gives way. A dull light fills the tunnel, and you continue on your way`,
    choices: [
      {text: "Continue", nextScenario: "tunnelExit"},
    ]
  },

  doorFail: {
    title: "The Way is Shut",
    text: `No matter how hard you try, the door will not budge. Defeated, you turn back the way you came. Once again, you come 
    to the fork and notice the smell of smoke coming from one way. You turn down it, and deeper into the depths`,
    choices: [
      {text: "Continue", nextScenario: "smoke"},
    ]
  },

  // Smoke tunnel scenarios

  smoke: {
    title: "The Smell of Smoke",
    text: `You follow the smell of smoke, your footsteps echoing on the stony floor. After a while, the scent changes - you smell
    roasting meat! Your stomach gurgles in response - you haven't eaten in hours. The passage opens up into a cavern - there is a 
    way clinging to the wall, climbing up towards a ledge. There is also a path leading around a corner, staying at the same height.
    Which do you take?`,
    choices: [
      { text: "Climb the way up to the ledge", nextScenario: "highRoad" },
      { text: "Follow the path around the corner", nextScenario: "lowRoad" },
    ],
  },

  // High road scenarios

  highRoad: {
    title: "The High Road",
    text: `You clamber up the rocky path, hugging the side of the cavern. Sensing danger, you crouch down as you go, until you are 
    sneaking along the ridged wall. You hear gruff voices - below you, you see a group of three goblins, huddled around a pitiful fire, 
    roasting a chunk of meat. You see an exit at the other end of the cavern. What do you do?`,
    choices: [
      {text: "Draw your bow and attack", nextScenario: "ambushGoblins" },
      {text: "Sneak past the goblins", nextScenario: "avoidGoblins"}
    ]

  },

  ambushGoblins: {
    title: "Ambush the Goblins",
    text: `You silently draw your bow and take aim at the evil little creatures. You let fly with your arrows, surprising the party below
    Does your ambush succeed? Roll a dice to determine your fate!`,
    rollDice: true,
    successValue: 3,
    choices: [
            {text: "Continue", winScenario: "highRoadWin", failScenario: "highRoadLose" },
    ]
  },

  highRoadWin: {
    title: "Arrows from Above",
    text: `You rain down arrows on the unsuspecting goblins, one after another, until your enemy lies still. They barely had
    time to ready their weapons. You feel a twinge of pity for them, but bury it as quickly as it came. It was a necessary action.
    Slingin your bow across your back, you follow the ledge path along and down, towards the exit of the cavern`,
    choices: [
      { text: "Continue", nextScenario: "tunnelExit"},
    ]
  },

  highRoadLose: {
    title: "Arrows from Below",
    text: `Despite your advantage, the goblins return fire with skill and ferocity. They are too many. You hit the party with
    your own shots, but no more than wounding blows. A barbed arrow hits you in the side, and you know the fight is not yours. 
    You turn and run, although thankfully the wounded goblins do not chase you. This adventure is beyond you, and you flee
    all the way back through the tunnel, into the forest, and head for home. At least you leave with your life... `,
    isEnding: true,

  },

  avoidGoblins: {
    title: "A Peaceful Choice",
    text: `The goblins chatter away in their foul language as you creep against the wall of the cavern. They appear to be arguing,
    or maybe that's just the nature of their tongue. Either way, there will be no battle today, as they remain unaware of your presence.
    You sneak along the high path, which leads you down to the floor of the cavern on the other side. Rushing from rock
    to rock, you make it to the exit`,
    choices: [
      { text: "Continue", nextScenario: "tunnelExit"},
    ]
  },

  // Low road scenarios

  lowRoad: {
    title: "Towards Danger",
    text: `You turn around the corner, and right into the camp of three armoured goblins, crouched around a ragged camp. A chunk
    of meat roasts on a spit. One of the goblins is facing you as you come around - it cries out and grabs its bow. The other
    creatures wheel around, readying for the fight. Outnumbered, you desperatley charge forward into combat. Roll a dice to 
    reveal your fate!`,
    rollDice: true,
    successValue: 5,
    choices: [
            {text: "Continue", winScenario: "lowRoadWin", failScenario: "lowRoadLose" },
    ]
  },

  lowRoadWin: {
    title: "Against All Odds",
    text: `Fighting for your life against a greater number, you miraculously overpower your foe. Two of the goblins lie still,
    and the last flees the way you just came, screeching and crying as it runs. The way before you is clear.`,
    choices: [
      {text: "Continue", nextScenario: "tunnelExit"},
    ]
  },

  lowRoadLose: {
    title: "Never Had a Chance",
    text: `You swing wildly with your sword, praying to your Gods as you hack and thrust. The goblins jeer and laugh, knowing
    they are greater in strength. Though small they are fierce and cunning, surrounding you and attacking from all sides.
    The sounds of the battle ring briefly through the tunnels, and then silence. Your adventure is over...`,
    isEnding: true,
  },

  // Exit the tunnel

  tunnelExit: {
    title: "Out of the Dark",
    text: `The challenges of the tunnel are behind you. You see a glow of light coming from the exit, and you climb up out of the 
    dark. Soon you come out and into a clearing - back in the forest. Exhausted from your adventure so far, and with the moon glowing
    above you, you decide to make camp. After pitching your tent behind the cover of some bushes, you fall down onto your roll-mat.
    Proud of your progress, you fall into a deep and dreamless sleep.`,
    choices: [
      {text: "Continue", nextScenario: "chapterOneEnd"},
    ]
  },

  chapterOneEnd: {
    title: "End of Chapter One!",
      text: `Congratulations on making it so far! This is the end of the first chapter of The Forgotten Forest. Chapter Two will be coming
      soon. In the meantime, would you like to play again?`,
    isChapterEnding: true,
  }


};

// currentScenario is set to Start as default

let currentScenario = "start";

// Function to display scenario

function displayScenario(scenarioKey) {
  const scenario = gameScenarios[scenarioKey];

  scenarioContent.innerHTML = `<h2>${scenario.title}</h2><p>${scenario.text}</p>`;

  // If scenario calls for roll dice, display dice button. Else, if scenario is an ending, show restart button. Else, create buttons for choices
  if (scenario.rollDice) {
    // roll dice placeholder text to be replaced with dice image
    scenarioContent.innerHTML += 
    `<div class="dice-container" id="diceContent">
        <p class="dice-instructions">Click the dice to reveal your fate!</p>
        <button class="dice-button" onclick="rollDice()"></button>
        <div id="diceResult"></div>

    </div>`

  } else if (scenario.isEnding) {
    scenarioContent.innerHTML += `<div class="ending-container" id="endingContent">
    <h2>Your adventure ends here</h2>
    <p>Would you like to play again?</p>
    <button onclick="restartGame()">Restart Game</button>
    </div>`;

    } else if (scenario.isChapterEnding) {
    scenarioContent.innerHTML += `<div class="ending-container" id="endingContent">
    <button onclick="restartGame()">Restart Game</button>
    </div>`;

  } else {
    scenarioContent.innerHTML += `<div class="choices-container" id="choicesContent">`;
    scenario.choices.forEach((choice) => {
      choicesContent.innerHTML += `<button onclick="makeChoice('${choice.nextScenario}')">${choice.text}</button>`;
    });
    scenarioContent.innerHTML += `</div>`;
  }
}

// Roll dice function

function rollDice() {
  let diceButton = document.querySelector(".dice-button");
  // Remove previous disabled state if present
  diceButton.disabled = false;  
  const diceResult = Math.floor(Math.random() * 6) + 1;
  const resultText = document.getElementById("diceResult");
 

  resultText.innerHTML += 
  `<div>
  <p>You rolled a ${diceResult}!</p>
  <button class ="continue-button">Continue</button>
  </div>`;
  
    // Disable button to prevent multiple rolls
  diceButton.disabled = true;

  // Add event listener to continue button (for continueAfterRoll function)
  let continueButton = document.querySelector(".continue-button");
  continueButton.addEventListener("click", continueAfterRoll);


// funtion to continue after rolling dice
    function continueAfterRoll()  {
    const scenario = gameScenarios[currentScenario];
    if (diceResult >= scenario.successValue) {
      currentScenario = scenario.choices[0].winScenario;
    } else {
      currentScenario = scenario.choices[0].failScenario;
    }
    displayScenario(currentScenario);
  }
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
