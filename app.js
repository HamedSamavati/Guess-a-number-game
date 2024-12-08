const makeRandomNumber = () => Math.ceil(Math.random() * 100);

const validateInput = (number) => {
  let number_ = +number;
  if (isNaN(number_)) return "Your guess is not a number!";
  else if (number_ > 100 || number_ < 1) return "Your guess is not in range!";
  else return;
};
const checkGuess = (guess, number) => {
  if (guess === number) {
    console.log("You won!");
    return true;
  } else if (guess > number) {
    console.log("Your guess is too big!");
  } else {
    console.log("Your guess is too small!");
  }
};

const play = () => {
  let counter = 10;
  let guess = 0;
  let doContinue = false;
  const number = makeRandomNumber();
  while (counter >= 1) {
    guess = prompt("please guess a number between 1 and 100?");
    console.log(guess);
    if (guess === null) {
      return;
    }
    const validation = validateInput(guess);
    if (validation) {
      console.log(validation);
      continue;
    } else {
      guess = +guess;
      doContinue = checkGuess(guess, number);
      if (doContinue) {
        break;
      }
      counter--;
      console.log(`remaining guesses: ${counter}`);
    }
  }
  doContinue === true ? console.log("Congrats!") : console.log("You lost!");
};

play();
