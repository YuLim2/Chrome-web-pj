const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");


const HIDDEN_CLASSNAME = "hidden";
const pass = "kingyulim";

function onLoginSubmit(event) {
    event.preventDefault(); //기본동작 실행 X
    loginForm.classList.add(HIDDEN_CLASSNAME); //로그인 폼 숨기기
    const username = loginInput.value;
    if (username === pass) { //내가 로그인 한다면
        console.log(username);
        greeting.innerText = `Hello ${username}`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
    } else { //이외의 사람이 로그인 한다면
        greeting.innerText = `누구...?`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
    }
}


loginForm.addEventListener("submit", onLoginSubmit);