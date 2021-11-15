const images = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)]
const bgImage = document.createElement("img"); //img 태그 추가

bgImage.src = `BACKGROUND/${chosenImage}`; //img의 소스에 주소 추가

document.body.appendChild(bgImage); //태그를 html의 바디에 추가