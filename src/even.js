import readlineSync from 'readline-sync';

export default () => {
  console.log(
    'Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".',
  );
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  let i = 0;
  while (i < 3) {
    const random = () => () => Math.floor(Math.random() * 100);
    const randomValue = random()();
    console.log(`Question: ${randomValue}`);
    const answer = readlineSync.question('Your answer: ').toLowerCase();
    const correctAnswer = (answer === 'yes') ? 'no' : 'yes';
    if (answer !== 'yes' || answer !== 'no') {
      console.log(`Let's try again, ${userName} `);
      return false;
    }
    if ((answer === 'no' && (randomValue % 2 === 0)) || (answer === 'yes' && (randomValue % 2 !== 0))) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}!`);
      return false;
    }
    if ((answer === 'no' && (randomValue % 2 !== 0)) || (answer === 'yes' && (randomValue % 2 === 0))) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${userName}!`);
      }
      i += 1;
    }
  }
  return null;
};
