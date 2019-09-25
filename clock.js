const clockContainer = document.querySelector(".js-clock");
//querySelector 는 엘리먼트의 자식을 탐색, js-clock 클래스의 자식을 탐색한다.
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
  // setInterval (fn, arg) 함수를 인자로받은 시간만큼 반복실행.
}

init();
