import { cons } from 'hexlet-pairs';
import startGame from '..';
import getRandNum from '../utils';

const description = 'What is the result of the expression?\n';

const getPairQuestionAnswer = (numOfOperation, operand1, operand2) => {
  if (numOfOperation === 1) {
    return cons(`${operand1} + ${operand2}`, String(operand1 + operand2));
  } else if (numOfOperation === 2) {
    return cons(`${operand1} - ${operand2}`, String(operand1 - operand2));
  }
  return cons(`${operand1} * ${operand2}`, String(operand1 * operand2));
};

const gameData = () => {
  const numOfOperation = getRandNum(1, 3);
  const operand1 = getRandNum(0, 10);
  const operand2 = getRandNum(0, 10);
  const pairQuestionAnswer = getPairQuestionAnswer(numOfOperation, operand1, operand2);

  return pairQuestionAnswer;
};

export default () => startGame(description, gameData);
