import { cons } from 'hexlet-pairs';
import launchGame from '..';
import randomNumberGenerator from '../utilities/randomNumberGenerator';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => (num % 2 === 0);
const question = () => {
  const randomNum = randomNumberGenerator(100);
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return cons(randomNum, correctAnswer);
};


export default () => launchGame(description, question);
