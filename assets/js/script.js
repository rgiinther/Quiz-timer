function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        //code will go here
    }

    function showResults(questions, quizContainer, resultsContainer){
        //code will go here
    }

    //show the questions
    showQuestions(questions, quizContainer);

    //when use clicks submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
}
//quiz questions

var myQuestions = [
    {
        question: "What is the name of the artist who painted Mona Lisa?", 
        answers: {
            a: 'Van Gogh',
            b: 'Picasso',
            c: 'Leonardo DaVinci'
        },
         correctAnswer: 'c'
    },
    {
        question: "What is the capital of Brazil?",
        answers: {
            a: 'Brasilia',
            b: 'Lima',
            c: 'Frankfurt'
        },
        correctAnswer: 'a'
    },
    {
        question: "Where is Lincoln Memorial situated in America?",
        answers: {
            a: 'Mount Vernon',
            b: 'Washington D.C.',
            c: 'Los Angeles'
        },
        correctAnswer: 'b'  
    },
    {
        question: "What is the capital of Geremany?",
        answers: {
            a: 'Berlin',
            b: 'Munich',
            c: 'Frankfurt'
        },
        correctAnswer: 'a'
    },   
    {
        question: "What temperature does water boil at?",
        answers: {
            a: '30 C',
            b: '100 C',
            c: '212 C'
        },
        correctAnswer: 'b'
    },
    {
        question: "Which country is famous for tulips?",
        answers: {
            a: 'Netherlands',
            b: 'France',
            c: 'Norway'
        },
        correctAnswer: 'a'
    },
    {
        question: "Which planet is closest to the sun?",
        answers: {
            a: 'Saturn',
            b: 'Mars',
            c: 'Mercury'
        },
        correctAnswer: 'b'
    },
    {
        question: "Who was the first president of the United States",
        answers: {
            a: 'Washington',
            b: 'Lincoln',
            c: 'Hamilton'
        },
        correctAnswer: 'a'
    },

    {
        question: "What is the capital of Guatemala",
        answers: {
            a: 'Guatemala City',
            b: 'Antigua',
            c: 'Quetzaltenango'
        },
        correctAnswer: 'a'
    },

];

