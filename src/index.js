#!/usr/bin/env node
import readLineSync from 'readline-sync';

export const greeting = () => '\nWelcome to the Brain Games!';

const randNum = (min, max) => {
  const num = (Math.random() * (max - min)) + min;

  return Math.floor(num);
};

const getUserName = () => {
  const userName = readLineSync.question('May I have your name? ');
  return userName;
};

const getUserAnswer = () => {
  const userAnswer = readLineSync.question('Your answer: ');
  return userAnswer;
};

export const gameEven = () => {
  console.log(greeting());
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = getUserName();
  console.log(`Hello, ${name}!\n`);
  let acc = 0;

  for (let i = 1; i <= 3; i += 1) {
    const number = randNum(0, 100);
    console.log(`Question: ${number}`);
    const answer = getUserAnswer();
    if (number % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
      acc += 1;
    } else if (number % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
      acc += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. 
        Correct answer was 'no'.\nLet's try again, ${name}!\n`);
      break;
    }
  }
  if (acc === 3) {
    console.log(`\nCongratulations, ${name}!`);
  }
};
