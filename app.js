/**
 * QCM Informatique
 * Javascript File
 */

/**
 * The score
 * the numbers of answers
 * the numbers of questions
 */
let score = 0;
let answer = 0;
let number_of_questions = 0;
let score_bonus = 0;

// First The buttons
const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");

//All the questions
const questions = document.getElementsByClassName("question");

//the bonus questions_answered
const bonus = document.getElementsByClassName("bonus");
const good_answer_bonus = document.getElementsByClassName("good_answer_bonus");

//the good answers
const good_answer = document.getElementsByClassName("good_answer");
//The radio button which are good counting_answers
const radio_good = document.getElementsByClassName("good_answer_radio");

//The wrong answers
const wrong_answer = document.getElementsByClassName("wrong_answer");
//the radio button which are wrong counting_answers
const radio_wrong = document.getElementsByClassName("wrong_answer_radio");

//The pre_result--> "wrong answer" or "good answer"
const pre_result = document.getElementsByClassName("pre_result");

//The final result with comment
const result = document.getElementById("result");

/**
 * Function to count haw many questions there are
 * @returns numbers of questions
 */
function counting_questions() {
  for (let i = 0; i < questions.length; i++) {
    number_of_questions++;
  }
  return number_of_questions;
}

/**
 * Function to count the score
 */
function counting_score() {
  for (let i = 0; i < radio_good.length; i++) {
    if (radio_good[i].checked == true) {
      score++;
    }
  }
  for (let j = 0; j < good_answer_bonus.length; j++) {
    if (good_answer_bonus[j].checked == true) {
      score_bonus++;
    } else {
      score_bonus = score_bonus;
    }
  }
  let total_score = score + score_bonus;
  result.textContent =
    "Ton score : " +
    score +
    "/ 30 + bonus : " +
    score_bonus +
    " = " +
    total_score;
}

/*
 * Function to display the pre result
 * -"Bonne réponse"
 * -"Mauvaise réponse"
 * For each questions
 */
function display_results() {
  for (let i = 0; i < pre_result.length; i++) {
    for (let j = 0; j < radio_good.length; j++) {
      if (radio_good[j].checked == true) {
        pre_result[j].textContent = "Bonne réponse!";
        console.log("bonne" + j);
        pre_result[j].classList.add("green", "bold");
      } else {
        pre_result[j].textContent = "Mauvaise réponse !";
        console.log("mauvaise" + j);
        pre_result[j].classList.add("red", "bold");
      }
    }
  }
}

/**
 * Function to color the good answers in green and the wrong answer in red
 */
function coloring_answer() {
  for (let i = 0; i < good_answer.length; i++) {
    good_answer[i].classList.add("green");
  }
  for (let j = 0; j < wrong_answer.length; j++) {
    wrong_answer[j].classList.add("red");
  }
}

/**
 * Function to count if all the questions has been answered
 * If so, the final button 'valider' will be disponible
 * Otherwise, there will be a message wiche will
 * tell the user how many questions left
 */
function counting_answers(number_of_questions) {
  const questions_answered = document.querySelectorAll(".answer");
  //We count how many questions has been answered
  for (let i = 0; i < questions_answered.length; i++) {
    if (questions_answered[i].checked == true) {
      answer++;
    } else {
      answer = answer;
    }
  }

  //If all of them has been answered, the button 'valider' is available
  if (answer == number_of_questions) {
    button3.disabled = false;
    answer = 0;
    message.textContent =
      "Tu as répondu à toutes les questions, tu peux valider";

    //Otherwise the user get a message
  } else {
    let message = document.getElementById("message");
    message.textContent =
      "Attention, tu n'as pas répondu à toutes les questions, il t'en manque: " +
      (number_of_questions - answer);
    answer = 0;
  }
}

button1.addEventListener("click", function (e) {
  e.preventDefault();
  number_of_questions = counting_questions();
  button1.classList.add("hidden");
  hide_show.classList.remove("hidden");
  button2.classList.remove("hidden");
  button3.classList.remove("hidden");
});

/**
 * The first button 'je suis sur de mes réponses'
 * if all the questions has been answered,
 * the button 'valider' is available
 */
button2.addEventListener("click", function (e) {
  e.preventDefault();
  counting_answers(number_of_questions);
});

/**
 * If the user clicks on this butons
 * the answers will be colored
 * and he will see his results
 */
button3.addEventListener("click", function (e) {
  e.preventDefault();
  coloring_answer();
  display_results();
  counting_score();
  button3.disabled = true;
});

// pour masquer et afficher les questions
const hide_show = document.querySelector("#forms");
