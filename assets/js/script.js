//quiz w/ start page, button that starts quiz, 
//questions to display after start
//questions will display text and answers w/ button 
//function that takes to next question after rprevious respose

//set attribute, create element, append child 


//quiz questions
var currentQuestionIndex = 0
var myQuestions= [
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

    timeLeft = 85;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;
        //proceed to end the game function when timer is below 0 at any time
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame(); 
        }
    }, 1000); //set pacing of timer to be 1000 millisecond per interval change

    next();
}

//stop the timer to end the game
function endGame() {
    clearInterval(timer);

    //create message within java for game over screen
    var quizContent = `
    <h2>Game over!</h2>
    <h3>You got ` + score +  ` /100!</h3>
    <h3>That means you got ` + score / 20 +  ` out of 5 questions correct!</h3>
    <input type="text" id="name" placeholder="Initials"> 
    <button onclick="setScore()">Set score!</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
}



