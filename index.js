var readlineSync = require("readline-sync");
const chalk = require('chalk');

var score = 0;

var userName = readlineSync.question("Hi, What is your name? ");
console.log(chalk.cyanBright("Welcome ") + chalk.red(userName.toUpperCase()));
console.log(chalk.yellowBright("Hey, ") + chalk.red(userName.toUpperCase()) + " You know me right?\n" + "\nAnswer the below Questions and Let's see How well do you know me!\n");

var highscore = [
  {
    name: "Shivam",
    score: 5,
  },
   {
    name: "Chandan",
    score: 2,
  }
]

function play(question, answer) {
  var userAnswer = readlineSync.question(question)

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right")
    score++;
  }else {
    console.log("Wrong")
  }
  console.log("current score",score)
  console.log("---------------------")
}

var questions =[ {
  question: "Q. Where do I live? \n Kolkata or Howrah?\n ",
  answer: "Kolkata"
} , {
  question: "Where do I study? \n Iem or Mckv ?\n",
  answer: "Mckv"
},  {
  question: "My fav outdoor game? \n Cricket or Football ? \n",
  answer: "Football"
}, {
  question: "My fav football player? \n Ronaldo or Messi ?\n ",
  answer: "Messi"
}, {
  question: "My fav cricketer? \n Kohli or Dhoni ?\n",
  answer: "Dhoni"
}
]

for(var i = 0 ; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("\nFinal Score is : ", score)


if(score > highscore[0,1].score)
  {
    console.log("Congratulation on  beating the Highscore\n");
    console.log(chalk.bold.yellow("-------------------------------------"));
    console.log(chalk.red.italic("\n**Since you have beaten the highscore, send me a screenshot and I'll update the current Highscorer as you...** "));
    console.log(chalk.bold.yellow("-------------------------------------"));
  } else {
  console.log(chalk.red("Sorry, You haven't beaten the Highscore, Refresh & Try Again\n"));
}
