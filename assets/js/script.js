//quiz w/ start page, button that starts quiz, 
//questions to display after start
//questions will display text and answers w/ button 
//function that takes to next question after rprevious respose

//set attribute, create element, append child 


//quiz questions
var currentQuestion = 0
var quizQuestions= [
    {
        question: "What is the name of the artist who painted Mona Lisa?", 
        choices: ['Van Gogh', 'Picasso', 'Leonardo Davinci'],
        answer: 'Leonardo Davinci'
    },
    {
        question: "What is the capital of Brazil?",
        choices: ['Brasilia', 'Lima', 'Frankfurt'],
        answer: 'Brasilia'
    },
    {
        question: "Where is Lincoln Memorial situated in America?",
        choices: ['Mount Vernon', 'Washington D.C.', 'Los Angeles'],
        answer: 'Washington D.C.'  
    },
    {
        question: "What is the capital of Geremany?",
        choices: ['Berlin', 'Munich', 'Frankfurt'],
        answer: 'Berlin'
    },   
    {
        question: "What temperature does water boil at?",
        choices: ['32 C', '100 C', '212 C'],
        answer: '100 C'
    },
    {
        question: "Which country is famous for tulips?",
        choices: ['Netherlands', 'France', 'Norway'],
        answer: 'Netherlands'
    },
    {
        question: "Which planet is closest to the sun?",
        choices: ['Saturn', 'Mars', 'Mercury'],
        answer: 'Mercury'
    },
    {
        question: "Who was the first president of the United States",
        choices: ['Washington', 'Lincoln', 'Hamilton'],
        answer: 'Washington'
    },

    {
        question: "What is the capital of Guatemala",
        choices: ['Guatemala City', 'Antigua', 'Quetzaltenango'],
        answer: 'Guatemala City'
    },

]; 

//create variable for the functions of the timer and scores
var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

//start countdown timer once 'start' button is pressed
function start() {

    timeLeft = 100;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;
        //proceed to end the game function when timer is below 0 at any time
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame(); 
        }
    }, 5000); //set pacing of timer to be 1000 millisecond per interval change

    next();
}

//stop the timer to end the game
function endGame() {
    clearInterval(timer);

    //create message within java for game over screen
    var quizContent = `
    <h2>Game over!</h2>
    <h3>You got ` + score +  ` /100!</h3>
    <h3>That means you got ` + score / 20 +  ` out of 9 questions correct!</h3>
    <input type="text" id="name" placeholder="Initials"> 
    <button onclick="setScore()">Set score!</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
}

//store the scores on local storage
function setScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName",  document.getElementById('name').value);
    getScore();
}

function getScore() {
    //create message body within java for score screen
    var quizContent = `
    <h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
    <h1>` + localStorage.getItem("highscore") + `</h1><br> 
    
    <button onclick="clearScore()">Clear score!</button><button onclick="resetGame()">Play Again!</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
}
//clear score name and value in the local storage if the user selects 'clear score'
function clearScore() {
    localStorage.setItem("highscore", "");
    localStorage.setItem("highscoreName", "");

    resetGame();
}

//reset the game 
function resetGame() {
    clearInterval(timer);
    score = 0;
    currentQuestion = -1;
    timeLeft = 0;
    timer = null;

    document.getElementById("timeLeft").innerHTML = timeLeft;

//create message body within java
    var quizContent = `
    <h1>
        JavaScript Quiz!
    </h1>
    <h3>
        Click to play!   
    </h3>
    <button onclick="start()">Start!</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
}

//deducts 15 seconds from the timer if user chooses an incorrect answer
function incorrect() {
    timeLeft -= 15; 
    next();
}

//increases the score by 20 pts if the user chooses the correct answer
function correct() {
    score += 20;
    next(); 
}

//loops through the questions 
function next() {
    currentQuestion++;

    if (currentQuestion > quizQuestions.length - 1) {
        endGame();
        return;
    }

    var quizContent = "<h2>" + quizQuestions[currentQuestion].question + "</h2>"

    for (var buttonLoop = 0; buttonLoop < quizQuestions[currentQuestion].choices.length; buttonLoop++) {
        var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>"; 
        buttonCode = buttonCode.replace("[CHOICE]", quizQuestions[currentQuestion].choices[buttonLoop]);
        if (quizQuestions[currentQuestion].choices[buttonLoop] === quizQuestions[currentQuestion].answer) {
            buttonCode = buttonCode.replace("[ANS]", "correct()");
        } else {
            buttonCode = buttonCode.replace("[ANS]", "incorrect()");
        }
        quizContent += buttonCode
    }


    document.getElementById("quizBody").innerHTML = quizContent;
}
