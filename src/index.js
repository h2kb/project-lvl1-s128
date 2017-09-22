#!/usr/bin/env node
import readLineSync from 'readline-sync';

const randNum = (min, max) => {
  const num = (Math.random() * (max - min)) + min;

  return Math.floor(num);
};

const gameEven = () => {
  console.log('\nWelcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const flow = (n) => {
    if (n === 0) {
      console.log(`\nCongratulations, ${name}!`);
    } else {
      const number = randNum(0, 100);
      console.log(`Question: ${number}`);
      const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';
      const userAnswer = readLineSync.question('Your answer: ');
      if (correctAnswer === userAnswer) {
        console.log('Correct!');
        return flow(n - 1);
      }
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!\n`);
    }

    return false;
  };

  return flow(3);
};

export default gameEven;
