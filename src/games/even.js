import { cons } from 'hexlet-pairs';
import startGame from '..';
import getRandNum from '../shared/getRandNum';

const rules = 'Answer "yes" if number even otherwise answer "no".\n';

const gameData = () => {
  const question = getRandNum(0, 100);
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

export default () => startGame(rules, gameData);
