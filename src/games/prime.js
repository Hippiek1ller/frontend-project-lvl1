import { cons } from 'hexlet-pairs';
import launchGame from '..';
import randomNumberGenerator from '../utilities/randomNumberGenerator';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const getQuestionAndAnswer = () => {
  const number = randomNumberGenerator(200);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return cons(number, correctAnswer);
};

export default () => launchGame(description, getQuestionAndAnswer);
