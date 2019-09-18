const clockContainer = document.querySelector(".js-clock");
//querySelector 는 엘리먼트의 자식을 탐색, js-clock 클래스의 자식을 탐색한다.
const clockTitle = clockContainer.querySelector("h1");


function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
    getTime();
}

init();
