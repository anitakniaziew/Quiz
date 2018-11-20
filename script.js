/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).

EXTRA:

8. After display the result, display the next random question, so that the game never ends (Hint: write a function to this and call it right after displaying the result).

9. After task 8, the game literally never ends! Include the option to quit the game if the user writes 'exit' instead of the answer. In this case don;t call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answet is correct, add 1 point to the score (Hint! power closures but anything other than this would be ok).

11. Display the score in the console. Use yet another method for it.

*/

(function() {
  function Question(content, answers, correctAnswer) {
    this.content = content;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

  Question.prototype.logQuestion = function() {
    console.log(this.content);
    for (i = 0; i < this.answers.length; i++) {
      console.log(i + 1 + ". " + this.answers[i]);
    }
  };

  var questions = [
    new Question(
      "Jaka jest stolica Japonii?",
      ["Tokyo", "Hanoi", "Istanbul"],
      0
    ),
    new Question("Pot z kury to?", ["barszcz", "rosół", "kapuśniak"], 1),
    new Question(
      "Ile kolorów jest na fladze Polski?",
      ["trzy", "cztery", "dwa"],
      2
    )
  ];

  function chooseRandomQuestion(questions) {
    var length = questions.length;
    var random = Math.floor(Math.random() * length);
    return questions[random];
  }

  var currentScore = 0;

  function logScore(score) {
    console.log("Your current score is: " + score);
    console.log("****************************************");
  }

  while (true) {
    var chosenQuestion = chooseRandomQuestion(questions);

    chosenQuestion.logQuestion();

    var answer = prompt(
      "Wybierz poprawną odpowiedź (wskaż numer odpowiedzi) lub wpisz 'exit' aby wyjść"
    );

    var numAnswer = parseInt(answer, 10) - 1; // zamienia str otrzymanego z prompt na liczbę, po odjęciu jeden mamy index poprawnej odpowiedzi

    if (numAnswer === chosenQuestion.correctAnswer) {
      currentScore += 1;
      console.log("Correct answer!");
      logScore(currentScore);
    } else if (answer === "exit") {
      break;
    } else {
      console.log("Try again");
      logScore(currentScore);
    }
  }
})();
