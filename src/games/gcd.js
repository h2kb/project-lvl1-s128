import { cons } from 'hexlet-pairs';
import startGame from '..';
import getRandNum from '../utils';

const description = 'Find the greatest common divisor of given numbers\n';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return gcd(num2, num1 % num2);
};

const gameData = () => {
  const num1 = getRandNum(0, 10);
  const num2 = getRandNum(0, 10);
  const question = `${num1} and ${num2}`;
  const correctAnswer = String(gcd(num1, num2));

  return cons(question, correctAnswer);
};

export default () => startGame(description, gameData);
