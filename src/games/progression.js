import { cons } from 'hexlet-pairs';
import launchGame from '..';

const description = 'What number is missing in the progression?';
const question = () => {
  const randomDifference = Math.floor(Math.random() * 20) + 1;
  const randomNum = Math.floor(Math.random() * 100);
  const correctAnswer = randomNum + randomDifference * Math.floor(Math.random() * 10);

  const progression = (difference, firstNum) => {
    let result = '';
    for (let i = firstNum; i < firstNum + (10 * difference); i += difference) {
      result = `${result} ${i}`;
    }
    return result.replace(correctAnswer, '..');
  };
  return cons(progression(randomDifference, randomNum), correctAnswer.toString());
};

export default () => launchGame(description, question);
