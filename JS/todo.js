const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); //toDo 텍스트 적는 곳
const toDoList = document.getElementById("todo-list"); //toDo 리스트

const toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement; //event가 일어난 element의 parentElement 선택
    li.remove();
}

function paintToDo(newTodo) { //handleToDoSubmit에서 newTodo를 받아서 리스트에 추가
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "👍";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault(); //초기 화면으로 돌아오는 걸 방지
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);