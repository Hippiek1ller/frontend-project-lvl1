import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

export default (description, question) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(`${description}`);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; i < 3; i += 1) {
    console.log(`\nQuestion: ${car(question())}`);
    const answer = readlineSync.question(`Your answer:${cdr(question())} `).toLowerCase();
    const correctAnswer = cdr(question());
    if (answer === correctAnswer) {
      console.log('Correct!');
    }
    else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.
      Let's try again, ${userName}`);
      return false;
    }
  }
  return null;
};
