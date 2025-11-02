// Quiz data
const quizData = {
    questions: [
        {
            question: "During a heated debate, you notice someone's argument has a subtle flaw. You...",
            answers: [
                { text: "Let it slide to preserve harmony", points: { paladin: 3, cleric: 2, fighter: 1 } },
                { text: "Point it out with careful reasoning", points: { wizard: 3, rogue: 2, cleric: 1 } },
                { text: "Interrupt to correct them immediately", points: { fighter: 3, barbarian: 2, paladin: 1 } },
                { text: "Redirect the conversation巧妙ly", points: { rogue: 3, druid: 2, wizard: 1 } }
            ]
        },
        {
            question: "Your friend asks for help moving. You respond by...",
            answers: [
                { text: "Listening to their stress and offering emotional support", points: { cleric: 3, paladin: 2, bard: 1 } },
                { text: "Creating an efficient packing and moving strategy", points: { wizard: 3, rogue: 2, bard: 1 } },
                { text: "Showing up early with energy drinks and lifting gear", points: { fighter: 3, barbarian: 2, paladin: 1 } },
                { text: "Making it an adventure with themed music and snacks", points: { bard: 3, warlock: 2, druid: 1 } }
            ]
        },
        // Scenario will be inserted here after question 2
        {
            question: "When choosing a vacation spot, you're drawn to...",
            answers: [
                { text: "A secluded cabin by a pristine lake", points: { druid: 3, cleric: 2, rogue: 1 } },
                { text: "An active volcano for the ultimate thrill", points: { barbarian: 3, sorcerer: 2, paladin: 1 } },
                { text: "A historic fortress with ancient mysteries", points: { druid: 3, fighter: 2, cleric: 1 } },
                { text: "A bustling city known for its hidden secrets", points: { wizard: 3, sorcerer: 2, bard: 1 } }
            ]
        },
        {
            question: "Your approach to learning a new skill involves...",
            answers: [
                { text: "Finding a mentor who cares about your growth", points: { paladin: 3, cleric: 2, druid: 1 } },
                { text: "Breaking it down into logical components", points: { wizard: 3, rogue: 2, fighter: 1 } },
                { text: "Diving in headfirst and learning from mistakes", points: { barbarian: 3, sorcerer: 2, bard: 1 } },
                { text: "Experimenting until you find what feels right", points: { druid: 3, wizard: 2, rogue: 1 } }
            ]
        },
        {
            question: "At a party, you're most likely to...",
            answers: [
                { text: "Mediate when tensions arise between guests", points: { cleric: 3, bard: 2, paladin: 1 } },
                { text: "Analyze the social dynamics from the sidelines", points: { wizard: 3, rogue: 2, fighter: 1 } },
                { text: "Be the center of attention with bold stories", points: { paladin: 3, fighter: 2, barbarian: 1 } },
                { text: "Blend in while observing everyone's quirks", points: { bard: 3, sorcerer: 2, rogue: 1 } }
            ]
        },
        {
            question: "When making a difficult decision, you prioritize...",
            answers: [
                { text: "How it affects your closest relationships", points: { paladin: 3, fighter: 2, cleric: 1 } },
                { text: "The logical outcomes and consequences", points: { wizard: 3, cleric: 2, rogue: 1 } },
                { text: "What feels right in your gut", points: { barbarian: 3, fighter: 2, sorcerer: 1 } },
                { text: "Your personal freedom and options", points: { rogue: 3, druid: 2, bard: 1 } }
            ]
        },
        {
            question: "Your ideal legacy would be...",
            answers: [
                { text: "Being remembered for your compassion and protection", points: { cleric: 3, paladin: 2, druid: 1 } },
                { text: "Leaving behind profound knowledge or discoveries", points: { wizard: 3, warlock: 2, bard: 1 } },
                { text: "Being known for your courage and strength", points: { sorcerer: 3, wizard: 2, barbarian: 1 } },
                { text: "Creating something beautiful and harmonious", points: { druid: 3, bard: 2, warlock: 1 } }
            ]
        }
    ],
    results: {
        wizard: {
            name: "Wizard",
            description: "You seek knowledge above all. Your mind is your greatest weapon. You value logic, strategy, and understanding the world's mysteries. You're introspective, curious, and thrive in intellectual environments.",
            secondary: "sorcerer",
            type: "magical",
            feedback: "Knowledge can be a prison... Are you sure you're not just afraid to embrace raw power? That careful analysis of yours might just be cowardice in disguise.",
            doubt: "Even the brightest minds can be blinded by their own assumptions..."
        },
        fighter: {
            name: "Fighter",
            description: "You meet conflict head-on, with strength, skill, and honor. You're action-oriented, bold, and thrive in physical challenges. You value discipline and directness.",
            secondary: "barbarian",
            type: "melee",
            feedback: "Honor is just a pretty word for predictability... That discipline of yours might be holding you back from true strength.",
            doubt: "Brute force solves nothing that a sharper mind couldn't prevent..."
        },
        druid: {
            name: "Druid",
            description: "You are one with nature, intuitive and adaptable. You're empathetic, flexible, and drawn to harmony. You prefer peaceful solutions but can be fierce when needed.",
            secondary: "ranger",
            type: "magical",
            feedback: "Peaceful solutions are for those who can't handle real conflict... That harmony you seek might just be a weakness in disguise.",
            doubt: "Adaptability without conviction is just chaos waiting to happen..."
        },
        rogue: {
            name: "Rogue",
            description: "You're clever, resourceful, and always one step ahead. You value freedom, wit, and subtlety. You're a master of improvisation and charm.",
            secondary: "bard",
            type: "stealth",
            feedback: "Cleverness without loyalty is just selfishness... That freedom you crave might be isolating you from what truly matters.",
            doubt: "Always one step ahead, or always running away from something?"
        },
        paladin: {
            name: "Paladin",
            description: "You fight for justice, guided by a strong moral compass. You're noble, protective, and driven by your beliefs. You inspire others and lead by example.",
            secondary: "cleric",
            type: "melee",
            feedback: "Justice is just another word for control... That morality of yours might be blinding you to the gray areas that matter most.",
            doubt: "A noble cause doesn't make you noble... Just self-righteous."
        },
        cleric: {
            name: "Cleric",
            description: "You are guided by faith and serve as a beacon of hope. You heal, protect, and provide spiritual guidance. You're compassionate and dedicated to your cause.",
            secondary: "paladin",
            type: "magical",
            feedback: "Faith is just hope without evidence... That compassion might be enabling weakness in others.",
            doubt: "Serving others or just needing to feel needed? The line blurs..."
        },
        barbarian: {
            name: "Barbarian",
            description: "You unleash raw power and fury in battle. You're driven by instinct and emotion. You value strength, freedom, and living in the moment.",
            secondary: "fighter",
            type: "melee",
            feedback: "Fury is just controlled chaos... That instinct of yours might be keeping you from your true potential.",
            doubt: "Living in the moment or running from responsibility? The roar drowns out the truth..."
        },
        bard: {
            name: "Bard",
            description: "You inspire others through words, music, and performance. You're charismatic, creative, and skilled at bringing people together. You value expression and connection.",
            secondary: "rogue",
            type: "stealth",
            feedback: "Inspiration is just manipulation with better branding... That charm might be hiding your true self from even you.",
            doubt: "A story well told or a truth well hidden? The audience always claps..."
        },
        sorcerer: {
            name: "Sorcerer",
            description: "You wield innate magical power that flows through your bloodline. You're intuitive, passionate, and your magic is as unpredictable as you are.",
            secondary: "wizard",
            type: "magical",
            feedback: "Innate power without understanding is just dangerous... That intuition might be leading you astray.",
            doubt: "Passion burns bright but consumes everything in its path..."
        },
        warlock: {
            name: "Warlock",
            description: "You've made a pact for power—but at what cost? You're ambitious, intuitive, and drawn to the shadows. You seek strength and answers beyond the ordinary.",
            secondary: "sorcerer",
            type: "magical",
            feedback: "Power always demands a price... That ambition of yours might be consuming more than you realize.",
            doubt: "A pact made in desperation or just another deal with the dark?"
        }
    },
    scenarios: {
        melee: {
            part1: {
                question: "SUDDEN CHALLENGE: You're in a dungeon when you hear a cry for help. A fellow adventurer is trapped under a collapsing ceiling, with monsters approaching. What do you do?",
                answers: [
                    { text: "Rush in immediately to hold off the monsters while others help", class: "fighter" },
                    { text: "Position yourself strategically to protect the trapped person", class: "paladin" },
                    { text: "Charge in with fury, crushing everything in your path", class: "barbarian" }
                ]
            },
            part2: {
                question: "The trapped person is saved, but now you're surrounded by the monsters. How do you handle this?",
                answers: [
                    { text: "Fight with precise technique and skill", class: "fighter", resolution: "Your disciplined approach proves effective, and you emerge victorious!" },
                    { text: "Protect your allies while systematically defeating foes", class: "paladin", resolution: "Your noble defense inspires your allies, leading to victory!" },
                    { text: "Let out a mighty roar and unleash devastating attacks", class: "barbarian", resolution: "Your primal fury overwhelms the enemies!" }
                ]
            }
        },
        magical: {
            part1: {
                question: "SUDDEN CHALLENGE: A magical barrier blocks your path, and ancient runes appear. They demand you solve a riddle to proceed. What's your approach?",
                answers: [
                    { text: "Analyze the runes methodically to understand their meaning", class: "wizard" },
                    { text: "Call upon divine knowledge for guidance", class: "cleric" },
                    { text: "Sense the natural magic in the barrier to find a weakness", class: "druid" }
                ]
            },
            part2: {
                question: "As you work on the riddle, magical traps activate around you. How do you respond?",
                answers: [
                    { text: "Cast protective spells and counter-magic", class: "wizard", resolution: "Your mastery of arcane arts neutralizes the traps!" },
                    { text: "Invoke divine protection and healing for your group", class: "cleric", resolution: "Divine light shields you from harm!" },
                    { text: "Command the plants around you to disable the traps", class: "druid", resolution: "Nature responds to your call, clearing the path!" }
                ]
            }
        },
        stealth: {
            part1: {
                question: "SUDDEN CHALLENGE: You're in a noble's estate when guards suddenly patrol the hallway. You need to get past without being seen. What's your strategy?",
                answers: [
                    { text: "Use shadows and misdirection to slip by unnoticed", class: "rogue" },
                    { text: "Create a distraction elsewhere to draw guards away", class: "bard" },
                    { text: "Move silently and observe guard patterns carefully", class: "ranger" }
                ]
            },
            part2: {
                question: "Just as you're sneaking past, an alarm sounds. How do you handle this crisis?",
                answers: [
                    { text: "Disappear into the shadows and wait for the chaos to subside", class: "rogue", resolution: "You vanish like a ghost, escaping detection!" },
                    { text: "Improvise a performance to convince guards it was a false alarm", class: "bard", resolution: "Your silver tongue talks your way out of trouble!" },
                    { text: "Use your tracking skills to find an alternate route", class: "ranger", resolution: "Your wilderness expertise leads you to safety!" }
                ]
            }
        }
    }
};

