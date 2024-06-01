let currentCategory;
let currentQuestionIndex = 0;
let score = 0;
let startTime, endTime;

const questions = {
    "Pipes and Cisterns": [
        { 
            question: "A pipe can fill a tank in 5 hours. Due to a leakage, it takes 30 minutes more to fill the tank. What is the time taken by the leakage to empty the tank?",
            options: ["3 hours", "3.5 hours", "4 hours", "4.5 hours"], 
            answer: 1 
        },
        { 
            question: "A tap can fill a tank in 6 hours and another tap can fill the same tank in 8 hours. How long will it take to fill the tank if both taps are opened together?", 
            options: ["3 hours", "4 hours", "6 hours", "12 hours"], 
            answer: 1 
        },
        { 
            question: "A pipe can fill a tank in 10 hours. Due to a leak in the tank, it takes 2 hours more to fill the tank. How long will it take to empty the tank if the leak is there?", 
            options: ["15 hours", "20 hours", "25 hours", "30 hours"], 
            answer: 3 
        },
        { 
            question: "A pipe can fill a tank in 12 hours. After half the tank is filled, three more similar pipes are opened. What is the total time taken to fill the tank completely?", 
            options: ["3 hours", "4 hours", "6 hours", "8 hours"], 
            answer: 2 
        },
        { 
            question: "A pipe can fill a tank in 10 hours and another pipe can empty the tank in 20 hours. If both pipes are opened together, then how long will it take to fill the tank?", 
            options: ["12 hours", "15 hours", "16 hours", "18 hours"], 
            answer: 3 
        },
        { 
            question: "A pipe can fill a tank in 8 hours. The tap is opened to fill the tank, but due to a leak in the tank, it takes 2 hours more to fill the tank. How long will it take to fill the tank with the leak?", 
            options: ["10 hours", "12 hours", "14 hours", "16 hours"], 
            answer: 1 
        },
        { 
            question: "A pipe can fill a tank in 12 hours and another pipe can empty the tank in 16 hours. If both pipes are opened together, then how long will it take to fill the tank?", 
            options: ["8 hours", "10 hours", "12 hours", "14 hours"], 
            answer: 2 
        },
        { 
            question: "A pipe can fill a tank in 15 hours and another pipe can empty the tank in 20 hours. If both pipes are opened together, then how long will it take to fill the tank?", 
            options: ["10 hours", "12 hours", "15 hours", "18 hours"], 
            answer: 3 
        },
        { 
            question: "A pipe can fill a tank in 20 hours. Another pipe can empty the tank in 30 hours. If both pipes are opened together, then how long will it take to fill the tank?", 
            options: ["15 hours", "18 hours", "24 hours", "36 hours"], 
            answer: 2 
        },
        { 
            question: "A pipe can fill a tank in 6 hours and another pipe can empty the tank in 8 hours. If both pipes are opened together for 2 hours and then the pipe which fills the tank is closed, how long will it take to empty the tank?", 
            options: ["4 hours", "6 hours", "8 hours", "10 hours"], 
            answer: 0 
        },
        // Add more questions here...
    ],
    "Probability": [{ 
        question: "What is the probability of rolling a six on a fair six-sided die?",
        options: ["1/6", "1/3", "1/2", "1/5"], 
        answer: 0 
    },
    { 
        question: "If two coins are flipped, what is the probability of getting at least one tail?",
        options: ["1/4", "1/3", "1/2", "3/4"], 
        answer: 3 
    },
    { 
        question: "What is the probability of drawing a red card from a standard deck of cards?",
        options: ["1/4", "1/2", "2/3", "1/3"], 
        answer: 3 
    },
    { 
        question: "If you roll a fair six-sided die twice, what is the probability of getting a sum of 7?",
        options: ["1/6", "1/3", "1/12", "1/5"], 
        answer: 2 
    },
    { 
        question: "In a group of 20 people, what is the probability that at least two people share the same birthday?",
        options: ["50%", "80%", "95%", "100%"], 
        answer: 2 
    },
    { 
        question: "If a bag contains 5 red marbles and 3 blue marbles, what is the probability of drawing a red marble?",
        options: ["3/8", "5/8", "1/2", "2/5"], 
        answer: 1 
    },
    { 
        question: "What is the probability of getting a sum of 9 when rolling two fair six-sided dice?",
        options: ["1/12", "1/9", "1/6", "1/8"], 
        answer: 0 
    },
    { 
        question: "If you draw a card from a standard deck of 52 cards, what is the probability of drawing a face card (jack, queen, or king)?",
        options: ["1/13", "3/13", "1/4", "3/4"], 
        answer: 1 
    },
    { 
        question: "What is the probability of flipping a fair coin and getting heads?",
        options: ["1/2", "1/3", "2/3", "1/4"], 
        answer: 0 
    },
    { 
        question: "If you roll a fair six-sided die, what is the probability of getting an even number?",
        options: ["1/6", "1/3", "1/2", "2/3"], 
        answer: 2 
    },],
    "Problems on age": [{
        question: "A man is 3 times as old as his son. After 15 years, he will be twice as old as his son. Find their present ages.",
        options: ["a) Father's age: 45 years, Son's age: 15 years", "b) Father's age: 30 years, Son's age: 10 years", "c) Father's age: 60 years, Son's age: 20 years", "d) Father's age: 50 years, Son's age: 25 years"],
        correctAnswer: 1
    },
    {
        question: "The sum of the ages of a father and his son is 45 years. Five years ago, the father was 9 times as old as his son. Find their present ages.",
        options: ["a) Father's age: 40 years, Son's age: 5 years", "b) Father's age: 35 years, Son's age: 10 years", "c) Father's age: 30 years, Son's age: 15 years", "d) Father's age: 25 years, Son's age: 20 years"],
        correctAnswer: 1
    },
    {
        question: "The ages of A, B and C are in the ratio 3:4:5. If the sum of their ages is 72, find their present ages.",
        options: ["a) A: 18 years, B: 24 years, C: 30 years", "b) A: 21 years, B: 28 years, C: 35 years", "c) A: 24 years, B: 32 years, C: 40 years", "d) A: 27 years, B: 36 years, C: 45 years"],
        correctAnswer: 2
    },
    {
        question: "The sum of the present ages of a father and his son is 60 years. Six years ago, the ratio of their ages was 5:1. Find their present ages.",
        options: ["a) Father's age: 42 years, Son's age: 18 years", "b) Father's age: 45 years, Son's age: 15 years", "c) Father's age: 48 years, Son's age: 12 years", "d) Father's age: 50 years, Son's age: 10 years"],
        correctAnswer: 0
    },
    {
        question: "A man is 24 years older than his son. In 5 years, he will be twice as old as his son. Find their present ages.",
        options: ["a) Father's age: 40 years, Son's age: 16 years", "b) Father's age: 45 years, Son's age: 21 years", "c) Father's age: 48 years, Son's age: 24 years", "d) Father's age: 50 years, Son's age: 26 years"],
        correctAnswer: 2
    },
    {
        question: "The age of a father is twice the sum of the ages of his two children. If the age of the father is 48 years and one of the children is 10 years old, find the age of the other child.",
        options: ["a) 4 years", "b) 8 years", "c) 12 years", "d) 16 years"],
        correctAnswer: 1
    },
    {
        question: "Ten years ago, the ages of A and B were in the ratio 5:7. If the sum of their present ages is 48 years, find their present ages.",
        options: ["a) A: 20 years, B: 28 years", "b) A: 22 years, B: 30 years", "c) A: 24 years, B: 32 years", "d) A: 26 years, B: 34 years"],
        correctAnswer: 0
    },
    {
        question: "A father is 30 years older than his son. After 10 years, the father will be twice as old as his son. Find their present ages.",
        options: ["a) Father's age: 40 years, Son's age: 10 years", "b) Father's age: 45 years, Son's age: 15 years", "c) Father's age: 50 years, Son's age: 20 years", "d) Father's age: 55 years, Son's age: 25 years"],
        correctAnswer: 2
    },
    {
        question: "The present age of a father is three times the present age of his son. The sum of their present ages is 56 years. Find their present ages.",
        options: ["a) Father's age: 42 years, Son's age: 14 years", "b) Father's age: 45 years, Son's age: 15 years", "c) Father's age: 48 years, Son's age: 16 years", "d) Father's age: 51 years, Son's age: 17 years"],
        correctAnswer: 0
    },
    {
        question: "The ages of two persons differ by 16 years. 6 years ago, the elder one was 3 times as old as the younger one. Find their present ages.",
        options: ["a) Elder one: 26 years, Younger one: 10 years", "b) Elder one: 30 years, Younger one: 14 years", "c) Elder one: 34 years, Younger one: 18 years", "d) Elder one: 38 years, Younger one: 22 years"],
        correctAnswer: 1
    }],
    "Profit and loss": [{
        question: "A man bought a watch for $500 and sold it for $600. Find his gain percentage.",
        options: ["a) 5%", "b) 10%", "c) 15%", "d) 20%"],
        correctAnswer: 3
    },
    {
        question: "By selling a bicycle for $1200, a shopkeeper gains 20%. Find the cost price of the bicycle.",
        options: ["a) $960", "b) $1000", "c) $1100", "d) $1150"],
        correctAnswer: 1
    },
    {
        question: "A man sells an article for $840, thereby losing 20%. Find the cost price of the article.",
        options: ["a) $1000", "b) $1050", "c) $1100", "d) $1200"],
        correctAnswer: 3
    },
    {
        question: "A shopkeeper sells an article for $1150 at a profit of 15%. Find the cost price of the article.",
        options: ["a) $950", "b) $1000", "c) $1050", "d) $1100"],
        correctAnswer: 2
    },
    {
        question: "A man buys a car for $5000 and sells it for $6000. Find his gain percentage.",
        options: ["a) 10%", "b) 15%", "c) 20%", "d) 25%"],
        correctAnswer: 2
    },
    {
        question: "A man sells a book for $350 at a profit of 40%. Find the cost price of the book.",
        options: ["a) $200", "b) $225", "c) $250", "d) $275"],
        correctAnswer: 1
    },
    {
        question: "By selling a radio for $800, a shopkeeper loses 20%. Find the cost price of the radio.",
        options: ["a) $1000", "b) $1050", "c) $1100", "d) $1200"],
        correctAnswer: 0
    },
    {
        question: "A man sold an article for $360, thereby losing 10%. Find the cost price of the article.",
        options: ["a) $400", "b) $400", "c) $410", "d) $420"],
        correctAnswer: 2
    },
    {
        question: "A trader marks his goods 40% above the cost price and allows a discount of 15% on the marked price. Find his gain percentage.",
        options: ["a) 22%", "b) 25%", "c) 28%", "d) 30%"],
        correctAnswer: 2
    },
    {
        question: "A shopkeeper sells a book for $240 at a loss of 20%. Find the cost price of the book.",
        options: ["a) $200", "b) $220", "c) $240", "d) $260"],
        correctAnswer: 3
    }]
};

