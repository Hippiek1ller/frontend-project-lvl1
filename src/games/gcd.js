import { cons } from 'hexlet-pairs';
import launchGame from '..';
import randomNumberGenerator from '../utilities/randomNumberGenerator';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivsor = (a, b) => {
  const smallestNum = (a < b ? a : b);
  for (let i = smallestNum(a, b); i > 1; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
  return 1;
};

const getQuestionAndAnswer = () => {
  const number1 = randomNumberGenerator(100);
  const number2 = randomNumberGenerator(100);
  const twoInteregs = `${number1} ${number2}`;
  const correctAnswer = getGreatestCommonDivsor(number1, number2);
  return cons(twoInteregs, correctAnswer);
};

export default () => launchGame(description, getQuestionAndAnswer);