// DOM elements
const startScreen = document.getElementById('start-screen');
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const scenarioContainer = document.getElementById('scenario-container');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackText = document.getElementById('feedback-text');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const progressBar = document.getElementById('progress');
const primaryClass = document.getElementById('primary-class');
const primaryDescription = document.getElementById('primary-description');
const secondaryClass = document.getElementById('secondary-class');
const secondaryDescription = document.getElementById('secondary-description');

// Quiz state
let currentQuestion = 0;
let scores = {};
let eliminatedClass = null;
let scenarioTriggered = false;
let currentScenarioType = null;
let scenarioStep = 0; // 0 = not in scenario, 1 = part 1, 2 = part 2, 3 = resolution
let questionsAnswered = 0;

// Initialize scores
function initScores() {
    scores = {};
    Object.keys(quizData.results).forEach(classType => {
        scores[classType] = 0;
    });
}

// Show start screen
function showStartScreen() {
    startScreen.classList.remove('hidden');
    questionContainer.classList.add('hidden');
    resultContainer.classList.add('hidden');
    scenarioContainer.classList.add('hidden');
    feedbackContainer.classList.add('hidden');
}

// Start quiz
function startQuiz() {
    initScores();
    currentQuestion = 0;
    eliminatedClass = null;
    scenarioTriggered = false;
    scenarioStep = 0;
    questionsAnswered = 0;
    startScreen.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    showQuestion();
}

