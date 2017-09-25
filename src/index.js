#!/usr/bin/env node
import { car, cdr } from 'hexlet-pairs'; // eslint-disable-line
import readLineSync from 'readline-sync'; // eslint-disable-line

const numOfQuestions = 3;

const gameFlow = (gameData) => {
  const iter = (countOfQuestions) => {
    if (countOfQuestions === numOfQuestions) {
      return true;
    }
    const userData = gameData();
    const question = car(userData);
    console.log(`Question: ${question}`);
    const correctAnswer = cdr(userData);
    const userAnswer = readLineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      return iter(countOfQuestions + 1);
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  };

  return iter(0);
};

export default (description, gameData) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(description);
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const result = (gameFlow(gameData)) ? `Congratulations, ${userName}!\n` : `Let's try again, ${userName}!\n`;

  console.log(result);
};
