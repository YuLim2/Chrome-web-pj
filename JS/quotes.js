const quotes = [ //객체 형태로 배열 저장
    {
        quote: "장미꽃은 가시 틈에서 자란다.",
        author: "탈무드",
    },
    {
        quote: "음미되지 않은 인생은 보람이 없다.",
        author: "소크라테스",
    },
    {
        quote: "자기를 아는 것이 최대의 지혜이다.",
        author: "탈무드",
    },
    {
        quote: "불은 쇠를 단련시키고 역경은 강한 사람을 단련시킨다.",
        author: "세네카",
    },
    {
        quote: "인내는 희망을 품은 기술이다.",
        author: "시루스",
    },
    {
        quote: "운명은 용감한 자를 사랑한다. ",
        author: "버질",
    },
    {
        quote: "내가 삶에서 발견한 최대 모순은, 상처 입을 각오로 사랑을 하면 상처는 없고 사랑만 깊어진다는 것이다.",
        author: "테레사 수녀",
    },
    {
        quote: "우리는 한 번도 존재하지 않았던 것을 꿈꿀 수 있는 사람들이 필요하다.",
        author: "존 F. 케네디",
    },
    {
        quote: "무슨 일을 하기 전에는 그 일에 대해 기대를 가져야 한다.",
        author: "마이클 조던",
    },
    {
        quote: "새로운 일에 도전하다 보면 가끔 실수를 저지를 수 있다. 자신의 실수를 빨리 인정하고 다른 시도에 집중하는 것이 최선이다.",
        author: "스티브 잡스",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];  //랜덤으로 출력

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;