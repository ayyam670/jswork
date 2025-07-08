let aBtn = document.querySelector('#add');
let sBtn = document.querySelector('#sub');
let mBtn = document.querySelector('#multy');
let dBtn = document.querySelector('#divid');

let ipNum1 = document.querySelector('#num1');
let ipNum2 = document.querySelector('#num2');

let resultDiv = document.querySelector('#result');

aBtn.onclick = function sum()
{
  let su1 = parseInt(ipNum1.value);
  let su2 = parseInt(ipNum2.value);
  let result = su1 + su2;

    resultDiv.value = result;
}

sBtn.onclick = function minus()
{
  let su1 = parseInt(ipNum1.value);
  let su2 = parseInt(ipNum2.value);
  let result = su1 - su2;

    resultDiv.value = result;
}

mBtn.onclick = function gob()
{
  let su1 = parseInt(ipNum1.value);
  let su2 = parseInt(ipNum2.value);
  let result = su1 * su2;

    resultDiv.value = result;
}

dBtn.onclick = function nanu()
{
  let su1 = parseInt(ipNum1.value);
  let su2 = parseInt(ipNum2.value);
  let result = su1 / su2;

    resultDiv.value = result;
}