const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const pass = "kingyulim";

function paintGreeting() { //greet 프린트
    username = localStorage.setItem(USERNAME_KEY); //로컬스토리지에서 확인
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) { //로그인 버튼을 눌렀을 때
    event.preventDefault(); //기본동작 실행 X
    loginForm.classList.add(HIDDEN_CLASSNAME); //로그인 폼 숨기기
    const username = loginInput.value;
    if (username === pass) { //내가 로그인 한다면
        localStorage.setItem(USERNAME_KEY, username);
        paintGreeting();
    } else { //이외의 사람이 로그인 한다면
        greeting.innerText = `누구...?`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
    }
}

loginForm.addEventListener("submit", onLoginSubmit);
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null) { //username이 없다면
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit);
} else { //username이 있다면
    paintGreeting();
}