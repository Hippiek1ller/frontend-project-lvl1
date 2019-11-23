import { cons } from 'hexlet-pairs';

import launchGame from '..';


const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const question = () => {
  const randomNum = Math.floor(Math.random() * 100);
  const correctAnswer = (randomNum % 2 === 0) ? 'yes' : 'no';
  return cons(randomNum, correctAnswer);
};


export default () => launchGame(description, question);
