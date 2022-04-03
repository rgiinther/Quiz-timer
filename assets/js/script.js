//quiz questions
var currentQuestionIndex = 0
var myQuestions= [
    {
        question: "What is the name of the artist who painted Mona Lisa?", 
        answers: ['Van Gogh', 'Picasso', 'Leonardo Davinci'],
         correctAnswer: 'Leonardo Davinci'
    },
    {
        question: "What is the capital of Brazil?",
        answers: ['Brasilia', 'Lima', 'Frankfurt'],
        correctAnswer: 'Brasilia'
    },
    {
        question: "Where is Lincoln Memorial situated in America?",
        answers: ['Mount Vernon', 'Washington D.C.', 'Los Angeles'],
        correctAnswer: 'Washington D.C.'  
    },
    {
        question: "What is the capital of Geremany?",
        answers: ['Berlin', 'Munich', 'Frankfurt'],
        correctAnswer: 'Berlin'
    },   
    {
        question: "What temperature does water boil at?",
        answers: ['32 C', '100 C', '212 C'],
        correctAnswer: '100 C'
    },
    {
        question: "Which country is famous for tulips?",
        answers: ['Netherlands', 'France', 'Norway'],
        correctAnswer: 'Netherlands'
    },
    {
        question: "Which planet is closest to the sun?",
        answers: ['Saturn', 'Mars', 'Mercury'],
        correctAnswer: 'Mercury'
    },
    {
        question: "Who was the first president of the United States",
        answers: ['Washington', 'Lincoln', 'Hamilton'],
        correctAnswer: 'Washington'
    },

    {
        question: "What is the capital of Guatemala",
        answers: ['Guatemala City', 'Antigua', 'Quetzaltenango'],
        correctAnswer: 'Guatemala City'
    },

];
//declare / create variable to hold HTML reference


//Event listener for button
.addeventlistener()

//function to select question     
function showQuestions(){
    var quizQuestion = myQuestions [currentQuestionIndex]
    var questionTitle = document.querySelector('.title')
    questionTitle.textContent = quizQuestion.question

    // for each question...
    for(var i=0; i<myQuestions.length; i++);
    
};


function generateQuiz(){
    showQuestions();
    startButton.onclick = function(){
      
    }

		
		/*// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}*/

	// Combine output list and HTML
	//quizContainer.innerHTML = output.join('');
 //showQuestions(questions, quizContainer);
