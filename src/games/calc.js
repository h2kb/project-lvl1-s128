import { cons } from 'hexlet-pairs';
import startGame from '..';
import getRandNum from '../shared/getRandNum';

const rules = 'What is the result of the expression?\n';

const getRandOpr = (n, operand1, operand2) => {
  if (n === 1) {
    return cons(`${operand1} + ${operand2}`, String(operand1 + operand2));
  } else if (n === 2) {
    return cons(`${operand1} - ${operand2}`, String(operand1 - operand2));
  }
  return cons(`${operand1} * ${operand2}`, String(operand1 * operand2));
};

const gameData = () => {
  const randNumber = getRandNum(1, 3);
  const operand1 = getRandNum(0, 10);
  const operand2 = getRandNum(0, 10);
  const question = getRandOpr(randNumber, operand1, operand2);

  return question;
};

export default () => startGame(rules, gameData);
