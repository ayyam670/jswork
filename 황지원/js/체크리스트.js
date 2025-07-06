let supplies = document.querySelector('#item');
let aBtn = document.querySelector('#add');

let travel = [];

aBtn.onclick = function (){
  if(supplies.value == ""){
    alert('점검 목록을 입력해주세요');
  } else if(travel.indexOf(supplies.value) != -1){
    alert('중복된 목록입니다');
  } else {
    travel.push(supplies.value);
  }
  supplies.value = "";
  supplies.focus();
  show();
}


function show(){
  //입력된 내용이 웹 문서에 보이도록 <ul>,<li>로 동적으로 추가
  let list = `<ul>`;
  for(let i = 0; i < travel.length; i++){
    list += `<li>${travel[i]}
    <span class ="close" id = ${i}> X </span></li>`
    
  }
    list += `</ul>`

    document.querySelector('#itemList').innerHTML = list;

    let delList = document.querySelectorAll('.close');
    for(let i = 0; i < delList.length; i++){
      delList[i].onclick = eraser;
    }
}


function eraser(){
  let delNum = this.getAttribute('id');
  travel.splice(delNum,1);
  show();
}