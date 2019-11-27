import { cons } from 'hexlet-pairs';
import launchGame from '..';

const description = `Answer "yes" if given number is prime. Otherwise answer "no".
`;

const question = () => {
  const randomNum = Math.floor(Math.random() * 200);
  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };
  return cons(randomNum, isPrime(randomNum));
};

export default () => launchGame(description, question);
