import { cons } from 'hexlet-pairs'; // eslint-disable-line
import startGame from '..';
import getRandNum from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const gameData = () => {
  const question = getRandNum(0, 100);
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

export default () => startGame(description, gameData);
