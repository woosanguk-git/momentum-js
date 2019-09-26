const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const gretting = document.querySelector(".js-greetings");
//쿼리셀렉터올은 모든걸 가져온다. 클래스명에 다른 엘리먼트를 가져오는데 array를 가져온다.
//클래스를 하나만 찾아도 array에 가져오기때무에 귀찮을 수 있다.

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text){
  localStorage.setItem(USER_LS, text);
  // localStorage 에
  // key  USER_LS(currentUser)
  // value text 로 저장된다.
}


function handleSubmit() {
    event.preventDefault(); 
    //submit 하면 디폴트로 새로고침 하게 되어있는걸 지워줌.

    const currentValue = input.value;
    // input 태그에서 입력된 값을 받아온다.

    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  // index.html form 태그에 SHOWING_CN(showing) 클래스 추가.
  form.addEventListener("submit", handleSubmit)
  // form 태그에 이벤트리스너 추가.
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  gretting.classList.add(SHOWING_CN);
  gretting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  // 처음엔 USER_LS 라는 키값이 저장이 안되어있으니 null이다. -> 저장된 이름 없음.
  console.log(currentUser);
  if (currentUser === null) {
    // she is not
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();




