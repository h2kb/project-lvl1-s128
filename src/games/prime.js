import { cons } from 'hexlet-pairs'; // eslint-disable-line
import startGame from '..';
import getRandNum from '../utils';

const description = 'Answer "yes" if number prime otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  const iter = (divisor) => {
    if (num % divisor === 0) {
      return false;
    } else if (divisor > num / 2) {
      return true;
    }

    return iter(divisor + 1);
  };
  return iter(2);
};

const gameData = () => {
  const question = getRandNum(2, 20);
  const correctAnswer = (isPrime(question)) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

export default () => startGame(description, gameData);
