function addTwoNumber(n1: number, n2: number, bool1: boolean, phrase: string) {
  const result = n1 + n2;
  
  if(bool1) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 3.14159;
const bool1 = true;
const phrase = 'The result is: ';


addTwoNumber(number1, number2, bool1, phrase);

// console.log(sum);