let history = [];
let operator = [];
let output = 0;

let input = {
  int: 0,
  float: 0.0,
  totalNumber() {
    return this.int + this.float;
  },
};


//RETRIVING NUMBER DATA - COMPLETED
const caclulatorInput = (number) => {
  if (typeof number === "number" ){
  input.int = number;
  history.push(input.totalNumber());
  } 
  if( operator.length === 0){
    output = input.totalNumber();
    history = [input.totalNumber()];
  }
};

const operatorInput = (oper) => {
    let operatorEndIndex = operator.length - 1;

  if (typeof oper === "string") {
    if (
      oper === "+" ||
      oper === "-" ||
      oper === "/" ||
      oper === "x" ||
      oper === "%" 
    ) {
   
      operator.push(oper);
 
        calculatorOperator(oper);
      
 
    } else if (oper === "=") {
        calculatorOperator(operator[operatorEndIndex]);
    } else {
      throw new Error("Fucntion Not Exist.");
    }
  }
};

const calculatorOperator = (userOperator) => {
  let historyEndIndex = history.length - 1;
  let sum;

  switch (userOperator) {
    case "+":
        if( operator.length > 1){
            output += history[historyEndIndex]
        }
      break;
      case "-":
        if(operator.length > 0){
            sum = output - history[historyEndIndex]
         }else{
            sum = history[historyEndIndex] - history[historyEndIndex-1]
         }        
         output -= sum
      break;
    case "%":
      output = history[historyEndIndex - 2] / 100;
      break;
    case "x":
      output = history[historyEndIndex - 2] + history[historyEndIndex];
      break;
    case "+/-":
      input = history[historyEndIndex - 2] *= -1;
      break;
    case "/":
      output = history[historyEndIndex - 2] / history[historyEndIndex];
      break;
    case ".":

    default:
      return "";
  }
};



caclulatorInput(6);
caclulatorInput(15);
caclulatorInput(24);
operatorInput("+");
caclulatorInput(15);
operatorInput("+");
caclulatorInput(15);
caclulatorInput(35);
operatorInput("+");


console.log(history, operator, output);
