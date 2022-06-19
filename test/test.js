var input1 = document.querySelector('#input-1');
var input2 = document.querySelector('#input-2');
var submit = document.querySelector('#btn-submit');
function add(num1, num2) {
    return num1 + num2;
}
submit === null || submit === void 0 ? void 0 : submit.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value));
});
