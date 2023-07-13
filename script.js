const quizData = [
    {
        question: 'How old is Nigeria?',
        a: '30',
        b: '20',
        c: '45',
        d: '61',
        correct: 'd'
    }, {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'a',
    }, {
        question: 'Who is the president of nigeria?',
        a: 'Atiku Abubakar',
        b: 'Donald Trump',
        c: 'Joe Biden',
        d: 'Muhammadu Buhari',
        correct: 'd'

    }, {
        question: 'What does HTML stands for?',
        a: 'Hyper Text Mark Up Language',
        b: 'Hyper Transfer Meter Language',
        c: 'Hypertext Markup Language',
        d: 'High Text Mini Language',
        correct: 'c'
    }, {
        question: 'What year was Javascript launched?',
        a: '2009',
        b: '1995',
        c: '1976',
        d: '1999',
        correct: 'b'
    }
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
}); 