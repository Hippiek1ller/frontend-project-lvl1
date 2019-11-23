import { cons } from 'hexlet-pairs';
import launchGame from '..';

const description = 'What is the result of the expression?';
const question = () => {
  const randomNum1 = Math.floor(Math.random() * 100);
  const randomNum2 = Math.floor(Math.random() * 100);
  const randomExpression = (num1, num2) => {
    const sum = `${num1} + ${num2}`;
    const multiply = `${num1} * ${num2}`;
    const sub = `${num1} - ${num2}`;
    const randomCase = Math.floor(Math.random() * 3) + 1;
    switch (randomCase) {
      case 1:
        return sum;
      case 2:
        return multiply;
      case 3:
        return sub;
      default:
        return null;
    }
  };
  const expression = randomExpression(randomNum1, randomNum2);
  const evalExpression = eval(expression).toString();
  return cons(expression, evalExpression);
};

export default () => launchGame(description, question);
