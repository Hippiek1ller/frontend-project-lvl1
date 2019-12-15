import { cons } from 'hexlet-pairs';
import launchGame from '..';
import randomNumberGenerator from '../utilities/randomNumberGenerator';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => (num % 2 === 0);
const getQuestionAndAnswer = () => {
  const number = randomNumberGenerator(100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return cons(number, correctAnswer);
};


export default () => launchGame(description, getQuestionAndAnswer);
