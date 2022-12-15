var readlineSync = require('readline-sync');

let userName = readlineSync.question("What is your name? ");

console.log("Welcome to this quiz "+ userName + ". Let us see how well do you know me");
console.log("---------------------------------")

let score = 0;

let HighScores = [{ user: "Ram",
                score: 8 },
                  { user: "Vijay",
                  score: 6 },
                  { user: "Pali",
                  score: 10 }]

let quizOnMe = [{question: "Where do I live? ",
            answer: "Bihar"},
           {question: "What is my full name? ",
            answer: "Rahul Pandey"},
           {question: "What is my favourite food? ",
            answer: "Chole"},
           {question: "Which is my favourite film? ",
            answer: "The Godfather"},
           {question: "Which is my favourite sports team? ",
            answer: "FC Barcelona"}]

for(let i = 0; i < quizOnMe.length; i++){
  startQuiz(quizOnMe[i].question, quizOnMe[i].answer);
}


    
function startQuiz(question, answer){
  let userAnswer = readlineSync.question(question);
  let rightAnswer = answer;

  if(userAnswer === rightAnswer){
    console.log("Correct Answer!");
    score = score + 2;
      }
  else{
    console.log("Wrong answer! The correct answer is: ", rightAnswer);
    score = score - 2;
      }

  console.log("--------------------------------------")
  console.log("Your score is ", score);
  console.log("--------------------------------------")
}

console.log("--------------------------------------")
console.log("YOUR FINAL SCORE IS ::: ", score);

console.log("--------------------------------------")
console.log("--------------------------------------")

console.log("Highest Scores: ");
console.log("--------------------------------------")

for (let k = 0; k< HighScores.length; k++){
  console.log(HighScores[k].user + " :: " + HighScores[k].score);
}
console.log("\n Please send me the screenshot of your score and I will update it.")
