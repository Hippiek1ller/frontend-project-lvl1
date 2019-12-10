import { cons } from 'hexlet-pairs';
import launchGame from '..';
import randomNumberGenerator from '../utilities/randomNumberGenerator';

const description = 'What is the result of the expression?';
const question = () => {
  const randomNum1 = randomNumberGenerator(100);
  const randomNum2 = randomNumberGenerator(100);
  const randomExpression = (num1, num2) => {
    const randomCase = randomNumberGenerator(3, 1);
    let val;
    let valAnswer;
    switch (randomCase) {
      case 1:
        val = num1 + num2;
        valAnswer = `${num1} + ${num2}`;
        break;
      case 2:
        val = num1 - num2;
        valAnswer = `${num1} - ${num2}`;
        break;
      case 3:
        val = num1 * num2;
        valAnswer = `${num1} * ${num2}`;
        break;
      default:
        console.log('Unexpected error');
    }
    return cons(valAnswer, val);
  };
  return randomExpression(randomNum1, randomNum2);
};

export default () => launchGame(description, question);
