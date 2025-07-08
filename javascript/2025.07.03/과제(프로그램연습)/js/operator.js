let aBtn = document.querySelector('#add');
let sBtn = document.querySelector('#sub');
let mBtn = document.querySelector('#multy');
let dBtn = document.querySelector('#divid');

let suIp1 = document.querySelector('#num1');
let suIp2 = document.querySelector('#num2');



let resultDiv = document.querySelector('#result');

//minus(parseInt(suIp1.value),parseInt(suIp2.value));
//minus 주석처리된거 대신



aBtn.onclick = function sum(){
  let su1 = parseInt(suIp1.value);
  let su2 = parseInt(suIp2.value);
  let result = su1 + su2;

    resultDiv.value = result;

}




sBtn.onclick = function minus(){
//sBtn.onclick = function minus(su1, su2){
  let su1 = parseInt(suIp1.value);
  let su2 = parseInt(suIp2.value);
  let result = su1 - su2;

    resultDiv.value = result;

}





mBtn.onclick = function gob(){
  let su1 = parseInt(suIp1.value);
  let su2 = parseInt(suIp2.value);
  let result = su1 * su2;

    resultDiv.value = result;

}





dBtn.onclick = function nanu(){
  let su1 = parseInt(suIp1.value);
  let su2 = parseInt(suIp2.value);
  let result = su1 / su2;

    resultDiv.value = result;

}