let history = [1, "+", 2, 3, "+", 4, 7];
let operator;
let output = history[history.length - 1]; //keep here for out put use in function

let input = {
  int: 0,
  float: 0.0,
  totalNumber() {
    return this.int + this.float;
  },
};

const caclulatorInput = (number) => {
  input.int = number;
};
const calculatorOperator = (userOperator) => {
  operator = userOperator;
  switch (userOperator) {
    case "+":
      output = input1.totalNumber() + input2.totalNumber();
      break;
    case "-":
      output = input1.totalNumber() - input2.totalNumber();
      break;
    case "%":
      output = input1.totalNumber() / 100;
      break;
    case "x":
      output = input1.totalNumber() * input2.totalNumber();
      break;
    case "+/-":
      if (input1 !== null && userOperator === undefined) {
        input1 = input1 * -1;
      } else {
        input2 = input2 * -1;
      }
      break;
    case "/":
      output = input1 / input2;
      break;
    case ".":

    default:
      return "";
  }
};

caclulatorInput(2);
calculatorOperator("+");