// Show current question
function showQuestion() {
    // Check if we should trigger scenario after question 2
    if (currentQuestion === 2 && !scenarioTriggered) {
        triggerScenario();
        return;
    }
    
    const question = quizData.questions[currentQuestion];
    questionText.textContent = question.question;
    
    // Update progress bar
    const progressPercent = ((currentQuestion) / quizData.questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
    
    // Clear previous answers
    answersContainer.innerHTML = '';
    
    // Add answers
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.classList.add('answer-btn');
        button.textContent = answer.text;
        button.addEventListener('click', () => selectAnswer(answer.points));
        answersContainer.appendChild(button);
    });
}

// Trigger the scenario interlude
function triggerScenario() {
    scenarioTriggered = true;
    
    // Get current rankings
    const sortedClasses = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
    const topClass = sortedClasses[0];
    const secondClass = sortedClasses[1];
    const lastClass = sortedClasses[sortedClasses.length - 1];
    
    // Determine scenario type based on top class
    currentScenarioType = quizData.results[topClass].type;
    const scenario = quizData.scenarios[currentScenarioType];
    
    // Show scenario container
    questionContainer.classList.add('hidden');
    scenarioContainer.classList.remove('hidden');
    
    // Show part 1
    scenarioStep = 1;
    showScenarioPart(scenario.part1);
}

