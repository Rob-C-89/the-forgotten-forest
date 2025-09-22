// Game Scenarios data structure
const gameScenarios = {
    start: {
        title: "The Beginning",
        text: "After days of travelling, you look down at the tattered map that led you to where you now stand. Looking up, you see a gloomy forest of twisted and towering trees. What do you do?",
        choices: [
            { text: "Take a deep breath and walk into the trees", nextScenario: "theForest" },
            { text: "Shake your head and turn around", nextScenario: "giveUp" },
        ]
    },

    theForest: {
        title: "The Forest",
        text: "The forest is dark and eerie. You are surrounded by creaking branches and rustling leaves, as if the trees themselves are trying to warn you of something. You grip the hilt of your sword and bravely press on into the woods. After some time, you seem to join a trodden path made by some unknown feet. Following the path, you reach a tall willow standing by a bubbling brook. The path splits - will you turn right, or left?",
        choices: [
            { text: "Turn right", nextScenario: "rightPath" },
            { text: "Turn left", nextScenario: "leftPath" },
        ]
    },

    giveUp: {
        title: "The End",
        text: "You decide that this adventure is not for you. You turn around and head back home, where you live a quiet life. Maybe adventure isn't your calling after all.",
    }
}

// Function to display scenario

function displayScenario (scenarioKey = 'start') {
    const scenario = gameScenarios[scenarioKey];
    const gameContent = document.getElementById('gameContent');
    gameContent.innerHTML = `<h2>${scenario.title}</h2><p>${scenario.text}</p>`;

}

// Function to make user choices
function makeChoice() {
}

// Function to restart game 
function restartGame() {
}

// Initialize game by displaying the starting scenario
displayScenario();
    
