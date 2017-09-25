import { cons } from 'hexlet-pairs';
import startGame from '..';
import getRandNum from '../utils';

const description = 'Balance the given number.';

const sumOfSequenceOfNum = (numStr) => {
  let result = 0;

  for (let i = 0; i < numStr.length; i += 1) {
    result += Number(numStr[i]);
  }

  return result;
};

const balanceNum = (num) => {
  const sumOfNum = sumOfSequenceOfNum(String(num));
  const lengthOfNum = String(num).length;

  const iter = (sum, count, acc) => {
    if (count === 0) {
      return String(acc).split('').sort().join('');
    }
    const nextIterNum = Math.floor(sum / count);
    const result = acc + String(nextIterNum);

    return iter(sum - nextIterNum, count - 1, result);
  };

  return iter(sumOfNum, lengthOfNum, '');
};

const gameData = () => {
  const question = getRandNum(100, 400);
  const correctAnswer = balanceNum(question);

  return cons(question, correctAnswer);
};

export default () => startGame(description, gameData);
