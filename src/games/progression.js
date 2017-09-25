import { cons } from 'hexlet-pairs'; // eslint-disable-line
import startGame from '..';
import getRandNum from '../utils';

const description = 'What number is missing in this progression?';
const lengthOfProgression = 10;

const getProgression = (startOfProgression, stepOfProgression) => {
  const progression = [];

  const iter = (start, step, length) => {
    if (length === lengthOfProgression) {
      return progression;
    }
    progression.push(start);

    return iter(start + step, step, length + 1);
  };

  return iter(startOfProgression, stepOfProgression, 0);
};

const hideElement = (progression) => {
  const newProgression = progression;
  const idOfHidden = getRandNum(0, 10);
  const hidden = String(progression[idOfHidden]);
  newProgression[idOfHidden] = '..';

  return cons(newProgression.join(' '), hidden);
};

const gameData = () => {
  const startOfProgression = getRandNum(10, 20);
  const stepOfProgression = getRandNum(1, 5);
  const progression = hideElement(getProgression(startOfProgression, stepOfProgression));

  return progression;
};

export default () => startGame(description, gameData);
