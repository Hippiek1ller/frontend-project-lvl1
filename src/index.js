import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const numberOfRounds = 3;

export default (description, question) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(`${description}`);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const questionAnswer = question();
    const randomQuestion = car(questionAnswer);
    const correctAnswer = cdr(questionAnswer);
    console.log(`\nQuestion: ${randomQuestion}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
