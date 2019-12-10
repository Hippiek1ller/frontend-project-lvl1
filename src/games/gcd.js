import { cons } from 'hexlet-pairs';
import launchGame from '..';
import randomNumberGenerator from '../utilities/randomNumberGenerator';

const description = 'Find the greatest common divisor of given numbers.';

const question = () => {
  const randomNum1 = randomNumberGenerator(100);
  const randomNum2 = randomNumberGenerator(100);
  const randomNums = `${randomNum1} ${randomNum2}`;

  const smallestNum = (a, b) => (a < b ? a : b);

  const correctAnswer = (a, b) => {
    for (let i = smallestNum(a, b); i > 1; i -= 1) {
      if (a % i === 0 && b % i === 0) {
        return i;
      }
    }
    return 1;
  };

  return cons(randomNums, correctAnswer(randomNum1, randomNum2));
};

export default () => launchGame(description, question);
