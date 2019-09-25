const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");


const TODOS_LS = 'toDos';

let toDos = [];


function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    console.log(toDos);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id); // 조건 성립할때 리턴
        // toDoList 의 삭제과정에서의 id와 toDos의 id를 비교하면 이해된다.
    });
    toDos = cleanToDos;
    saveToDos();
    //filter 는 toDos array 의 각 요소에 대해 filterFn함수 실행.
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    // Element생성

    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo)

    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    //span delBtn을 li의 자식으로 넣는다.
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text : text,
        id : newId
    };
    //toDO Object
    
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
        //forEach는 배열 각각의 요소에 함수를 실행시킨다.
    } 
}


function init(){
    loadToDos()
    toDoForm.addEventListener("submit", handleSubmit)
}

init();
