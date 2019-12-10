import { cons } from 'hexlet-pairs';
import launchGame from '..';
import randomNumberGenerator from '../utilities/randomNumberGenerator';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const question = () => {
  const randomNum = randomNumberGenerator(200);
  const correctAnswer = isPrime(randomNum);
  return cons(randomNum, correctAnswer);
};

export default () => launchGame(description, question);
