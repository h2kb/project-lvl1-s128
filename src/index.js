#!/usr/bin/env node
import { car, cdr } from 'hexlet-pairs';
import readLineSync from 'readline-sync';


export default (rules, gameData) => {
  const numOfQuestions = 3;
  console.log('\nWelcome to the Brain Games!');
  console.log(rules);
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = (n) => {
    if (n === numOfQuestions) {
      console.log(`\nCongratulations, ${userName}!`);
    } else {
      const userData = gameData();
      const question = car(userData);
      console.log(`Question: ${question}`);
      const correctAnswer = cdr(userData);
      const userAnswer = readLineSync.question('Your answer: ');
      if (correctAnswer === userAnswer) {
        console.log('Correct!');
        return iter(n + 1);
      }
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!\n`);
    }
    return false;
  };

  return iter(0);
};