// Show scenario part
function showScenarioPart(part) {
    document.getElementById('scenario-question').textContent = part.question;
    
    // Clear previous answers
    const scenarioAnswers = document.getElementById('scenario-answers');
    scenarioAnswers.innerHTML = '';
    
    // Add answers
    part.answers.forEach(answer => {
        const button = document.createElement('button');
        button.classList.add('answer-btn');
        button.textContent = answer.text;
        button.addEventListener('click', () => handleScenarioAnswer(answer));
        scenarioAnswers.appendChild(button);
    });
}

// Handle scenario answer
function handleScenarioAnswer(answer) {
    if (scenarioStep === 1) {
        // Part 1 answer - show part 2
        scenarioStep = 2;
        const scenario = quizData.scenarios[currentScenarioType];
        showScenarioPart(scenario.part2);
    } else if (scenarioStep === 2) {
        // Part 2 answer - show resolution and eliminate class
        scenarioStep = 3;
        eliminatedClass = answer.class;
        
        // Show resolution
        document.getElementById('scenario-question').textContent = answer.resolution;
        document.getElementById('scenario-answers').innerHTML = '<button id="continue-btn" class="answer-btn">Continue Quiz</button>';
        document.getElementById('continue-btn').addEventListener('click', exitScenario);
        
        // Remove eliminated class from scores
        if (scores[eliminatedClass] !== undefined) {
            delete scores[eliminatedClass];
        }
    }
}

// Exit scenario and continue quiz
function exitScenario() {
    scenarioContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');
    currentQuestion++; // Move to next question after scenario
    questionsAnswered = 2; // Reset counter after scenario
    showQuestion();
}

// Handle answer selection
function selectAnswer(points) {
    // Add points to scores
    Object.keys(points).forEach(classType => {
        if (scores[classType] !== undefined) { // Only add points if class wasn't eliminated
            scores[classType] += points[classType];
        }
    });
    
    questionsAnswered++;
    
    // Check if we should show feedback (every 2 questions or after scenario)
    if (questionsAnswered === 2 || questionsAnswered === 4 || questionsAnswered === 6) {
        showFeedback();
        return;
    }
    
    // Move to next question or show results
    currentQuestion++;
    if (currentQuestion < quizData.questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Show sinister feedback
function showFeedback() {
    // Find current top class
    const sortedClasses = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
    const topClass = sortedClasses[0];
    const topClassData = quizData.results[topClass];
    
    // Show feedback
    questionContainer.classList.add('hidden');
    feedbackContainer.classList.remove('hidden');
    feedbackText.textContent = topClassData.feedback;
    
    // Add doubt text after a delay
    setTimeout(() => {
        const doubtElement = document.createElement('p');
        doubtElement.textContent = topClassData.doubt;
        doubtElement.classList.add('doubt-text');
        feedbackContainer.appendChild(doubtElement);
        
        // Add continue button
        const continueBtn = document.createElement('button');
        continueBtn.textContent = "Continue";
        continueBtn.classList.add('answer-btn', 'continue-btn');
        continueBtn.addEventListener('click', () => {
            feedbackContainer.classList.add('hidden');
            questionContainer.classList.remove('hidden');
            currentQuestion++;
            if (currentQuestion < quizData.questions.length) {
                showQuestion();
            } else {
                showResults();
            }
        });
        feedbackContainer.appendChild(continueBtn);
    }, 2000);
}

// Show results
function showResults() {
    questionContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    
    // Find primary result
    let primaryClassType = '';
    let maxScore = -1;
    
    Object.keys(scores).forEach(classType => {
        if (scores[classType] > maxScore) {
            maxScore = scores[classType];
            primaryClassType = classType;
        }
    });
    
    // Find secondary result (excluding primary)
    let secondaryClassType = '';
    maxScore = -1;
    
    Object.keys(scores).forEach(classType => {
        if (classType !== primaryClassType && scores[classType] > maxScore) {
            maxScore = scores[classType];
            secondaryClassType = classType;
        }
    });
    
    // Display results
    const primaryResult = quizData.results[primaryClassType];
    const secondaryResult = quizData.results[secondaryClassType];
    
    primaryClass.textContent = primaryResult.name;
    primaryDescription.textContent = primaryResult.description;
    
    secondaryClass.textContent = `Secondary: ${secondaryResult.name}`;
    secondaryDescription.textContent = secondaryResult.description;
    
    // Show eliminated class if applicable
    if (eliminatedClass) {
        const eliminatedInfo = document.createElement('div');
        eliminatedInfo.innerHTML = `<p><em>Eliminated during scenario: ${quizData.results[eliminatedClass].name}</em></p>`;
        resultContainer.insertBefore(eliminatedInfo, restartBtn);
    }
    
    // Update progress bar to 100%
    progressBar.style.width = '100%';
}

// Event listeners
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', startQuiz);

// Initialize
showStartScreen();

