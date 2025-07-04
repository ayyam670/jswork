let uId = document.querySelector('#user-id');
let Pw1 = document.querySelector('#user-pw1');
let Pw2 = document.querySelector('#user-pw2');

uId.onchange = idchc;
Pw1.onchange = pw1chc;
Pw2.onchange = pw2chc;

function idchc(){
  let idlen = uId.value.length;
  if(idlen < 4 || idlen > 15 ){
    alert('4글자 이상 15글자 이하로 입력해주세요')
    uId.select();
  }
}

function pw1chc(){
  let pwlen = Pw1.value.length;
  if(pwlen < 8){
    alert('비밀번호는 8자 이상 입력해주세요')
    Pw1.value = "";
    Pw1.focus();
  }
}

function pw2chc(){
  if(Pw1.value != Pw2.value){
    alert('확인 비밀번호가 틀렸습니다')
    Pw2.value = "";
    Pw2.focus();
  }
}