function startQuiz() {
    const name = document.getElementById("name").value;
    if (name.trim() === "") {
        alert("Please enter your name.");
        return;
    }
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    startTime = new Date();
    displayQuestion();
}

function startCategory(category) {
    currentCategory = category;
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    startTime = new Date();
    displayQuestion();
}

function displayQuestion() {
    if (!currentCategory || !questions[currentCategory] || currentQuestionIndex >= questions[currentCategory].length) {
      return;
    }
    const question = questions[currentCategory][currentQuestionIndex];
    const questionNumber = currentQuestionIndex + 1;
    document.getElementById("question-text").textContent = question.question;
    document.getElementById("question-number").textContent = `${questionNumber}/${questions[currentCategory].length}`;
    
    const optionButtons = document.querySelectorAll('.option');
    for (let i = 0; i < question.options.length; i++) {
      optionButtons[i].textContent = question.options[i];
    }
}
  
  function selectOption(optionIndex) {
    const question = questions[currentCategory][currentQuestionIndex];
    if (optionIndex === question.answer) {
      score++;
    }
    nextQuestion();
  }

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentCategory].length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    endTime = new Date();
    const totalTime = (endTime - startTime) / 1000; // in seconds
    const totalQuestions = questions[currentCategory].length;
    const attempt = totalQuestions;
    const correctAnswers = score;
    const wrongAnswers = totalQuestions - correctAnswers;
    const percentageScore = (score / totalQuestions) * 100;

    document.getElementById('participant-name').textContent = document.getElementById("name").value;
    document.getElementById('total-time').textContent = totalTime;
    document.getElementById('total-questions').textContent = totalQuestions;
    document.getElementById('attempt').textContent = attempt;
    document.getElementById('correct-questions').textContent = correctAnswers;
    document.getElementById('wrong-questions').textContent = wrongAnswers;
    document.getElementById('score-percentage').textContent = percentageScore.toFixed(2);

    document.getElementById('result-container').style.display = 'block';
    document.getElementById('quiz-page').style.display = 'none';
}
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    displayQuestion();
}

function goToHome() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'none';
    document.getElementById('home-page').style.display = 'block';
}
document.getElementById('quiz-page').addEventListener('click', function() {
    startTimer();
});

// Function to start the timer
function startTimer() {
    let seconds = 0;
    const timerInterval = setInterval(() => {
        seconds++;
        document.getElementById('timer').textContent = seconds;
    }, 1000);
}






