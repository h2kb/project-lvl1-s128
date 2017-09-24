import { cons } from 'hexlet-pairs';
import startGame from '..';
import getRandNum from '../utils';

const description = 'What number is missing in this progression?';
const lengthOfProgression = 10;

const getProgression = (s, st, l) => {
  let progression = [];

  const iter = (start, step, length) => {
    if (length === lengthOfProgression) {
      return progression;
    }
    progression = progression.push(start);

    return iter(s + st, st, l + 1);
  };

  return progression;
};

const gameData = () => {
  const startOfProgression = getRandNum(10, 20);
  const stepOfProgression = getRandNum(1, 5);
  const progression = getProgression(startOfProgression, stepOfProgression, 0);
  const correctAnswer = '55';

  return cons(progression.join(' '), correctAnswer);
};

export default () => startGame(description, gameData);
