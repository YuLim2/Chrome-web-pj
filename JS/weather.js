const API_KEY = "b99ddc3d51afcea3742755b831ee1ff7"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric` //url에서 데이터 띄우기
    fetch(url).then(response => response.json()) //url의 데이터를 json 형식으로 fetch
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });

}

function onGeoErr() {
    alert("Can't find anything");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr); //위도, 경도 반환 (성공시, 실패시)