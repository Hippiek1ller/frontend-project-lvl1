import { cons } from 'hexlet-pairs';
import launchGame from '..';
import randomNumberGenerator from '../utilities/randomNumberGenerator';

const description = 'What number is missing in the progression?';
const getQuestionAndAnswer = () => {
  const randomDifference = randomNumberGenerator(20, 1);
  const randomNum = randomNumberGenerator(100);
  const numberOfElements = 10;
  const correctAnswer = randomNum + randomDifference * randomNumberGenerator(numberOfElements);

  const progression = (difference, firstNum) => {
    let result = '';
    for (let i = firstNum; i < firstNum + numberOfElements * difference; i += difference) {
      result = `${result} ${i}`;
    }
    return result.replace(correctAnswer, '..');
  };
  return cons(progression(randomDifference, randomNum), correctAnswer);
};

export default () => launchGame(description, getQuestionAndAnswer);
