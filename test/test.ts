const input1 = document.querySelector('#input-1')! as HTMLInputElement;
const input2 = document.querySelector('#input-2')! as HTMLInputElement;
const submit = document.querySelector('#btn-submit');
const result = document.querySelector('#result');

function add(num1: number, num2: number) {
  return num1 + num2;
}

submit?.addEventListener('click', function() {
  const sum = add(+input1.value, +input2.value);
  // result?.innerHTML = sum;
});