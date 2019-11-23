import { cons } from 'hexlet-pairs';

import launchGame from '..';


const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const random = Math.floor(Math.random() * 100);
const correctAnswer = (random % 2 === 0) ? 'yes' : 'no';
const question = cons(random, correctAnswer);


export default launchGame(description, question);
