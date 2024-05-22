const questions = [
    {
      question: "Which is the largest animal in the world?", 
      answers: [
        { text: "Shark", correct: false },
        { text: "Blue whale", correct: true },
        { text: "Tiger", correct: false },
        { text: "Elephant", correct: false }
      ]
    },
    {
        question: "Who is the richest person?",
        answers: [
            { text: "Elon Musk", correct: true },
            { text: "Bill Gates", correct: false },
            { text: "Mukesh Ambani", correct: false },
            { text: "Adani", correct: false }
        ]
    },
    {
        question: "Where is the Largest desert Located?",
        answers: [
            { text: "Sahara", correct: true },
            { text: "Thar", correct: false },
            { text: "Gobi", correct: false },
            { text: "Antarctica", correct: false }
        ]
    }
];


const question = document.getElementById("question") ;
const answerbut = document.getElementById("answers");
const nextbut = document.getElementById("next-but");

let curquestionind =0;
let score = 0;
function startquiz(){
    curquestionind = 0;
    score = 0;
    nextbut.innerHTML="Next";
    showquestion();
}

function showquestion(){
    let curquestion = questions[curquestionind];
    let questionno = curquestionind + 1;
    question.innerHTML = questionno + ')' + curquestion.question;
    answerbut.innerHTML="";

    curquestion.answers.forEach(answer =>
    {

        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("but");
        answerbut.appendChild(button);

    });
}

startquiz();