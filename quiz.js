var readlineSync = require("readline-sync");
var userName = readlineSync.question("what is ur name? ");
var score = 0;
console.log("Hello! "+userName+" welcome to the quiz on Aptitude-reasoning by aditi");


function quiz(question,answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer == answer)
  {
    console.log("you're right!");
    score = score +1;
   
  }
  else
    console.log("sorry!you're wrong");
  
   console.log("your score is:",score);
  
}

var Que = [{
  question: "Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next? ",
  
  answer: "10"
},
{
  question: "The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is: ",
  answer: "16"
},
{
  question: "The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child? ",
  answer: "4"
},
{
  question: "Find the odd man out: 3, 5, 11, 14, 17, 21 ",
  answer: "14"
},
{
  question: "In a 100 m race, A can give B 10 m and C 28 m. In the same race B can give C: ",
  answer: "20"
}];


var highScores = [
  {
    name: "Aditi",
     score: 5,
  },

  {
    name: "Anushree",
    score: 4,
  },
]




for(var i=0 ; i<Que.length ; i++)
  {   console.log("----------------------------");
    var currentque = Que[i];
    quiz(currentque.question, currentque.answer)
  }

function show() {
  console.log("Yep! You Scored : ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it...");

  highScores.map(score => console.log(score.name, " : ", score.score))
}
show();
if(score>=5)
{
  console.log("congrats!" +userName+ " you got highscore.")
}