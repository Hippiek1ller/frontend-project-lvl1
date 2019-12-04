import { cons } from 'hexlet-pairs';
import launchGame from '..';

const description = 'What is the result of the expression?';
const question = () => {
  const randomNum1 = Math.floor(Math.random() * 100);
  const randomNum2 = Math.floor(Math.random() * 100);
  const randomExpression = (num1, num2) => {
    const randomCase = Math.floor(Math.random() * 3) + 1;
    let val;
    let valAnswer;
    if (randomCase === 1) {
      val = num1 + num2;
      valAnswer = `${num1} + ${num2}`;
    }
    if (randomCase === 2) {
      val = num1 - num2;
      valAnswer = `${num1} - ${num2}`;
    }
    if (randomCase === 3) {
      val = num1 * num2;
      valAnswer = `${num1} * ${num2}`;
    }
    return cons(valAnswer, val);
  };
  return randomExpression(randomNum1, randomNum2);
};

export default () => launchGame(description, question);
