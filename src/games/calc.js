import readlineSync from 'readline-sync';

export default () => {
  console.log('\nWelcome to the Brain Games!\nWhat is the result of the expression ?');
  const userName = readlineSync.question('\nMay I have your name ? ');
  console.log(`Hello, ${userName}`);
};
